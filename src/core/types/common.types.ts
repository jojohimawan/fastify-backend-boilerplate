export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  code?: number;
}

export interface ErrorResponse {
  success: false;
  message: string;
  code: number;
  details?: unknown;
}
