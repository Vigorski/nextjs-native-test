interface PostPageProps {
	params: Promise<{ encodedUrl: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
	const { encodedUrl } = await params;
	const articleUrlDecoded = Buffer.from(encodedUrl, 'base64url').toString();
	
	return (
		<div>
			<h1>{articleUrlDecoded}</h1>
		</div>
	);
}