
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

export const askPortfolio = async (question: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    
    const context = `
      You are an AI assistant for Rohith Alagiri's professional portfolio.
      Rohith is a Database Developer at Tata Consultancy Services with deep expertise in PostgreSQL and AWS.

      Key Accomplishments:
      - Optimized queries from 10 minutes to 5 minutes.
      - Reduced data retrieval time from 5 minutes to <10 seconds using Materialized Views.
      - Automated DB refreshes every 30 minutes with CRON jobs.
      - Recipient of 'On the Spot' and 'Star Team' awards at TCS.

      Candidate Profile:
      Name: ${PORTFOLIO_DATA.name}
      Headline: ${PORTFOLIO_DATA.headline}
      Summary: ${PORTFOLIO_DATA.summary}
      
      Work Experience:
      ${PORTFOLIO_DATA.experiences.map(exp => `
        - ${exp.role} at ${exp.company} (${exp.period}).
          Key results: ${exp.description.join('. ')}
      `).join('\n')}
      
      Education:
      ${PORTFOLIO_DATA.education.map(edu => `- ${edu.degree} from ${edu.school} (${edu.period}). Grade: ${edu.details}`).join('\n')}

      Certifications:
      ${PORTFOLIO_DATA.certifications.map(cert => `- ${cert.title} from ${cert.issuer} (${cert.date})`).join('\n')}
      
      Skills:
      ${PORTFOLIO_DATA.skills.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}
      
      Contact Information:
      Email: ${PORTFOLIO_DATA.contact.email}
      LinkedIn: ${PORTFOLIO_DATA.contact.linkedin}
      Phone: ${PORTFOLIO_DATA.contact.phone}

      Rules:
      1. Be professional and concise.
      2. If asked about his project "E-Commerce Platform", mention he was the Lead Frontend Developer using Angular 15.
      3. Focus on his database optimization metrics when asked about technical performance.
      4. Suggest contacting Rohith directly for interview requests.
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
