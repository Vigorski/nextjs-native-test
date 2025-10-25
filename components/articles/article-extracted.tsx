import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { extractArticle } from '@/lib/extract-article';
import { Breadcrumbs } from '@/components/common/breadcrumbs';
import Image from 'next/image';
import { ArticleNotFound } from './article-not-found';

export const ArticleExtracted = async ({
	articleUrl
}: {
	articleUrl: string;
}) => {
	const data = await extractArticle(articleUrl);
	const sanitizedContent = data?.error ? '' : data?.content || '';
	const readingTime = data?.ttr && Math.ceil(data?.ttr / 60);
	const publishedTime = data?.published
		? new Date(data?.published).toLocaleDateString('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric'
		  })
		: 'Date unavailable';

	if (!data || data?.error) {
		return <ArticleNotFound articleUrl={articleUrl} />;
	}

	return (
		<section className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-8 max-w-5xl">
				<Breadcrumbs items={[{ label: data.title || '' }]} />

				<h1 className="text-4xl lg:text-5xl font-bold text-center mt-18 mb-8">
					{data.title}
				</h1>

				<div className="flex items-center justify-center gap-4 mb-8 pb-8">
					<time dateTime={data.published || ''}>{publishedTime}</time>
					{readingTime && (
						<>
							<span>|</span>
							<span>{readingTime} minutes read</span>
						</>
					)}
					{data.author && (
						<>
							<span>|</span>
							<span>By {data.author}</span>
						</>
					)}
				</div>

				{data.image && (
					<div className="relative w-full max-h-[400px] lg:h-[500px] mb-12 rounded-lg overflow-hidden">
						<Image
							src={data.image}
							alt={data.title || 'Hero image of the article'}
							fill
							className="object-cover"
							priority
							sizes="(max-width: 1200px) 100vw, 1200px"
						/>
					</div>
				)}

				{sanitizedContent && (
					<article
						className="article-content"
						dangerouslySetInnerHTML={{ __html: sanitizedContent }}
					/>
				)}

				<div className="my-12 pt-8">
					<div className="bg-accent p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
						<div>
							<p className="font-semibold mb-1">Read the original article</p>
							<p className="text-sm text-muted-foreground">
								Visit the source for the complete experience
							</p>
						</div>
						<Button
							size="lg"
							className="rounded-full"
							asChild>
							<Link
								href={articleUrl}
								target="_blank">
								View Original
								<ExternalLink className="h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
