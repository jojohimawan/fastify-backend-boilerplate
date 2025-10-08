import { HealthResponse } from "@definition";
import { healthRepository } from "@module/health/health.repository";

export const healthService = {
  async getStatus(): Promise<HealthResponse> {
    return await healthRepository.checkSystem();
  },
};
