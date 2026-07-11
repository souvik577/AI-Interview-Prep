import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

console.log("GEMINI KEY:", process.env.GEMINI_API_KEY?.slice(0, 10));


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
    model: "gemini-flash-latest",
    contents: prompt,
  });

  let text = response.text.trim();

  // Remove markdown code fences if Gemini returns them
  text = text.replace(/^```json\s*/i, "");
  text = text.replace(/^```\s*/i, "");
  text = text.replace(/```$/, "");

  return JSON.parse(text);
};