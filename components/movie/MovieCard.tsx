import Image from "next/image";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import { Movie } from "@/types";

export default function MovieCard({ moveData }: { moveData: Movie }) {
  return (
    <Link href={`/movie/${moveData?.id}`}>
      <div className="w-full shadow-md rounded-md cursor-pointer hover:scale-105 transition-all duration-500 bg-white">
        <div className="relative h-48">
          <Image
            alt="test"
            src={moveData?.featured_image}
            fill
            className="object-cover rounded-t-md"
          />
        </div>
        <div className="p-3 space-y-3 ">
          <p className="text-sm font-semibold">{moveData?.title}</p>
          <div className="text-sm font-semibold flex justify-between">
            <div className="flex items-center gap-2">
              <StarIcon size={20} className="text-yellow-500" />
              <div className="">{moveData?.imdb_score}</div>
            </div>
            {/* Date */}
            <div>{moveData?.released_year}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
