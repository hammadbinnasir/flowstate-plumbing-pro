
import { GoogleGenAI, Type } from "@google/genai";
import { AIResult } from "../types";

export const analyzePlumbingIssue = async (
  description: string,
  imageData?: string
): Promise<AIResult> => {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || '' });

  const systemInstruction = `
    You are an expert master plumber with 30 years of experience. 
    Analyze the user's plumbing problem description and optional photo.
    Provide a professional assessment including the likely problem, severity, estimated cost range (USD), and recommendation.
    Be honest about whether it's a DIY fix or requires a professional.
    ALWAYS return valid JSON.
  `;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      problem: { type: Type.STRING, description: "Succinct name of the issue" },
      severity: { type: Type.STRING, enum: ["Low", "Medium", "High", "Emergency"] },
      estimatedCost: { type: Type.STRING, description: "Range of cost like '$150 - $300'" },
      recommendation: { type: Type.STRING, description: "What the user should do right now" },
      canDIY: { type: Type.BOOLEAN, description: "Is it safe for a homeowner to try fixing?" }
    },
    required: ["problem", "severity", "estimatedCost", "recommendation", "canDIY"]
  };

  const parts: any[] = [{ text: `User Description: ${description}` }];

  if (imageData) {
    parts.push({
      inlineData: {
        mimeType: 'image/jpeg',
        data: imageData.split(',')[1] // remove data:image/jpeg;base64,
      }
    });
  }

  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-exp',
    contents: { parts },
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema
    }
  });

  try {
    return JSON.parse(response.text) as AIResult;
  } catch (e) {
    throw new Error("Failed to analyze plumbing issue. Please try again.");
  }
};
