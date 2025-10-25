import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/types/news';
import { ChevronRight } from 'lucide-react';
import { estimateReadingTime } from '@/lib/reading-time';

interface ArticleLatestProps {
	article: NewsArticle;
}

export function ArticleLatest({ article }: ArticleLatestProps) {
	const readingTime = estimateReadingTime(article);

	return (
		<section className="container mx-auto block w-full mb-8 mt-12">
			<div className="grid grid-cols-1 gap-15 lg:grid-cols-2 bg-ice-cold border border-gray-200 rounded-lg py-20 px-25">
				<div className="relative h-64 lg:h-auto min-h-[300px] xl:min-h-[400px]">
					{article.urlToImage ? (
						<Image
							src={article.urlToImage}
							alt={article.title}
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
							priority
						/>
					) : (
						<div className="h-full w-full bg-muted flex items-center justify-center">
							<span className="text-muted-foreground">No Image Available</span>
						</div>
					)}
				</div>

				<div className="flex flex-col gap-5 py-4 lg:py-8">
					<div className="flex items-center bg-primary px-6 py-2.5 rounded-md w-fit">
						<span className="text-xs font-medium text-white">
							{readingTime} min read
						</span>
					</div>

					<h2 className="text-2xl lg:text-[32px] font-bold line-clamp-2">
						{article.title}
					</h2>

					{article.description && (
						<p className="text-lg line-clamp-5">
							{article.description}
						</p>
					)}

					<Link
						href={article.url}
						target="_blank"
						className="flex items-center gap-2 text-primary font-semibold group mt-auto">
						<span>Read more</span>
						<ChevronRight className="h-8 w-8 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</div>
		</section>
	);
}
