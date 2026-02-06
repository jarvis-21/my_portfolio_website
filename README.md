
# 🚀 Hosting Your Professional AI Portfolio

This portfolio is built with React, Tailwind CSS, Framer Motion, and the Gemini AI API. It is designed to be hosted on any static site hosting provider for free.

## 🛠 Prerequisites

1.  **Gemini API Key:** Obtain one from [Google AI Studio](https://aistudio.google.com/).
2.  **GitHub Account:** To store your code and connect to hosting providers.

## 📦 Deployment Options

### 1. Vercel (Recommended)
Vercel is the easiest way to deploy modern web apps.
1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and click **"Add New" > "Project"**.
3.  Import your repository.
4.  **Important:** Under "Environment Variables", add:
    -   Key: `API_KEY`
    -   Value: `YOUR_GEMINI_API_KEY_HERE`
5.  Click **Deploy**.

### 2. Netlify
1.  Push your code to GitHub.
2.  Go to [Netlify](https://www.netlify.com/) and click **"Add a new site" > "Import an existing project"**.
3.  Connect your GitHub and select the repo.
4.  Go to **"Site settings" > "Environment variables"** and add `API_KEY`.
5.  Deploy the site.

### 3. GitHub Pages
1.  Go to your repository settings on GitHub.
2.  Navigate to **"Pages"**.
3.  Select **"GitHub Actions"** as the source.
4.  GitHub will provide templates for static sites. Use the "Static HTML" workflow.
5.  *Note: Since GitHub Pages is purely static, ensure your environment variables are handled correctly or hardcoded if you are comfortable with the key being public (not recommended for production).*

## 🔒 Security Note
The `process.env.API_KEY` is accessed on the client side. For a production-grade application where you want to hide your key entirely, you would typically use a **Serverless Function** (available on Vercel/Netlify) to proxy the Gemini requests. 

For a personal portfolio, client-side access is often acceptable for demonstration purposes, but be aware of the usage limits of your API key.
