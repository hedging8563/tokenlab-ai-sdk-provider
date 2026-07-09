import { generateText } from "ai";
import { tokenlab, tokenlabModels } from "@tokenlab/ai-sdk-provider";

const { text } = await generateText({
  model: tokenlab.chatModel(tokenlabModels.balanced),
  prompt: "Explain TokenLab in one sentence."
});

console.log(text);
