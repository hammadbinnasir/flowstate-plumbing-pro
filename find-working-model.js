import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyAeACslKQxfoLSDxDB3rlbK36JSNFuZyjo";
const ai = new GoogleGenAI({ apiKey });

async function findWorkingModel() {
    try {
        console.log("Listing models...");
        const modelsResult = await ai.models.list();

        let models = [];
        if (modelsResult && Array.isArray(modelsResult.pageInternal)) {
            models = modelsResult.pageInternal;
        } else if (modelsResult && Array.isArray(modelsResult.models)) {
            models = modelsResult.models;
        } else if (Array.isArray(modelsResult)) {
            models = modelsResult;
        }

        if (models.length === 0) {
            console.error("No models found. Structure:", JSON.stringify(modelsResult).substring(0, 500));
            return;
        }

        console.log(`Found ${models.length} models.`);

        for (const model of models) {
            const modelName = model.name;
            const hasGenerate = model.supportedActions && model.supportedActions.includes('generateContent');

            if (!hasGenerate) {
                console.log(`Skipping ${modelName} (no generateContent support)`);
                continue;
            }

            try {
                console.log(`\nTesting ${modelName}...`);
                const response = await ai.models.generateContent({
                    model: modelName,
                    contents: { parts: [{ text: "Hello" }] }
                });
                console.log(`✅ SUCCESS WITH ${modelName}!`);
                return;
            } catch (error) {
                console.log(`❌ FAILED ${modelName}: ${error.status} - ${error.message.substring(0, 100)}...`);
            }
        }
    } catch (error) {
        console.error("Critical failure during test:", error);
    }
}

findWorkingModel();
