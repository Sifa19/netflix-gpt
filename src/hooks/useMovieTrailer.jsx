import { useEffect, useState } from "react";
import getMovieTrailer from "../services/getMovieTrailer";

function useMovieTrailer(movie_id) {
  const [trailer, setTrailer] = useState({});
  useEffect(() => {
    (async () => {
      const data = await getMovieTrailer(movie_id);
      setTrailer(data);
    })();
  }, [movie_id]);
  return trailer;
}

export default useMovieTrailer;
