import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function MovieListContainer() {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="bg-black -mt-30 w-screen">
      <MovieList title="Upcomming " movies={movies.upcommingMovies} />
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      <MovieList title="Trending" movies={movies.popularMovies} />
    </div>
  );
}

export default MovieListContainer;
