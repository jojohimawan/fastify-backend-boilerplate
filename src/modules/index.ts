import { readdirSync, statSync } from "fs";
import { join } from "path";

import { FastifyInstance } from "fastify";

export async function registerModules(app: FastifyInstance) {
  const modulesDir = import.meta.dir;
  const moduleNames = readdirSync(modulesDir);

  for (const name of moduleNames) {
    const modulePath = join(modulesDir, name);
    const indexPath = join(modulePath, "index.ts");

    if (name === "index.ts" || !statSync(modulePath).isDirectory()) continue;

    try {
      const mod = await import(indexPath);

      if (mod.default && typeof mod.default === "function") {
        await mod.default(app);
        app.log.info(`✅ Registered module: ${name}`);
      } else {
        app.log.warn(`⚠️ Module ${name} has no default export.`);
      }
    } catch (err) {
      app.log.error(`❌ Failed to load module ${name}: ${err}`);
    }
  }
}
