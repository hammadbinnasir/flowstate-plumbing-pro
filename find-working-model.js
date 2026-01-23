import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyA495f_bR7eTn1bMaOL1pGZZ7y2npiQ0No";
const ai = new GoogleGenAI({ apiKey });

async function findWorkingModel() {
    const models = [
        "gemini-2.0-flash-exp",
        "gemini-1.5-flash",
        "models/gemini-1.5-flash",
        "gemini-1.5-flash-001",
        "gemini-pro"
    ];

    console.log("Searching for a working model...");

    for (const model of models) {
        console.log(`\nTesting ${model}...`);
        try {
            const response = await ai.models.generateContent({
                model: model,
                contents: { parts: [{ text: "Hello" }] }
            });
            console.log(`✅ SUCCESS: ${model} works!`);
            // return; // Don't stop, list all working ones
        } catch (e) {
            // If it's 429, it means the model EXISTS and is valid, just rate limited.
            if (e.status === 429 || (e.message && e.message.includes('429'))) {
                console.log(`⚠️ VALID BUT LIMITED: ${model} (429 Resource Exhausted)`);
            } else {
                console.log(`❌ FAILED: ${model} - Status: ${e.status} Message: ${e.message}`);
            }
        }
    }
}

findWorkingModel();
