import { useEffect } from "react";
import getNowPlayingMovies from "../services/getNowPlayingMovies";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";

function useNowPlayingMovies() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await getNowPlayingMovies();
      dispatch(addNowPlayingMovies(data));
    })();
  }, [dispatch]);
}

export default useNowPlayingMovies;
