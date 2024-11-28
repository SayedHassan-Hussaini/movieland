import Image from "next/image";
import { StarIcon } from "lucide-react";
import Link from "next/link";

export default function MovieCard({ moveData }: { moveData: any }) {
  console.log("moveData.........", moveData);
  return (
    <Link href={`/move/${moveData?.movie_id}`}>
      <div className="w-full shadow-md rounded-md cursor-pointer hover:scale-105 transition-all duration-500 bg-white">
        <div className="relative h-48">
          <Image
            alt="test"
            src={moveData?.poster_path}
            fill
            className="object-cover rounded-t-md"
          />
        </div>
        <div className="p-3 space-y-3 ">
          <p className="text-sm font-semibold">{moveData?.original_title}</p>
          <div className="text-sm font-semibold flex justify-between">
            <div className="flex items-center gap-2">
              <StarIcon size={20} className="text-yellow-500" />
              <div className="">{moveData?.vote_count}</div>
            </div>
            {/* Date */}
            <div>{moveData?.release_date}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
