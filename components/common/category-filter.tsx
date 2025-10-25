'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Category, CATEGORIES } from '@/types/news';
import { cn } from '@/lib/utils';

export function CategoryFilter() {
	const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = (searchParams.get('category') || CATEGORIES[0]) as Category;

	const createCategoryUrl = (category: Category) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', category);
		params.set('page', '1');
    return `${pathname}?${params.toString()}`;
  };

  return (
		<div className="container mx-auto">
			<div className="flex flex-wrap gap-2 mb-6">
				{CATEGORIES.map((category) => {
					const isActive = currentCategory === category;
					
					return (
						<Link key={category} href={createCategoryUrl(category)}>
							<Button
								className={cn(
									'capitalize cursor-pointer hover:bg-stone-200 hover:text-zinc-700 rounded-full',
									isActive ? 'bg-primary text-white' : 'bg-stone-100 text-zinc-500'
								)}
								size="xl"
							>
								{category}
							</Button>
						</Link>
					);
				})}
			</div>
		</div>
  );
}
