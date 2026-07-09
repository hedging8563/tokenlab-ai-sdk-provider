import { createTokenLab, tokenlabModels, TOKENLAB_BASE_URL } from "../src/index.js";

const tokenlab = createTokenLab({ apiKey: "test-key" });

if (!tokenlab || typeof tokenlab.chatModel !== "function") {
  throw new Error("createTokenLab did not return an AI SDK compatible provider.");
}

if (TOKENLAB_BASE_URL !== "https://api.tokenlab.sh/v1") {
  throw new Error("Unexpected TokenLab base URL.");
}

if (!tokenlabModels.balanced) {
  throw new Error("Missing model shortcuts.");
}

console.log("tokenlab ai sdk provider smoke ok");
