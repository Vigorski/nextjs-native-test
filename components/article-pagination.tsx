'use client';

import { useSearchParams, usePathname } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface ArticlePaginationProps {
  totalPages: number;
}

export function ArticlePagination({ totalPages }: ArticlePaginationProps) {
	const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const siblingCount = 1;
	const minPages = 7;

  const createPaginatedUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    return `${pathname}?${params.toString()}`;
  };

  const getPaginatedNumbers = (): (number | 'ellipsis')[] => {
		if (totalPages <= minPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | 'ellipsis')[] = [];
    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftEllipsis = leftSibling > 2;
    const showRightEllipsis = rightSibling < totalPages - 1;

    pages.push(1);

    if (showLeftEllipsis) pages.push('ellipsis');

    for (let i = leftSibling; i <= rightSibling; i++) {
      if (i > 1 && i < totalPages) pages.push(i);
    }

    if (showRightEllipsis) pages.push('ellipsis');

    pages.push(totalPages);

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            href={createPaginatedUrl(Math.max(1, currentPage - 1))}
            aria-disabled={currentPage === 1}
            className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>

        {getPaginatedNumbers().map((page, index) => (
          <PaginationItem key={index}>
            {page === 'ellipsis' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href={createPaginatedUrl(page)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext 
            href={createPaginatedUrl(Math.min(totalPages, currentPage + 1))}
            aria-disabled={currentPage === totalPages}
            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}