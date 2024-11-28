import SearchForm from "@/components/common/SearchFrom";
import MovieDetails from "@/components/movie/MovieDetails";
import PopularMovie from "@/components/movie/PopularMovie";
export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 grid grid-cols-3 gap-4">
      <div className="md:col-span-2 col-span-3">
        <MovieDetails />
      </div>
      <div className="pt-12 space-y-4">
        <SearchForm />
        <PopularMovie />
      </div>
    </div>
  );
}
