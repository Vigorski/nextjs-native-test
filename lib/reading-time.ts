import { NewsArticle } from "@/types/news";

const WORDS_PER_MINUTE = 200;
const AVERAGE_WORD_LENGTH = 5;

function getFullText(article: NewsArticle): string {
	return [
		article.title,
		article.description || '',
		article.content || ''
	].join(' ');
}

export function estimateReadingTime(article: NewsArticle): number {
	const { content } = article;
  
  // Check if content is truncated (e.g., "[+1000 chars]")
  const truncatedMatch = content?.match(/\[\+(\d+) chars\]/);
  
  if (content && truncatedMatch) {
    const additionalChars = parseInt(truncatedMatch[1]);
    const totalChars = content.length + additionalChars;
    const words = totalChars / AVERAGE_WORD_LENGTH;
    return Math.ceil(words / WORDS_PER_MINUTE);
  }

	const fullText = getFullText(article);
	const words = fullText.split(/\s+/).length;
  return Math.max(Math.ceil(words / WORDS_PER_MINUTE), 3);
}