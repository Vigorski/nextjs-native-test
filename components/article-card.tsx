import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { NewsArticle } from '@/types/news';
import { ChevronRight } from 'lucide-react';
import { estimateReadingTime } from '@/lib/reading-time';

interface ArticleCardProps {
	article: NewsArticle;
}

export function ArticleCard({ article }: ArticleCardProps) {
	const readingTime = estimateReadingTime(article);

	return (
		<Link
			href={`/post/`}
			className="block h-full">
			<Card className="h-full flex flex-col gap-0 hover:shadow-lg transition-shadow">
				<div className="relative h-48 w-full overflow-hidden rounded-t-lg">
					{article.urlToImage ? (
						<Image
							src={article.urlToImage}
							alt={article.title}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					) : (
						<div className="h-full w-full bg-muted flex items-center justify-center">
							<span className="text-muted-foreground text-sm">No Image</span>
						</div>
					)}
				</div>


				<CardContent className="flex-1 px-4 py-8 relative">
					<div className="absolute left-0 top-0 -translate-y-1/2 bg-primary px-6 py-2.5 rounded-r-md flex items-center">
						<span className="text-xs font-medium text-white">
							{readingTime} min read
						</span>
					</div>
					<h3 className="font-semibold text-lg line-clamp-2 mb-2">
						{article.title}
					</h3>
				</CardContent>

				<CardFooter className="p-4 pt-0">
					<p className="text-sm text-muted-foreground flex items-center gap-2">
						Read more <ChevronRight className="h-6 w-6" />
					</p>
				</CardFooter>
			</Card>
		</Link>
	);
}
