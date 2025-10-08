import { FastifyInstance } from "fastify";

import { healthService } from "@module/health/health.service";
import { HealthResponse } from "@definition";

export async function healthController(app: FastifyInstance) {
  app.get("/", async (): Promise<HealthResponse> => {
    return await healthService.getStatus();
  });
}
