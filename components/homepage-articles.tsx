'use client';

import { NewsArticle } from '@/types/news';
import { CategoryFilter } from './category-filter';
import { ArticleCard } from './article-card';
import { ArticlePagination } from './article-pagination';

interface HomePageArticlesProps {
	articles: NewsArticle[];
	totalPages: number;
}

export function HomePageArticles({
	articles,
	totalPages,
}: HomePageArticlesProps) {	
	return (
		<div>
			<CategoryFilter />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{articles.map((article, index) => (
					<ArticleCard
						key={`${article.url}-${index}`}
						article={article}
					/>
				))}

				{articles.length === 0 && (
					<div className="text-center py-8">
						<p className="text-muted-foreground">
							No articles found for this category.
						</p>
					</div>
				)}
				
				<ArticlePagination totalPages={totalPages} />
			</div>
		</div>
	);
}
