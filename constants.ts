
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Alex Sterling",
  headline: "Senior Software Engineer & Product Strategist",
  summary: "Results-driven Senior Software Engineer with 8+ years of experience building scalable distributed systems and user-centric web applications. Expert in React, Node.js, and Cloud Infrastructure. Proven track record of leading cross-functional teams to deliver high-impact features for Fortune 500 companies and fast-growing startups.",
  experiences: [
    {
      company: "TechNova Solutions",
      role: "Senior Software Engineer",
      period: "Jan 2021 - Present",
      location: "San Francisco, CA",
      description: [
        "Architected and deployed a microservices-based platform serving 2M+ daily active users, reducing latency by 40%.",
        "Lead a team of 6 engineers to migrate legacy monolith to React/Next.js and AWS serverless architecture.",
        "Implemented automated CI/CD pipelines using GitHub Actions, reducing deployment time from hours to minutes."
      ]
    },
    {
      company: "Global Stream Inc.",
      role: "Full Stack Developer",
      period: "June 2018 - Dec 2020",
      location: "Austin, TX",
      description: [
        "Developed high-performance video streaming dashboards used by enterprise clients for real-time analytics.",
        "Optimized database queries for PostgreSQL, improving data retrieval speeds by 60% for large-scale datasets.",
        "Collaborated with UX designers to implement a standardized design system across 4 distinct product lines."
      ]
    },
    {
      company: "StartUp Edge",
      role: "Junior Web Developer",
      period: "May 2016 - May 2018",
      location: "Remote",
      description: [
        "Built responsive web interfaces for various B2B clients using React and Redux.",
        "Integrated third-party APIs for payment processing and CRM management.",
        "Successfully launched 5+ MVP projects for early-stage startups."
      ]
    }
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "#"
    },
    {
      title: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "2022",
      link: "#"
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta / Coursera",
      date: "2021",
      link: "#"
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL"]
    },
    {
      category: "Infrastructure",
      items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Serverless"]
    }
  ],
  contact: {
    email: "alex.sterling@example.com",
    linkedin: "https://linkedin.com/in/alexsterling",
    github: "https://github.com/alexsterling",
    location: "San Francisco, CA"
  }
};
