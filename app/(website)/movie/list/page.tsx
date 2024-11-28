import MovieList from "@/components/movie/MovieList";
import client from "@/lib/apolloClient";
import { GET_COUNTRY } from "@/queries";
import { Suspense } from "react";

export default async function Page() {
  const { data } = await client.query({
    query: GET_COUNTRY,
  });

  console.log("Fetched Data:", data);;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MovieList />
    </Suspense>
  );
}
