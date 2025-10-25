import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ArticleNotFoundProps {
	articleUrl: string;
}

export const ArticleNotFound = ({ articleUrl }: ArticleNotFoundProps) => {
	return (
		<section className="min-h-screen bg-background flex justify-center px-4">
			<div className="container mx-auto text-center space-y-8 mt-16">
				<div className="space-y-3">
					<h1 className="text-3xl lg:text-4xl font-bold">
						Article Not Available
					</h1>
					<p className="text-lg text-muted-foreground max-w-md mx-auto">
						We couldn&apos;t load the article content. This might be due to
						publisher restrictions or technical issues.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
					<Button
						size="lg"
						variant="outline"
						className="w-full sm:w-auto rounded-full"
						asChild>
						<Link href="/">Back to Home</Link>
					</Button>

					<div className="hidden sm:block text-muted-foreground">or</div>

					<Button
						size="lg"
						className="w-full sm:w-auto gap-2 rounded-full"
						asChild>
						<Link
							href={articleUrl}
							target="_blank"
							rel="noopener noreferrer">
							View Original Article
							<ExternalLink className="h-4 w-4" />
						</Link>
					</Button>
				</div>

				<p className="text-sm text-muted-foreground pt-8">
					You can read the full article on the publisher&apos;s website
				</p>
			</div>
		</section>
	);
};
