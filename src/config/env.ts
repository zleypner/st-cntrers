export const env = {
  // App
  NEXT_PUBLIC_APP_URL:
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",

  // Feature flags
  NEXT_PUBLIC_ENABLE_DEVTOOLS:
    process.env.NEXT_PUBLIC_ENABLE_DEVTOOLS === "true",
} as const;
