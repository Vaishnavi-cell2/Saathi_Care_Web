
import { GoogleGenAI } from "@google/genai";

export const getAIParentingInsight = async () => {
  try {
    // Correctly initialize with process.env.API_KEY as a named parameter
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      // Using standard model alias for flash lite as per guidelines
      model: 'gemini-flash-lite-latest',
      contents: "Give a short (20 words max), empathetic, and motivational daily quote or tip for a single parent juggling work and family. Focus on self-care and resilience.",
      config: {
        temperature: 0.7,
        maxOutputTokens: 100,
      }
    });
    // response.text is a property, returning the string directly
    return response.text || "You're doing an incredible job. Remember to take a deep breath today.";
  } catch (error) {
    console.error("AI Insight Error:", error);
    return "Your strength is your superpower. Keep going, SaathiCare is with you.";
  }
};

export const getAIJobMatch = async () => {
    try {
      // Correctly initialize with process.env.API_KEY as a named parameter
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        // Using standard model alias for flash lite as per guidelines
        model: 'gemini-flash-lite-latest',
        contents: "Suggest 3 flexible job titles for a single parent who needs remote work and high work-life balance. Return as a plain comma-separated list.",
      });
      // response.text is a property
      return response.text?.split(',') || ["Customer Success Specialist", "Content Strategist", "Virtual Assistant"];
    } catch (error) {
      console.error("AI Job Match Error:", error);
      return ["Virtual Project Coordinator", "Online Tutor", "Data Analyst"];
    }
}
