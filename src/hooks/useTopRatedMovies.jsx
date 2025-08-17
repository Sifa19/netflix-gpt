import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMoviesMovies } from "../store/movieSlice";
import { TMDB_API_OPTIONS } from "../utils/constants";

function useTopRatedMovies() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await getTopRatedMovies();
      dispatch(addTopRatedMoviesMovies(data));
    })();
  }, [dispatch]);

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    } catch (err) {
      console.error(err);
    }
  };
}

export default useTopRatedMovies;
