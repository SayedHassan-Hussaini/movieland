"use client";

import MoveCard from "./MovieCard";
import { useEffect, useState } from "react";
import { useCurrentPage } from "@/hooks/useCurrentPage";
import CardItemsSkeleton from "../common/CardItemsSkeleton";

export default function PopularMovie() {
  const [move, setMove] = useState<any>([]);

  // get current page
  const currentPage = useCurrentPage();
  // Fetch move data from a public API
  useEffect(() => {
    fetch(`https://jsonfakery.com/movies/random/3`)
      .then((response) => response.json())
      .then((data) => setMove(data));
  }, [currentPage]);
  // console.log("move............", move);
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Popular Move</h1>
      {move?.length > 0 ? (
        <>
          {move?.map((item: any) => (
            <div key={item?.movie_id}>
              <MoveCard moveData={item} />
            </div>
          ))}
        </>
      ) : (
        <div className="space-y-5">
          {Array(3)
            .fill(1)
            .map((item: any) => (
              <div key={item?.movie_id}>
                <CardItemsSkeleton />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
