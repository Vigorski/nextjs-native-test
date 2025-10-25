import { Category, NewsResponse } from '@/types/news';

class NewsAPIClient {
	private apiKey: string;
	private baseUrl = 'https://newsapi.org/v2';

	constructor(apiKey: string) {
		if (!apiKey) {
			throw new Error('NewsAPI key is required');
		}

		this.apiKey = apiKey;
	}

	async fetchTopHeadlines(
		category: Category,
		page = 1,
		pageSize = 50,
	): Promise<Omit<NewsResponse, 'status'>> {
		if (!category || category.trim() === '') {
			throw new Error('Query parameter is required');
		}

		
		const params = new URLSearchParams({
			category: category,
			pageSize: pageSize.toString(),
			page: page.toString(),
			apiKey: this.apiKey
		});
		
		try {
			const response = await fetch(`${this.baseUrl}/top-headlines?${params}`, {
				next: { revalidate: 600 },
				headers: {
					Accept: 'application/json'
				}
			});

			if (!response.ok) {
				throw new Error(
					`NewsAPI HTTP error: ${response.status} ${response.statusText}`
				);
			}

			const data: NewsResponse = await response.json();

			if (data.status !== 'ok') {
				throw new Error('NewsAPI returned an error');
			}

			return {articles: data.articles, totalResults: data.totalResults};
		} catch (error) {
			if (error instanceof Error) {
				console.error('NewsAPI Error:', error.message);
				throw error;
			}

			console.error('Unexpected error:', error);
			throw new Error('An unexpected error occurred while fetching news');
		}
	}

	async fetchEverything(
		query: string,
		page = 1,
		pageSize = 50
	): Promise<Omit<NewsResponse, 'status'>> {
		if (!query || query.trim() === '') {
			throw new Error('Query parameter is required');
		}

		const params = new URLSearchParams({
			q: query,
			pageSize: pageSize.toString(),
			page: page.toString(),
			sortBy: 'popularity',
			apiKey: this.apiKey
		});

		try {
			const response = await fetch(`${this.baseUrl}/everything?${params}`, {
				next: { revalidate: 600 },
				headers: {
					Accept: 'application/json'
				}
			});

			if (!response.ok) {
				throw new Error(
					`NewsAPI HTTP error: ${response.status} ${response.statusText}`
				);
			}

			const data: NewsResponse = await response.json();

			if (data.status !== 'ok') {
				throw new Error('NewsAPI returned an error');
			}

			return {articles: data.articles, totalResults: data.totalResults};
		} catch (error) {
			if (error instanceof Error) {
				console.error('NewsAPI Error:', error.message);
				throw error;
			}

			console.error('Unexpected error:', error);
			throw new Error('An unexpected error occurred while fetching news');
		}
	}
}

export const newsClient = new NewsAPIClient(
	process.env.NEXT_PUBLIC_NEWS_API_KEY || ''
);
