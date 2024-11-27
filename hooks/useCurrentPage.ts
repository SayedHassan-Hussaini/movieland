import { useSearchParams } from 'next/navigation';

export const useCurrentPage = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const currentPage = parseInt(page || '1', 10);
  return currentPage;
};
