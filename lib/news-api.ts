import { Category, NewsResponse } from '@/types/news';

class NewsAPIClient {
	private readonly baseUrl = 'https://newsapi.org/v2';

	constructor(private readonly apiKey: string) {
		if (!apiKey) {
			throw new Error('NewsAPI key is required');
		}
	}

	private async fetchArticles(endpoint: string, params: URLSearchParams): Promise<Omit<NewsResponse, 'status'>> {
		try {
			const response = await fetch(`${this.baseUrl}${endpoint}?${params}`, {
				next: { revalidate: 600 },
				headers: {
					Accept: 'application/json',
					'X-Api-Key': this.apiKey
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

	async fetchTopHeadlines(
		category: Category,
		page = 1,
		pageSize = 50,
	): Promise<Omit<NewsResponse, 'status'>> {
		if (!category) {
			throw new Error('Category is required');
		}

		const params = new URLSearchParams({
			category: category,
			pageSize: pageSize.toString(),
			page: page.toString()
		});
		
		return await this.fetchArticles('/top-headlines', params);
	}

	async fetchEverything(
		query: string,
		page = 1,
		pageSize = 50
	): Promise<Omit<NewsResponse, 'status'>> {
		if (!query) {
			throw new Error('Query is required');
		}

		const params = new URLSearchParams({
			q: query,
			pageSize: pageSize.toString(),
			page: page.toString(),
			sortBy: 'popularity',
			language: 'en'
		});

		return await this.fetchArticles('/everything', params);
	}
}

export const newsClient = new NewsAPIClient(
	process.env.NEWS_API_KEY || ''
);
