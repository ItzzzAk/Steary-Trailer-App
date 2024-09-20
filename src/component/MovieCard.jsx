import PropTypes from "prop-types";
import { FaPlay } from "react-icons/fa";

const MovieCard = ({ image, title }) => {
  return (
    <div
      className={`w-full h-40 below-1366:h-[16vh] rounded-xl bg-cover bg-center relative overflow-hidden`}
      style={{ backgroundImage: `url(${image})` }} // Set background image dynamically
    >
      <div className="absolute bottom-0 w-full h-12 below-1366:h-[5vh] backdrop-blur-md  rounded-bl-xl rounded-br-xl flex items-center justify-between px-5">
        <span className="leading-none  below-1366:text-[.75vw] w-[75%]">{title}</span>
        <div className="w-6 h-6 bg-[#808688] rounded-full flex items-center justify-center cursor-pointer">
          <FaPlay className="text-[.5vw]" />
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired, // Ensure image is a string and required
  title: PropTypes.string.isRequired, // Ensure title is a string and required
};

export default MovieCard;
