"use client";

import Pagination from "../common/Pagination";
import MoveCard from "./MoveCard";
import { useEffect, useState,useId } from "react";
import { useCurrentPage } from "@/hooks/useCurrentPage";
import SearchForm from "../common/SearchFrom";
import CardItemsSkeleton from "../common/CardItemsSkeleton";

export default function MoveList() {
  const [move, setMove] = useState<any>([]);
  const moveData = move?.data || [];
  const keyId=useId()
  // get current page
  const currentPage = useCurrentPage();
  // Fetch move data from a public API
  useEffect(() => {
    fetch(`https://jsonfakery.com/movies/paginated?${currentPage}`)
      .then((response) => response.json())
      .then((data) => setMove(data));
  }, [currentPage]);

  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <div className="md:flex md:justify-between md:items-center mb-10 space-y-4">
        <h1 className="text-3xl font-bold">Move List</h1>
        <div className="min-w-[300px]">
          <SearchForm />
        </div>
      </div>
      {moveData?.length > 0 ? (
        <>
          <div className="grid grid-cols-4 gap-4">
            {moveData.map((item: any) => (
              <div key={item?.movie_id + keyId} className="md:col-span-1 col-span-4">
                <MoveCard moveData={item} />
              </div>
            ))}
          </div>
          <div className="py-10">
            <Pagination lastPage={move?.last_page || 0} />
          </div>
        </>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {Array(12)
            .fill(1)
            .map((item: any) => (
              <div key={item?.movie_id} className="md:col-span-1 col-span-4">
                <CardItemsSkeleton />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
