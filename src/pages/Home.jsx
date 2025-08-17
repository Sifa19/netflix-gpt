import MainContainer from "../components/home/MainContainer";
import MovieListContainer from "../components/home/MovieListContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

function Home() {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcommingMovies();
  useTopRatedMovies();
  return (
    <div>
      <MainContainer />
      <MovieListContainer />
    </div>
  );
}

export default Home;
