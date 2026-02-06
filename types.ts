
export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  headline: string;
  summary: string;
  experiences: WorkExperience[];
  certifications: Certification[];
  skills: Skill[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    location: string;
  };
}
