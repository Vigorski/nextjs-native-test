import { ArticleCard } from '@/components/article-card';
import { ArticlePagination } from '@/components/article-pagination';
import { CategoryFilter } from '@/components/category-filter';
import { newsClient } from '@/lib/news-api';
import { Category } from '@/types/news';

const PAGE_SIZE = 9;
const DEFAULT_CATEGORY = 'technology';
const DEFAULT_PAGE = 1;

interface HomeProps {
  searchParams: Promise<{
		category?: string;
		page?: string;
	}>;
}

export default async function Home({ searchParams }: HomeProps) {
	const params = await searchParams;

	const category = (params.category || DEFAULT_CATEGORY) as Category;
  const currentPage = Number(params.page || DEFAULT_PAGE);

	const {articles, totalResults} = await newsClient.fetchTopHeadlines(category, currentPage, PAGE_SIZE);
	
	const totalPages = Math.ceil(totalResults / PAGE_SIZE);

	console.log(articles, totalResults);
	
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
				
			</div>

			<ArticlePagination totalPages={totalPages} />
		</div>
  );
}
