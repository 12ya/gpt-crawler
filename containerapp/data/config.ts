import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.conun.io",
  match: "https://www.conun.io/**",
  maxPagesToCrawl: 50,
  outputFileName: "../data/output.json",
};
