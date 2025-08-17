import { TMDB_API_OPTIONS } from "../utils/constants";
const getPopularMovies = async () => {
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  } catch (err) {
    console.error(err);
  }
};

export default getPopularMovies;
