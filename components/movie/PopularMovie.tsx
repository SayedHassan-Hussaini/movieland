"use client";

import MoveCard from "./MovieCard";
import { useState } from "react";
import CardItemsSkeleton from "../common/CardItemsSkeleton";
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "@/queries";
import { Movie } from "@/types";
import SearchForm from "../common/SearchFrom";

export default function PopularMovie() {
  const [search, setSearch] = useState("");

  const { data, loading, error } = useQuery(GET_MOVIES, {
    variables: { page: 1, search: search },
  });
  const handelSearch = (value: string) => {
    setSearch(value);
  };

  if (error) {
    return (
      <p className="text-red-500 mx-auto max-w-7xl px-5 py-10">
        Error: {error.message}
      </p>
    );
  }

  const moveData = data?.movies || [];
  return (
    <>
      <SearchForm onSearch={handelSearch} />
      <div className="space-y-5">
        <h1 className="text-2xl font-bold">Popular Move</h1>
        {!loading ? (
          <>
            {moveData?.map((item: Movie) => (
              <div key={item?.id}>
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
    </>
  );
}
