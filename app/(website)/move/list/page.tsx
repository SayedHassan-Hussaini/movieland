import { Suspense } from "react";
import MoveList from "@/components/move/MoveList";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MoveList />
    </Suspense>
  );
}
