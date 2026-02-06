import { GoogleGenAI } from "@google/genai";
// No dotenv needed with node --env-file


const apiKey = process.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

async function listModels() {
    try {
        console.log("Attempting to list models...");
        const response = await ai.models.list();
        console.log("Response structure:", JSON.stringify(response, null, 2));
    } catch (error) {
        console.error("List failed:", error);
    }
}

listModels();
