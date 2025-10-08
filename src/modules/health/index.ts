import type { FastifyPluginAsync } from "fastify";

import { healthController } from "@module/health/health.controller";

const healthModule: FastifyPluginAsync = async (app) => {
  app.register(healthController, { prefix: "/health" });
};

export default healthModule;
