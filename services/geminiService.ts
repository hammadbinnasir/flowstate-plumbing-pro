
import { GoogleGenAI, Type } from "@google/genai";
import { AIResult } from "../types";

export const analyzePlumbingIssue = async (
  description: string,
  imageData?: string
): Promise<AIResult> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
  const ai = new GoogleGenAI({ apiKey });

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

  try {
    const response = await ai.models.generateContent({
      model: 'models/gemini-2.5-flash', // Use the working model found in diagnostics
      contents: { parts },
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema
      }
    });
    return JSON.parse(response.text) as AIResult;
  } catch (e: any) {
    console.warn("AI API FAILED, USING FALLBACK MOCK DATA:", e);

    // If it's a quota error or rate limit, provide a "Demo Mode" response
    // so the user can still show the website functionality to clients.
    const isQuotaError = e.message?.includes('quota') || e.message?.includes('429') || e.status === 429;

    if (isQuotaError) {
      // Return a realistic mock result so the UI still looks great
      return {
        problem: "Potential Pipe Corrosion (Demo Mode)",
        severity: "Medium",
        estimatedCost: "$250 - $450",
        recommendation: "This looks like a standard corrosion issue. While not an emergency yet, you should have a plumber inspect your P-trap and supply lines within the next 48 hours to prevent a major burst.",
        canDIY: false
      };
    }

    const errorMsg = e.message || JSON.stringify(e);
    throw new Error(`AI ERROR: ${errorMsg}`);
  }
};
