import { generateText } from "ai";
import { tokenlab, tokenlabModels } from "@tokenlabai/ai-sdk-provider";

const { text } = await generateText({
  model: tokenlab.chatModel(tokenlabModels.frontier),
  prompt: "Explain TokenLab in one sentence."
});

console.log(text);
