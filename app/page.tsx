import { Pagination } from '@/components/common/pagination';
import { CategoryFilter } from '@/components/common/category-filter';
import { ArticlesGrid } from '@/components/articles/articles-grid';
import { newsClient } from '@/lib/news-api';
import { Category } from '@/types/news';
import { ArticleLatest } from '@/components/articles/article-latest';
import { InfoCTA } from '@/components/info-cta';
import { SearchBanner } from '@/components/search-banner';
import { NewsletterCTA } from '@/components/newsletter-cta';

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
	console.log(articles);
  return (
		<>
			<SearchBanner />
			<CategoryFilter />
			<ArticleLatest article={articles[0]} />
			<ArticlesGrid articles={articles} />
			<Pagination totalPages={totalPages} />
			<InfoCTA />
			<NewsletterCTA />
		</>
  );
}
