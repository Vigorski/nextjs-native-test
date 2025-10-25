import { NewsArticle } from '@/types/news';

const WORDS_PER_MINUTE = 300;
const AVERAGE_WORD_LENGTH = 5;

function getWordsCount(article: NewsArticle) {
	const fullText = [
		article.title,
		article.description || '',
		article.content || ''
	].join(' ');

	return fullText.split(/\s+/).length;
}

export function getAverageWordCount(totalChars: number) {
	return totalChars / AVERAGE_WORD_LENGTH;
}

export function estimateReadingTime(words: number) {
	return Math.max(Math.ceil(words / WORDS_PER_MINUTE), 3);
}

export function estimateReadingTimeFromNewsAPI(article: NewsArticle) {
	const { content } = article;

	// Check if content is truncated (e.g., "[+1000 chars]")
	const truncatedMatch = content?.match(/\[\+(\d+) chars\]/);

	if (content && truncatedMatch) {
		const additionalChars = parseInt(truncatedMatch[1]);
		const totalChars = content.length + additionalChars;
		const words = getAverageWordCount(totalChars);
		return estimateReadingTime(words);
	}

	const words = getWordsCount(article);
	return estimateReadingTime(words);
}
