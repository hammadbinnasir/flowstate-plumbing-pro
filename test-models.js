import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyAeACslKQxfoLSDxDB3rlbK36JSNFuZyjo";
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
