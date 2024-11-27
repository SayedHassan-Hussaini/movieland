"use client";

import MoveCard from "./MoveCard";
import { useEffect, useState } from "react";

export default function MoveList() {
  const [move, setMove] = useState<any>([]);
  const moveData = move?.data || [];
  const [page, setPage] = useState(1);

  // Fetch move data from a public API
  useEffect(() => {
    fetch(`https://jsonfakery.com/movies/paginated?${page}`)
      .then((response) => response.json())
      .then((data) => setMove(data));
  }, [page]);

  return (
    <div className="mx-auto max-w-7xl mt-20">
      {moveData?.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {moveData.map((item: any) => (
            <div key={item?.movie_id} className="md:col-span-1 col-span-4">
              <MoveCard moveData={item} />
            </div>
          ))}
        </div>
      ) : (
        <div>Loafing....</div>
      )}
    </div>
  );
}
