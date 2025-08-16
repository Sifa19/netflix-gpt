import { TMDB_API_OPTIONS } from "../utils/constants";

const getMovieTrailer = async (movie_id) => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    const results = json["results"];
    const trailers = results.filter(
      (vedio) => vedio.name === "Official Trailer"
    );
    const trailer = trailers.length == 0 ? trailers[0] : results[0];
    return trailer;
  } catch (e) {
    return e.message;
  }
};

export default getMovieTrailer;
