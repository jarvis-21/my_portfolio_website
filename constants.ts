
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Rohith Alagiri",
  headline: "Database Developer & AWS Certified Professional",
  summary: "Results-driven Database Developer at Tata Consultancy Services with a focus on high-performance database architectures and cloud integration. Expert in PostgreSQL tuning, reducing query times from minutes to seconds. Skilled in AWS infrastructure and building robust CI/CD pipelines for database deployments.",
  experiences: [
    {
      company: "Tata Consultancy Services",
      role: "Database Developer",
      period: "Sep 2022 - Present",
      location: "India",
      description: [
        "Optimized complex queries reducing execution time from 10 minutes to 5 minutes through execution plan analysis and join indexing.",
        "Created and managed Materialized Views to improve data retrieval speeds from 5 minutes to less than 10 seconds.",
        "Designed and maintained PL/SQL scripts and stored procedures for critical business logic implementation.",
        "Automated materialized view refreshes using CRON jobs every 30 minutes to ensure real-time data accuracy.",
        "Managed database deployments using GitHub Actions and Jenkins, resolving complex deadlock issues and Liquibase errors."
      ]
    }
  ],
  certifications: [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "2025",
      link: "#"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "2023",
      link: "#"
    },
    {
      title: "Full Stack Training",
      issuer: "TCS - Tech Seal",
      date: "2023",
      link: "#"
    },
    {
      title: "Gen AI Certification",
      issuer: "TCS",
      date: "2023",
      link: "#"
    }
  ],
  skills: [
    {
      category: "Database",
      items: ["PostgreSQL", "SQL Integration", "Database Tuning", "PL/SQL", "Liquibase"]
    },
    {
      category: "Cloud (AWS)",
      items: ["S3", "RDS", "Redshift", "Glue", "Lambda", "EC2", "SQS", "SNS", "CloudWatch"]
    },
    {
      category: "Programming & Tools",
      items: ["Python", "GIT", "GitHub Actions", "Jenkins", "Docker"]
    }
  ],
  education: [
    {
      school: "University of Madras",
      degree: "Master of Computer Applications (MCA)",
      period: "July 2023 - June 2025",
      details: "Correspondence - 7.7 CGPA [First Class]"
    },
    {
      school: "RKM Vivekananda College",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "July 2019 - June 2022",
      details: "Full-Time - 8.5 CGPA [First Class]"
    }
  ],
  contact: {
    email: "rohithalagiri15@gmail.com",
    linkedin: "https://www.linkedin.com/in/rohithalagiri",
    github: "https://github.com/rohithalagiri",
    location: "India",
    phone: "+91 9150790182"
  }
};
