"use client";

import VideoPlayer from "../common/VideoPlayer";
import { StarIcon } from "lucide-react";
import CardItemsSkeleton from "../common/CardItemsSkeleton";
import { useQuery } from "@apollo/client";
import { GET_MOVIE } from "@/queries";
import { useParams } from "next/navigation";

export default function MovieDetails() {
  const { movieId } = useParams();
  const { data, loading } = useQuery(GET_MOVIE, {
    variables: { movieId: movieId },
  });
  const movieData = data?.movie;

  return (
    <div>
      {!loading ? (
        <>
          <div>
            <h1 className="text-2xl font-bold">{movieData?.title}</h1>
            <div className="min-h-[400px]">
              <VideoPlayer
                thumbnail={movieData?.featured_image}
                videoUrl={
                  movieData?.video_ur ||
                  "https://apiwebsite.gmdirecthire.co.uk/uploads/FINAL_1_online_video_cutter_com_e134029077.mp4"
                }
                classes=""
              />
            </div>
            <div className="p-3 space-y-3 ">
              <p className="text-black/50">{movieData?.description}</p>
              <div className="text-sm font-semibold flex gap-5">
                <div className="flex items-center gap-2">
                  <StarIcon size={20} className="text-yellow-500" />
                  <div className="">{movieData?.imdb_score}</div>
                </div>
                {/* Date */}
                <div>{movieData?.released_year}</div>
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
