"use client";

import { useEffect, useState } from "react";
import VideoPlayer from "../common/VideoPlayer";
import { StarIcon } from "lucide-react";
import CardItemsSkeleton from "../common/CardItemsSkeleton";

export default function MoveDetails() {
  const [move, setMove] = useState<any>([]);
  const moveData = move?.[0];

  // Fetch move data from a public API
  useEffect(() => {
    fetch(`https://jsonfakery.com/movies/random/1`)
      .then((response) => response.json())
      .then((data) => setMove(data));
  }, []);

  return (
    <div>
      {move?.length > 0 ? (
        <>
          <div>
            <h1 className="text-2xl font-bold">{moveData?.original_title}</h1>
            <div className="min-h-[400px]">
              <VideoPlayer thumbnail={move?.[0]?.poster_path} classes="" />
            </div>
            <div className="p-3 space-y-3 ">
              <p className="text-black/50">{moveData?.overview}</p>
              <div className="text-sm font-semibold flex gap-5">
                <div className="flex items-center gap-2">
                  <StarIcon size={20} className="text-yellow-500" />
                  <div className="">{moveData?.vote_count}</div>
                </div>
                {/* Date */}
                <div>{moveData?.release_date}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <CardItemsSkeleton className="h-[400px]" />
        </div>
      )}
    </div>
  );
}
