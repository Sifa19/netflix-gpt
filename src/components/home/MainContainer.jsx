import { useSelector } from "react-redux";
import TrailerComponent from "./TrailerComponent";

function MainContainer() {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (movies === null) return;

  const movie = { ...movies }[0];
  console.log(movie);
  return (
    <div>
      <TrailerComponent movie={movie} />
    </div>
  );
}

export default MainContainer;
