import { useSearchParams } from 'next/navigation';

export function useSetPage() {
  const searchParams = useSearchParams();

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', `${page}`);
    window.history.pushState(null, '', `?${params.toString()}`);
    URL;
  };

  return setPage;
}
