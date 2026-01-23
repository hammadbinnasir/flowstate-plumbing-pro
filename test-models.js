import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyA495f_bR7eTn1bMaOL1pGZZ7y2npiQ0No";
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
