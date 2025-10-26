# News App
A modern news application built with Next.js 15, fetching articles from NewsAPI.

## Features
- Browse articles by category
- Search functionality
- Article detail pages with full content extraction
- Responsive design with mobile menu
- Server-side rendering for optimal performance

## Tech Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Shadcn UI**
- **NewsAPI** for data
- **@extractus/article-extractor** for full article content

## Setup
1. Clone the repository
2. Install dependencies:
	```bash
	npm install
	```
3. Create `.env` file from example:
	```bash
	cp .env.example .env
	```
4. Add your NewsAPI key to `.env`:
	```bash
	cp .env.example .envy at [newsapi.org](https://newsapi.org/register)
	```
5. Run the development server:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000)

## Build
```bash
npm run build
npm start
```