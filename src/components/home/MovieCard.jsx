import { TMBD_IMAGE_URL } from "../../utils/constants";

function MovieCard({ movie }) {
  const { original_title, poster_path } = movie;
  return (
    <div className="shrink-0">
      <img
        className="w-36"
        src={TMBD_IMAGE_URL + poster_path}
        alt={original_title}
      />
    </div>
  );
}

export default MovieCard;
