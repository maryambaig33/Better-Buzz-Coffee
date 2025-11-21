import { GoogleGenAI } from "@google/genai";
import { MenuItem } from "../types";

// Hardcoded menu context for the AI to know what we sell
const MENU_CONTEXT = `
- Best Drink Ever (Vanilla powder, Americano, creamy)
- The Hornet (Cinnamon honey latte)
- Hazelnut Divinity (White chocolate, hazelnut, espresso)
- Iced Matcha Latte (Sweetened matcha green tea)
- OG Acai Bowl (Acai, granola, banana, berries)
- Turkey Pesto Panini (Roasted turkey, pesto, mozzarella)
- Cold Brew (Smooth, high caffeine)
- Mint Infused Iced Coffee (Fresh mint, creamy)
`;

export const getDrinkRecommendation = async (userMood: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key is missing");
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `The user says: "${userMood}".
      
      You are an energetic, trendy barista at "Better Buzz Coffee". 
      Your catchphrase is "Life's Better Buzzed".
      Based on the user's input, recommend ONE specific item from this menu:
      ${MENU_CONTEXT}

      Rules:
      1. Be brief, punchy, and enthusiastic.
      2. Mention the drink name clearly.
      3. Explain why it fits their mood in 1 sentence.
      4. End with "Life's Better Buzzed!".
      `,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "I think you need a 'Best Drink Ever' to get things started! Life's Better Buzzed!";
  } catch (error) {
    console.error("Error getting recommendation:", error);
    return "Our wifi needs more coffee! Just go for the 'Best Drink Ever' - you can't go wrong.";
  }
};