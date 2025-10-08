export const config = {
  port: Number(Bun.env.PORT ?? 3000),
  env: Bun.env.NODE_ENV ?? "development",
};
