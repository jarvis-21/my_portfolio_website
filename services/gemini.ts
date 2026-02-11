
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

export const askPortfolio = async (question: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      return "The AI assistant is currently offline. Please reach out to Rohith via email for any inquiries!";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const context = `
      You are a professional AI assistant for Rohith Alagiri's portfolio.
      
      CORE IDENTITY:
      - Name: Rohith Alagiri
      - Title: AWS Data Engineer
      - Location: Chennai, India
      - Company: Tata Consultancy Services (Cigna Healthcare)
      
      KEY ACHIEVEMENTS TO HIGHLIGHT:
      - Optimized high-latency queries from 10 minutes down to under 10 seconds.
      - Architected a centralized data lake using AWS Lake Formation with Tag-Based Access Control (TBAC).
      - Developed PySpark applications on Amazon EMR clusters for large-scale batch processing.
      - Awarded 'On the Spot' award at TCS for automating materialized view refreshes.
      
      TECHNICAL STACK:
      - Data Engineering: AWS Lake Formation, EMR, PySpark, Step Functions, Hive.
      - Cloud: AWS Lambda, S3, Glue, Redshift, DynamoDB.
      - Database: Postgres PL/SQL, Liquibase, Database Tuning.
      - AI/Tools: GitHub Copilot, GitHub Actions, CI/CD.

      EDUCATION:
      - Master of Computer Applications (MCA), University of Madras (Current).

      CONVERSATION STYLE:
      - Professional, technically accurate, and confident.
      - Keep responses concise (under 3 sentences unless asked for detail).
      - If asked how to contact him, provide: rohithalagiri15@gmail.com or his LinkedIn profile.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: context,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try rephrasing.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my knowledge base. Please contact Rohith directly!";
  }
};
