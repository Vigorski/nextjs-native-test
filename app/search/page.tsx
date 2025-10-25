import { ArticlesGrid } from '@/components/articles/articles-grid';
import { newsClient } from '@/lib/news-api';
import { Pagination } from '@/components/common/pagination';
import { SearchBanner } from '@/components/search-banner';

interface SearchPageProps {
	searchParams: Promise<{ q: string; page?: string }>;
}

const PAGE_SIZE = 12;
const DEFAULT_PAGE = 1;

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const params = await searchParams;
	const query = params.q;
	const currentPage = Number(params.page || DEFAULT_PAGE);

	const { articles, totalResults } = await newsClient.fetchEverything(
		query,
		currentPage,
		PAGE_SIZE
	);

	const totalPages = Math.ceil(totalResults / PAGE_SIZE);

	return (
		<>
			<SearchBanner simpleSearch />
			{articles.length > 0 && (
				<h2 className="text-2xl font-bold text-center my-10">
					Search results for: {query}
				</h2>
			)}
			<ArticlesGrid articles={articles} />
			<Pagination totalPages={totalPages} />
		</>
	);
}
