import assert from "node:assert/strict";
import { createServer } from "node:http";
import test from "node:test";

import { generateText } from "ai";
import { createTokenLab, tokenlabModels, TOKENLAB_BASE_URL } from "../src/index.js";

test("creates a TokenLab AI SDK 7 provider", () => {
  const tokenlab = createTokenLab({ apiKey: "test-key" });

  assert.equal(typeof tokenlab.chatModel, "function");
  assert.equal(TOKENLAB_BASE_URL, "https://api.tokenlab.sh/v1");
  assert.equal(tokenlabModels.frontier, "gpt-5.5");
});

test("generates text through the OpenAI-compatible TokenLab route", async (t) => {
  let received;
  const server = createServer(async (request, response) => {
    let body = "";
    for await (const chunk of request) body += chunk;
    received = {
      url: request.url,
      authorization: request.headers.authorization,
      body: JSON.parse(body)
    };

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({
      id: "chatcmpl_test",
      object: "chat.completion",
      created: 1,
      model: "gpt-5.5",
      choices: [{
        index: 0,
        message: { role: "assistant", content: "OK" },
        finish_reason: "stop"
      }],
      usage: { prompt_tokens: 2, completion_tokens: 1, total_tokens: 3 }
    }));
  });

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  t.after(() => new Promise((resolve) => server.close(resolve)));
  const address = server.address();
  const tokenlab = createTokenLab({
    apiKey: "test-key",
    baseURL: `http://127.0.0.1:${address.port}/v1`
  });

  const result = await generateText({
    model: tokenlab.chatModel("gpt-5.5"),
    prompt: "Reply OK"
  });

  assert.equal(result.text, "OK");
  assert.equal(received.url, "/v1/chat/completions");
  assert.equal(received.authorization, "Bearer test-key");
  assert.equal(received.body.model, "gpt-5.5");
  assert.equal(received.body.messages[0].content, "Reply OK");
});
