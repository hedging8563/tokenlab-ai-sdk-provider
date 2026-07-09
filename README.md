# TokenLab AI SDK Provider

TokenLab provider for Vercel AI SDK, built on the official OpenAI-compatible provider package.

TokenLab supports OpenAI-compatible `/v1` routes plus native Responses, Anthropic Messages, Gemini, media, audio, embeddings, rerank, and translation APIs. This package focuses on the AI SDK OpenAI-compatible path for text generation, streaming, tools, and structured output.

## Install

```bash
npm install ai @tokenlab/ai-sdk-provider
```

Until the npm package is published, install from GitHub:

```bash
npm install ai github:hedging8563/tokenlab-ai-sdk-provider
```

## Usage

```ts
import { generateText } from "ai";
import { tokenlab } from "@tokenlab/ai-sdk-provider";

const { text } = await generateText({
  model: tokenlab.chatModel("gpt-5.4"),
  prompt: "Explain TokenLab in one sentence."
});

console.log(text);
```

## Custom Provider Instance

```ts
import { createTokenLab } from "@tokenlab/ai-sdk-provider";

export const tokenlab = createTokenLab({
  apiKey: process.env.TOKENLAB_API_KEY,
  baseURL: "https://api.tokenlab.sh/v1"
});
```

## Environment

```bash
TOKENLAB_API_KEY=sk-your-tokenlab-key
```

## Model Discovery

Prefer live model discovery for production routing:

```bash
curl https://api.tokenlab.sh/v1/models
curl "https://api.tokenlab.sh/v1/models?recommended_for=embedding"
curl https://api.tokenlab.sh/llms.txt
```

## Native Endpoints

Use this provider for AI SDK OpenAI-compatible text paths. For TokenLab native endpoint families, use TokenLab's REST API directly:

- Responses: `POST https://api.tokenlab.sh/v1/responses`
- Anthropic Messages: `POST https://api.tokenlab.sh/v1/messages`
- Gemini generateContent: `POST https://api.tokenlab.sh/v1beta/models/{model}:generateContent`
- Images, videos, audio, embeddings, rerank, and translation: see `https://docs.tokenlab.sh`

## Links

- Docs: https://docs.tokenlab.sh/integrations/vercel-ai-sdk
- OpenAPI: https://docs.tokenlab.sh/openapi.json
- Model catalog: https://api.tokenlab.sh/v1/models
- MCP server: https://github.com/hedging8563/tokenlab-mcp-server
