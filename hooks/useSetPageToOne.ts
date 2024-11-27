import { useSearchParams } from 'next/navigation';

/**
 * Custom hook to set the 'page' query parameter to 1.
 */
export function useSetPageToOne() {
  const searchParams = useSearchParams();

  const setPageToOne = () => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1'); // Set 'page' parameter to 1
    window.history.pushState(null, '', `?${params.toString()}`); // Update the search parameters in the URL
  };

  return setPageToOne;
}
