import { Suspense } from "react";
import MoveList from "@/components/movie/MoveList";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MoveList />
    </Suspense>
  );
}
