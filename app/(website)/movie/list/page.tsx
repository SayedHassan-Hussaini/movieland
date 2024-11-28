

import { Suspense } from "react";
import MoveList from "@/components/movie/MoveList";
import client from "@/lib/apolloClient";
import { GET_COUNTRY } from "@/queries";


export default async function Page() {
  const { data } = await client.query({
    query: GET_COUNTRY,
  });
  console.log("data.........",data)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MoveList />
    </Suspense>
  );
}
