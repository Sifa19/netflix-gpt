import MainContainer from "../components/home/MainContainer";
import MovieLists from "../components/home/MovieLists";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

function Home() {
  useNowPlayingMovies();
  return (
    <div className="absolute">
      {/**
       * main container 
          - background vedios
          - vedio title
       * secondary container
          - list of movies
              - list of cards
       */}
      <MainContainer />
    </div>
  );
}

export default Home;
