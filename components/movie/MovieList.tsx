"use client";

import Pagination from "../common/Pagination";
import MoveCard from "./MovieCard";
import { useCurrentPage } from "@/hooks/useCurrentPage";
import SearchForm from "../common/SearchFrom";
import CardItemsSkeleton from "../common/CardItemsSkeleton";
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "@/queries";

export default function MoveList() {
  const currentPage = useCurrentPage();
  const { data, loading, error } = useQuery(GET_MOVIES, {
    variables: { page: currentPage },
  });

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-10 grid grid-cols-4 gap-4">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="md:col-span-1 col-span-4">
              <CardItemsSkeleton />
            </div>
          ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 mx-auto max-w-7xl px-5 py-10">
        Error: {error.message}
      </p>
    );
  }

  const moveData = data?.movies || [];

  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <div className="md:flex md:justify-between md:items-center mb-10 space-y-4">
        <h1 className="text-3xl font-bold">Movie List</h1>
        <div className="min-w-[300px]">
          <SearchForm />
        </div>
      </div>
      {moveData.length > 0 ? (
        <>
          <div className="grid grid-cols-4 gap-4">
            {moveData.map((item: any) => (
              <div key={item.id} className="md:col-span-1 col-span-4">
                <MoveCard moveData={item} />
              </div>
            ))}
          </div>
          <div className="py-10">
            <Pagination lastPage={2} />
          </div>
        </>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}
