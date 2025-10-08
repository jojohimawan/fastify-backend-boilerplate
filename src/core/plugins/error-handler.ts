import { FastifyInstance } from "fastify";

import { AppError } from "@core/utils/error";
import { failure } from "@core/utils/response";

export async function errorHandler(app: FastifyInstance) {
  app.setErrorHandler((error, _, res) => {
    if (error instanceof AppError) {
      return res
        .status(error.statusCode)
        .send(failure(error.message, error.statusCode));
    }

    app.log.error(error);
    return res.status(500).send(failure("Internal Server Error", 500));
  });
}
