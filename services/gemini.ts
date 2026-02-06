
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

export const askPortfolio = async (question: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    
    // Prepare context from portfolio data
    const context = `
      You are an AI assistant for Alex Sterling's professional portfolio.
      Your goal is to answer questions about Alex's professional background, skills, experience, and certifications based on the data provided below.
      
      Candidate Profile:
      Name: ${PORTFOLIO_DATA.name}
      Headline: ${PORTFOLIO_DATA.headline}
      Summary: ${PORTFOLIO_DATA.summary}
      
      Work Experience:
      ${PORTFOLIO_DATA.experiences.map(exp => `
        - ${exp.role} at ${exp.company} (${exp.period}) in ${exp.location}.
          Responsibilities: ${exp.description.join('. ')}
      `).join('\n')}
      
      Certifications:
      ${PORTFOLIO_DATA.certifications.map(cert => `- ${cert.title} from ${cert.issuer} (${cert.date})`).join('\n')}
      
      Skills:
      ${PORTFOLIO_DATA.skills.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}
      
      Contact Information:
      Email: ${PORTFOLIO_DATA.contact.email}
      LinkedIn: ${PORTFOLIO_DATA.contact.linkedin}
      GitHub: ${PORTFOLIO_DATA.contact.github}
      Location: ${PORTFOLIO_DATA.contact.location}

      Rules:
      1. Be professional and concise.
      2. Only answer based on the information provided.
      3. If a recruiter asks a question you don't have the answer to, suggest they contact Alex directly.
      4. Use a helpful, friendly tone.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: context,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later or contact me via email!";
  }
};
