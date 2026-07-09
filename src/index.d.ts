import type { OpenAICompatibleProvider } from "@ai-sdk/openai-compatible";

export declare const TOKENLAB_BASE_URL = "https://api.tokenlab.sh/v1";

export interface TokenLabProviderOptions {
  apiKey?: string;
  baseURL?: string;
  name?: string;
  includeUsage?: boolean;
  headers?: Record<string, string>;
}

export declare function createTokenLab(options?: TokenLabProviderOptions): OpenAICompatibleProvider;

export declare const tokenlab: OpenAICompatibleProvider;

export declare const tokenlabModels: {
  frontier: "gpt-5.5";
  balanced: "gpt-5.4";
  fast: "gpt-5.4-mini";
  coding: "claude-sonnet-5";
  geminiFast: "gemini-3.5-flash";
};
