import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const apiKey = process.env.VITE_GEMINI_API_KEY || "YOUR_API_KEY_HERE";
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
