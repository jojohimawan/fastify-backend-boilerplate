import { buildApp } from "@app";
import { config } from "@config";

const app = await buildApp();

const start = async (): Promise<void> => {
  try {
    await app.listen({
      port: config.port,
    });
    app.log.info(`🚀 Server running on port ${config.port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

const shutdown = async (signal?: string): Promise<void> => {
  console.log(`\n🛑 Received ${signal || "exit"} signal, shutting down...`);
  try {
    await app.close();
    console.info("✅ Server closed gracefully.");
    process.exit(0);
  } catch (err) {
    console.error(`❌ Error during shutdown: ${err}`);
    process.exit(1);
  }
};

["SIGINT", "SIGTERM", "SIGHUP"].forEach((signal) => {
  process.on(signal, () => shutdown(signal));
});

process.on("exit", () => shutdown("exit"));
