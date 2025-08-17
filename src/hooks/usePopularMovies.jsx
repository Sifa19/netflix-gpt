import { useEffect } from "react";
import getPopularMovies from "../services/getPopularMovies";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/movieSlice";

function usePopularMovies() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await getPopularMovies();
      console.log(data);
      dispatch(addPopularMovies(data));
    })();
  }, [dispatch]);
}

export default usePopularMovies;
