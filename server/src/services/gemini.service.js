import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const analyzeResume = async (resumeText) => {
  const prompt = `
You are an ATS Resume Analyzer.

Analyze this resume and respond ONLY with valid JSON.

{
  "atsScore": 0,
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "suggestions": []
}

Resume:

${resumeText}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: prompt,
  });

  let text = response.text.trim();

  // Remove markdown code fences if Gemini returns them
  text = text.replace(/^```json\s*/i, "");
  text = text.replace(/^```\s*/i, "");
  text = text.replace(/```$/, "");

  return JSON.parse(text);
};