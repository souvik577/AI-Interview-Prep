import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateInterviewQuestions = async (role, level) => {
  const prompt = `
You are a senior technical interviewer.

Generate exactly 5 interview questions.

Role: ${role}
Experience Level: ${level}

Rules:
- Return ONLY valid JSON.
- No markdown.
- No explanation.

Format:

{
  "questions": [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5"
  ]
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-lite",
    contents: prompt,
  });

  let text = response.text.trim();

  text = text.replace(/^```json/i, "");
  text = text.replace(/^```/, "");
  text = text.replace(/```$/, "");

  return JSON.parse(text);
};