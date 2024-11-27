"use client";

import Pagination from "../common/Pagination";
import MoveCard from "./MoveCard";
import { useEffect, useState } from "react";
import { useCurrentPage } from "@/hooks/useCurrentPage";

export default function MoveList() {
  const [move, setMove] = useState<any>([]);
  const moveData = move?.data || [];
  // get current page
  const currentPage = useCurrentPage();
  // Fetch move data from a public API
  useEffect(() => {
    fetch(`https://jsonfakery.com/movies/paginated?${currentPage}`)
      .then((response) => response.json())
      .then((data) => setMove(data));
  }, [currentPage]);

  return (
    <div className="mx-auto max-w-7xl my-20">
      {moveData?.length > 0 ? (
        <>
          <div className="grid grid-cols-4 gap-4">
            {moveData.map((item: any) => (
              <div key={item?.movie_id} className="md:col-span-1 col-span-4">
                <MoveCard moveData={item} />
              </div>
            ))}
          </div>
          <div className="py-10">
            <Pagination lastPage={move?.last_page || 0} />
          </div>
        </>
      ) : (
        <div>Loafing....</div>
      )}
    </div>
  );
}
