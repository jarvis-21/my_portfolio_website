
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Rohith Alagiri",
  headline: "AWS Data Engineer",
  summary: "Results-driven Data Engineer with 3 years of experience specializing in building scalable data pipelines, optimizing complex Postgres SQL/PL/SQL queries, and leveraging AWS services for data integration. Proven track record of reducing query latency by 50% and automating data refresh cycles using cloud-native tools.",
  experiences: [
    {
      company: "Tata Consultancy Services (Cigna Healthcare)",
      role: "AWS Data Engineer",
      period: "Sep 2022 - Present",
      location: "Chennai, India",
      description: [
        "Architected a centralized data lake using AWS Lake Formation with Tag-Based Access Control (TBAC) for secure consumer access.",
        "Developed and deployed PySpark applications on Amazon EMR clusters to process large-scale batch datasets in S3.",
        "Leveraged AWS Step Functions to automate end-to-end data processing workflows and orchestrate on-demand EMR jobs.",
        "Implemented Amazon Redshift solutions using Redshift Spectrum and Materialized Views to accelerate complex analytical queries.",
        "Optimized high-latency queries from 10 minutes down to under 10 seconds through query plan analysis and join-condition indexing.",
        "Engineered a custom CRON Job scheduler to refresh materialized views every 30 minutes, ensuring data accuracy.",
        "Designed and maintained robust PL/SQL scripts and database schemas to support core business logic.",
        "Managed database deployments via GitHub and automated pipelines, troubleshooting Liquibase and deadlock issues."
      ]
    }
  ],
  certifications: [
    {
      title: "AWS Certified Data Engineer - Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      link: "#"
    },
    {
      title: "GitHub Copilot",
      issuer: "GitHub",
      date: "2024",
      link: "#"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "#"
    }
  ],
  skills: [
    {
      category: "Data Engineering",
      items: ["AWS Lake Formation", "Amazon EMR", "PySpark", "AWS Step Functions", "Hive"]
    },
    {
      category: "Cloud & AWS",
      items: ["Lambda", "S3", "Glue", "Redshift", "DynamoDB", "API Gateway", "Secrets Manager", "SNS", "SQS"]
    },
    {
      category: "Database Dev",
      items: ["Postgres PL/SQL", "SQL Integration", "Database Tuning", "Liquibase", "Schema Architecture"]
    },
    {
      category: "Tools & AI",
      items: ["GitHub Copilot", "GitHub Actions", "CI/CD", "CRON Scheduling", "JIRA", "DBeaver", "Postman"]
    }
  ],
  education: [
    {
      school: "University of Madras",
      degree: "Master of Computer Applications (MCA)",
      period: "06/2023 - 07/2025",
      details: "Chennai, India"
    }
  ],
  contact: {
    email: "rohithalagiri15@gmail.com",
    linkedin: "https://www.linkedin.com/in/rohithalagiri",
    github: "https://github.com/rohithalagiri",
    location: "Chennai, India",
    phone: "+91 9150790182"
  }
};
