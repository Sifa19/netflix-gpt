import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcommingMovies } from "../store/movieSlice";
import { TMDB_API_OPTIONS } from "../utils/constants";

function useUpcommingMovies() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await getUpcommingMovies();
      dispatch(addUpcommingMovies(data));
    })();
  }, [dispatch]);

  const getUpcommingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    } catch (err) {
      console.error(err);
    }
  };
}

export default useUpcommingMovies;
