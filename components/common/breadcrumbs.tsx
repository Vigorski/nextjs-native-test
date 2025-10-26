import Link from 'next/link';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

export interface BreadcrumbItem {
	label: string;
	href?: string;
}

interface BreadcrumbsProps {
	items: BreadcrumbItem[];
	showHome?: boolean;
}

export function Breadcrumbs({ items, showHome = true }: BreadcrumbsProps) {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{showHome && (
					<>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/" className="text-foreground text-base">News</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className="[&>svg]:size-5 text-foreground" />
					</>
				)}

				{items.map((item, index) => {
					const isLast = index === items.length - 1;

					return (
						<BreadcrumbItem key={index}>
							{isLast ? (
								<BreadcrumbPage className="text-primary line-clamp-1 max-w-[200px] text-base">
									{item.label}
								</BreadcrumbPage>
							) : (
								<>
									<BreadcrumbLink asChild>
										<Link href={item.href || '#'} className="text-foreground text-base">{item.label}</Link>
									</BreadcrumbLink>
									<BreadcrumbSeparator />
								</>
							)}
						</BreadcrumbItem>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
