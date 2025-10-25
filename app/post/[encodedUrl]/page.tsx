import { ArticleExtracted } from '@/components/articles/article-extracted';
import { InfoCTA } from '@/components/info-cta';

interface PostPageProps {
	params: Promise<{ encodedUrl: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
	const { encodedUrl } = await params;
	const articleUrl = Buffer.from(encodedUrl, 'base64url').toString();

	return (
		<>
			<ArticleExtracted articleUrl={articleUrl} />
			<InfoCTA theme="dark" />
			{/* I was unable to extract enough information from the article about the author (aside from the name) to display it here as a separate section. The plugin I used called @extractus/article-extractor could only gather the author's name. */}
		</>
	);
}
