import MoveList from "@/components/movie/MoveList";
import client from "@/lib/apolloClient";
import { GET_COUNTRY } from "@/queries";

export default async function Page() {
  const { data } = await client.query({
    query: GET_COUNTRY,
  });

  console.log("Fetched Data:", data);;
  return (
    <div>
      <MoveList />
    </div>
  );
}
