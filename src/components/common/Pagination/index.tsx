import { Button, Flex } from '@radix-ui/themes';
import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight } from '@icons';
import './style.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Flex justify='center' align='center' gap='25px' pb={'20px'}>
      <Button
        variant='ghost'
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
        className='pagination-nav-button'
      >
        <IconChevronsLeft width={16} height={16} />
      </Button>

      <Button
        variant='ghost'
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className='pagination-nav-button'
      >
        <IconChevronLeft width={16} height={16} />
      </Button>

      {getPageNumbers().map((page, index) =>
        page === '...' ? (
          <span key={`ellipsis-${index}`} className='pagination-ellipsis'>
            ...
          </span>
        ) : (
          <Button
            key={page}
            variant={currentPage === page ? 'solid' : 'ghost'}
            onClick={() => onPageChange(page as number)}
            className={`pagination-button ${
              currentPage === page ? 'pagination-button--active' : 'pagination-button--inactive'
            }`}
          >
            {page}
          </Button>
        )
      )}

      <Button
        variant='ghost'
        className='pagination-nav-button'
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <IconChevronRight width={16} height={16} />
      </Button>

      <Button
        variant='ghost'
        className='pagination-nav-button'
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        <IconChevronsRight width={16} height={16} />
      </Button>
    </Flex>
  );
};

export default Pagination;
