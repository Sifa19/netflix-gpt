import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className="flex flex-col px-12 relative z-20">
      <div className="text-3xl text-stone-50 my-4">{title}</div>
      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
