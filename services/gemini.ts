
import { GoogleGenAI } from "@google/genai";

export const askPortfolio = async (question: string): Promise<string> => {
  try {
    // Initializing with direct access to process.env.API_KEY as per instructions
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const context = `
      You are a professional AI assistant for Rohith Alagiri's portfolio.
      
      CORE IDENTITY:
      - Name: Rohith Alagiri
      - Role: AWS Data Engineer
      - Location: Chennai, India
      - Company: Tata Consultancy Services (TCS), working for Cigna Healthcare.
      
      PROFESSIONAL SUMMARY:
      - 3 years of experience in data engineering and database optimization.
      - Expertise: AWS (Lake Formation, EMR, Redshift, Glue), PySpark, SQL/PL/SQL.
      - Key Success: Reduced query latency by 50%.
      
      DETAILED EXPERIENCE (TCS):
      - Built Scalable Data Lakes using AWS Lake Formation & Tag-Based Access Control (TBAC).
      - Developed PySpark apps on Amazon EMR clusters for S3 data.
      - Orchestrated pipelines using AWS Step Functions.
      - Implemented Redshift Spectrum and Materialized Views for high-speed querying.
      - Performance Engineering: Optimized queries from 10 minutes to under 10 seconds.
      - Automation: Built a custom CRON job for 30-minute materialized view refreshes (won 'On the Spot' award).
      - Tools: GitHub Copilot, Liquibase, DBeaver, Postman.

      EDUCATION & CERTS:
      - MCA from University of Madras (2023-2025).
      - AWS Certified Data Engineer - Associate.
      - GitHub Copilot Certified.

      CONVERSATION STYLE:
      - Professional, technically insightful, and helpful.
      - Keep responses focused and efficient.
      - Provide contact details if requested: rohithalagiri15@gmail.com.
    `;

    // Using generateContent with recommended model and config structure
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: context,
        temperature: 0.7,
      },
    });

    // Accessing .text property directly as per the correct method defined in guidelines
    return response.text || "I'm sorry, I couldn't process that. Please try rephrasing.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my knowledge base. Please contact Rohith directly!";
  }
};
