import { extract, addTransformations } from '@extractus/article-extractor';

interface ExtractedArticle {
	title?: string;
	content?: string;
	author?: string;
	ttr?: number;
	published?: string;
	image?: string;
	error?: string;
}

addTransformations([
	{
		patterns: [/.*/],
		post: (document: Document) => {
			const allElements = document.querySelectorAll('*');
			allElements.forEach(element => {
				const preservedTags = [
					'img',
					'br',
					'hr',
					'input',
					'video',
					'audio',
					'source',
					'iframe'
				];
				if (preservedTags.includes(element.nodeName.toLowerCase())) {
					return;
				}

				const hasText = element.textContent?.trim().length > 0;
				const hasMedia = element.querySelector(
					'img, video, audio, iframe, svg'
				);

				if (!hasText && !hasMedia) {
					element.remove();
				}
			});

			return document;
		}
	}
]);

export async function extractArticle(
	url: string
): Promise<ExtractedArticle | null> {
	try {
		const article = await extract(
			url,
			{
				wordsPerMinute: 250
			},
			{
				headers: {
					'User-Agent':
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
					Accept:
						'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
					'Accept-Language': 'en-US,en;q=0.9',
					'Accept-Encoding': 'gzip, deflate, br',
					DNT: '1',
					Connection: 'keep-alive',
					'Upgrade-Insecure-Requests': '1'
				},
				signal: AbortSignal.timeout(5000)
			}
		);

		if (!article) {
			throw new Error('Failed to parse article');
		}

		return {
			title: article.title,
			content: article.content,
			author: article.author,
			ttr: article.ttr,
			published: article.published,
			image: article.image
		};
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		console.error(errorMessage);
		return { error: `Article extraction failed: ${errorMessage}` };
	}
}
