import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["build/esbuild-build.ts", "static/scripts/rewards/init.ts"],
  project: ["src/**/*.ts", "static/scripts/**/*.ts"],
  ignore: ["src/types/config.ts", "**/__mocks__/**", "**/__fixtures__/**", "lib/**/*"],
  ignoreExportsUsedInFile: true,
  // eslint can also be safely ignored as per the docs: https://knip.dev/guides/handling-issues#eslint--jest
  ignoreDependencies: ["eslint-config-prettier", "eslint-plugin-prettier"],
  eslint: true,
  ignoreBinaries: ["forge"],
};

export default config;
