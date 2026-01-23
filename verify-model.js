import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyA495f_bR7eTn1bMaOL1pGZZ7y2npiQ0No";
const ai = new GoogleGenAI({ apiKey });

async function testGen() {
    try {
        console.log("Testing generation with 'models/gemini-1.5-flash'...");
        const response = await ai.models.generateContent({
            model: 'models/gemini-1.5-flash',
            contents: { parts: [{ text: "Hello" }] }
        });
        console.log("SUCCESS: Response received!");
        console.log(response.text().substring(0, 50) + "...");
    } catch (error) {
        console.error("Test failed:", JSON.stringify(error, null, 2));
    }
}

testGen();
