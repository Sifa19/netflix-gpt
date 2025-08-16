import { TMBD_IMAGE_URL } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import ReactPlayer from "react-player";

function TrailerComponent({ movie }) {
  const { id, original_title, overview } = movie;
  const videoKey = useMovieTrailer(id)?.key;
  console.log(videoKey);

  return (
    <div
      className="absolute flex flex-col w-screen
     text-stone-100  "
    >
      <iframe
        className="w-screen h-[520px] "
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&playlist=${videoKey}&start=2&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1`}
      ></iframe>
      <div
        className="absolute 
      bg-gradient-to-r from-black
      w-screen aspect-video"
      >
        <div className="absolute bottom-16 px-16">
          <p className="mb-10 font-extrabold text-3xl">{original_title}</p>
          <p className="w-[40%] mb-6">{overview}</p>
          <div>
            <button
              className="bg-stone-100 text-stone-900 
            px-6 py-1.5 mr-4 rounded-sm hover:opacity-50"
            >
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              Play
            </button>
            <button
              className="bg-stone-50/20 px-6 py-1.5 rounded-sm
            hover:opacity-50"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrailerComponent;
