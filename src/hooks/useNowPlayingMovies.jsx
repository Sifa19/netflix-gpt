import { useEffect } from "react";
import getNowPlayingMovies from "../services/getNowPlayingMovies";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";

function useNowPlayingMovies() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await getNowPlayingMovies();
      console.log(data);
      dispatch(
        addNowPlayingMovies({
          data,
        })
      );
    })();
  }, [dispatch]);
  return <div></div>;
}

export default useNowPlayingMovies;
