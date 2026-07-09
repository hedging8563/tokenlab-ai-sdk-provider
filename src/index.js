import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

export const TOKENLAB_BASE_URL = "https://api.tokenlab.sh/v1";

function envApiKey() {
  if (typeof process === "undefined") {
    return undefined;
  }
  return process.env?.TOKENLAB_API_KEY;
}

export function createTokenLab(options = {}) {
  return createOpenAICompatible({
    name: options.name ?? "tokenlab",
    apiKey: options.apiKey ?? envApiKey(),
    baseURL: options.baseURL ?? TOKENLAB_BASE_URL,
    includeUsage: options.includeUsage ?? true,
    headers: options.headers
  });
}

export const tokenlab = createTokenLab();

export const tokenlabModels = {
  frontier: "gpt-5.5",
  balanced: "gpt-5.4",
  fast: "gpt-5.4-mini",
  coding: "claude-sonnet-5",
  geminiFast: "gemini-3.5-flash"
};
