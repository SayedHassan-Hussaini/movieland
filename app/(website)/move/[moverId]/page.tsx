import SearchForm from "@/components/common/SearchFrom";
import MoveDetails from "@/components/move/MoveDetails";
import PopularMove from "@/components/move/PopularMove";
export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 grid grid-cols-3 gap-4">
      <div className="md:col-span-2 col-span-3">
        <MoveDetails />
      </div>
      <div className="pt-12 space-y-4">
        <SearchForm />
        <PopularMove />
      </div>
    </div>
  );
}
