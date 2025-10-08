import type { ApiResponse } from "@definition";

export function success<T>(data: T, message: "Success"): ApiResponse<T> {
  return {
    success: true,
    message,
    data,
  };
}

export function failure(message: string, code = 500): ApiResponse<null> {
  return {
    success: false,
    message,
    code,
    data: null,
  };
}
