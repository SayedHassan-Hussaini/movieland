import MovieList from "@/components/movie/MovieList";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MovieList />
    </Suspense>
  );
}
