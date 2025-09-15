import type { AppConfig } from "@remix-run/dev";

const config: AppConfig = {
  serverBuildTarget: "vercel",
  appDirectory: "app", // Adjust if your app directory is named differently
};

export default config;
