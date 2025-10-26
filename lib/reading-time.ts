import { NewsArticle } from '@/types/news';

// ------------------------------------------------------------------------------------------
// NOTE:
// Would like to point out that there are issues with estimating reading time.
// When fetching data from newsAPI, we get a limited set of data with a 'content' prop. 
// This prop has a fragment of the actual text in the article but sometimes it is trunkated
// with a `[+3250 chars]`, and sometimes its just a short text which is not even correct 
// to the actual content of the article. 
// When we actually go the article details, the extract plugin provides a time to read 
// which is more or less correct. So effectively, we have two sources of truth, 
// the first one of which is not correct all of the time, but it provides a rough estimate.
// Another solution to this problem would be to fetch the actual content from the original site.
// But this opens another can of worms, so I chose to simply use what we have available.
// ------------------------------------------------------------------------------------------

const WORDS_PER_MINUTE = 250;
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
