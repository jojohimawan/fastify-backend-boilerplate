import { HealthResponse } from "@definition";

export const healthRepository = {
  async checkSystem(): Promise<HealthResponse> {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
    };
  },
};
