import Fastify from "fastify";

import { registerModules } from "@module/index";
import { plugins } from "@plugins";

export const buildApp = async () => {
  const app = Fastify({
    logger: true,
  });

  for (const plugin of plugins) {
    await app.register(plugin);
  }

  await registerModules(app);

  app.ready((): void => {
    console.info(`========================================================`);
    console.info(`©2025 Mooda Transport - Backend.`);
    console.info(`A Prototype by Cyber Security Research Group, PENS.`);
    console.info(`In Collaboration with Piramida Tekologi Informasi, PT.`);
    console.info(`\nPacta Sunt Servanda.`);
    console.info(`========================================================\n`);

    console.error(app.printPlugins());
  });

  return app;
};
