
import { GoogleGenAI } from "@google/genai";

const keyA = "AIzaSyBNwrOL0EEkoKRYzX_6hNYthTYfjQg1EUM";
const keyB = "AIzaSyAeACslKQxfoLSDxDB3rlbK36JSNFuZyjo";

async function testKey(key, label) {
    const ai = new GoogleGenAI({ apiKey: key });
    try {
        console.log(`Testing ${label}...`);
        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: { parts: [{ text: "Hello" }] }
        });
        console.log(`${label} SUCCESS`);
        return true;
    } catch (error) {
        console.log(`${label} FAILED: ${error.message}`);
        return false;
    }
}

async function run() {
    await testKey(keyA, "Key A (from .env.local)");
    await testKey(keyB, "Key B (from user/instructions)");
}

run();

