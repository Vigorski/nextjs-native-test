'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ActionInput } from './common/action-input';
import { cn } from '@/lib/utils';

interface SearchBannerProps {
	simpleSearch?: boolean;
}

export function SearchBanner({ simpleSearch }: SearchBannerProps) {
	const router = useRouter();

	const handleSubmit = (query: string) => {
		const trimmedQuery = query.trim();
		if (trimmedQuery) {
			router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
		}
	};

	return (
		<section className={cn("container mx-auto mt-15 relative max-w-4xl", simpleSearch ? 'mb-15' : 'mb-30')}>
			{!simpleSearch && (
				<div className="absolute inset-0 pointer-events-none">
					<Image
						src="/nt-heart.svg"
						alt="Native Teams Heart"
						width={80}
						height={80}
						className="absolute top-4 left-[-50px]"
					/>
					<Image
						src="/star.svg"
						alt="Star"
						width={50}
						height={50}
						className="absolute bottom-16 left-10 opacity-60"
					/>
					<Image
						src="/star.svg"
						alt="Star"
						width={30}
						height={30}
						className="absolute top-0 right-20 opacity-60"
					/>
				</div>
			)}
			<div className="flex flex-col items-center text-center space-y-3">
				{!simpleSearch && (
					<>
						<h4 className="text-[32px] font-bold text-primary">
							Native Teams Blog
						</h4>
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-9">
							Resources, Tips and Tricks About the Modern Way of Working
						</h1>
					</>
				)}
				<ActionInput
					onSubmit={handleSubmit}
					placeholder="Search for posts"
					buttonText="Search"
				/>
			</div>
		</section>
	);
}
