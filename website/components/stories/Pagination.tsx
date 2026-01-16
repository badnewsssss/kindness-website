'use client';

import { forwardRef, useMemo, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
  itemsPerPageOptions?: number[];
  showItemsPerPage?: boolean;
  maxPageButtons?: number;
}

/**
 * Pagination controls for navigating through story pages
 * Features: Previous/Next buttons, page numbers, items per page selector
 * Includes "Showing X-Y of Z" text, keyboard accessible, ARIA labels
 */
export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      totalItems,
      itemsPerPage,
      onPageChange,
      onItemsPerPageChange,
      itemsPerPageOptions = [12, 24, 48, 96],
      showItemsPerPage = true,
      maxPageButtons = 7,
      className,
      ...props
    },
    ref
  ) => {
    // Calculate showing range
    const startItem = Math.min((currentPage - 1) * itemsPerPage + 1, totalItems);
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    // Calculate visible page numbers
    const pageNumbers = useMemo(() => {
      const pages: (number | 'ellipsis')[] = [];

      if (totalPages <= maxPageButtons) {
        // Show all pages if total is less than max
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Always show first page
        pages.push(1);

        // Calculate range around current page
        const startPage = Math.max(2, currentPage - Math.floor(maxPageButtons / 2));
        const endPage = Math.min(totalPages - 1, startPage + maxPageButtons - 3);

        // Adjust start if we're near the end
        const adjustedStart = Math.max(2, Math.min(startPage, totalPages - maxPageButtons + 2));

        // Add ellipsis after first page if needed
        if (adjustedStart > 2) {
          pages.push('ellipsis');
        }

        // Add middle pages
        for (let i = adjustedStart; i <= endPage; i++) {
          pages.push(i);
        }

        // Add ellipsis before last page if needed
        if (endPage < totalPages - 1) {
          pages.push('ellipsis');
        }

        // Always show last page
        pages.push(totalPages);
      }

      return pages;
    }, [currentPage, totalPages, maxPageButtons]);

    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange(page);
      }
    };

    const handleItemsPerPageChange = (value: number) => {
      onItemsPerPageChange?.(value);
      // Reset to page 1 when changing items per page
      if (currentPage > 1) {
        onPageChange(1);
      }
    };

    // Don't show pagination if there are no items
    if (totalItems === 0 || totalPages === 0) {
      return null;
    }

    return (
      <nav
        ref={ref}
        className={cn('flex flex-col sm:flex-row items-center justify-between gap-4', className)}
        aria-label="Pagination navigation"
        {...props}
      >
        {/* Items Info */}
        <div className="text-sm text-gray-600">
          Showing{' '}
          <span className="font-medium text-gray-900">{startItem.toLocaleString()}</span>
          {' '}-{' '}
          <span className="font-medium text-gray-900">{endItem.toLocaleString()}</span>
          {' '}of{' '}
          <span className="font-medium text-gray-900">{totalItems.toLocaleString()}</span>
          {' '}stories
        </div>

        {/* Page Navigation */}
        <div className="flex items-center gap-2">
          {/* First Page */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            aria-label="Go to first page"
            className="hidden sm:inline-flex"
          >
            <ChevronsLeft className="w-4 h-4" aria-hidden="true" />
          </Button>

          {/* Previous Page */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Go to previous page"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          {/* Page Numbers */}
          <div className="hidden md:flex items-center gap-1" role="list">
            {pageNumbers.map((page, index) => {
              if (page === 'ellipsis') {
                return (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-3 py-1 text-gray-500"
                    aria-hidden="true"
                    role="listitem"
                  >
                    ...
                  </span>
                );
              }

              const isCurrentPage = page === currentPage;

              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  disabled={isCurrentPage}
                  aria-label={`${isCurrentPage ? 'Current page, page' : 'Go to page'} ${page}`}
                  aria-current={isCurrentPage ? 'page' : undefined}
                  className={cn(
                    'min-w-[2.5rem] h-10 px-3 rounded-md font-medium transition-colors',
                    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
                    isCurrentPage
                      ? 'bg-blue-600 text-white cursor-default'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                  )}
                  role="listitem"
                >
                  {page}
                </button>
              );
            })}
          </div>

          {/* Current Page Indicator (Mobile) */}
          <div className="md:hidden px-3 py-1 text-sm font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </div>

          {/* Next Page */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Go to next page"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Button>

          {/* Last Page */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            aria-label="Go to last page"
            className="hidden sm:inline-flex"
          >
            <ChevronsRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>

        {/* Items Per Page Selector */}
        {showItemsPerPage && onItemsPerPageChange && (
          <div className="flex items-center gap-2">
            <label htmlFor="items-per-page" className="text-sm text-gray-600 whitespace-nowrap">
              Per page:
            </label>
            <select
              id="items-per-page"
              value={itemsPerPage}
              onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
              className="block rounded-md border border-gray-300 py-1.5 pl-3 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              aria-label="Items per page"
            >
              {itemsPerPageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';
