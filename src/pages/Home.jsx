import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

function Home() {
  useNowPlayingMovies();
  return <div className="absolute mt-24">Home</div>;
}

export default Home;
