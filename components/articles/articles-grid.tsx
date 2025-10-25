import { NewsArticle } from '@/types/news';
import { ArticleCard } from './article-card';

interface ArticlesGridProps {
	articles: NewsArticle[];
}

export function ArticlesGrid({
	articles,
}: ArticlesGridProps) {	
	return (
		<section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{articles.map((article, index) => (
				<ArticleCard
					key={`${article.url}-${index}`}
					article={article}
					priority={index === 0}
				/>
			))}

			{articles.length === 0 && (
				<div className="text-center py-8">
					<p className="text-muted-foreground">
						No articles found for this category.
					</p>
				</div>
			)}
		</section>
	);
}
