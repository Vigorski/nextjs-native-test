'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error('Error:', error);
	}, [error]);

	return (
		<div className="flex items-center justify-center min-h-[60vh] px-4">
			<div className="max-w-md w-full text-center space-y-6">
				<div className="flex justify-center">
					<div className="rounded-full bg-destructive/10 p-6">
						<AlertCircle className="h-12 w-12 text-destructive" />
					</div>
				</div>
				
				<div className="space-y-2">
					<h1 className="text-2xl font-bold">Something went wrong!</h1>
					<p className="text-muted-foreground">
						We encountered an error while loading this page.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-3 justify-center">
					<Button
						onClick={reset}
						variant="default"
						size="lg"
					>
						Try again
					</Button>
					<Button
						onClick={() => window.location.href = '/'}
						variant="outline"
						size="lg"
					>
						Go home
					</Button>
				</div>

				{process.env.NODE_ENV === 'development' && (
					<details className="mt-6 text-left">
						<summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
							Error details (dev only)
						</summary>
						<pre className="mt-2 text-xs bg-muted p-4 rounded overflow-auto">
							{error.message}
						</pre>
					</details>
				)}
			</div>
		</div>
	);
}