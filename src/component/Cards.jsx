// Cards.jsx


import PropTypes from 'prop-types';
import { BsThreeDots } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';

const Card = ({ title, genre, description, imageUrl }) => {
  return (
    <div
      className="relative w-[20%] mr-5 h-[94%] bg-cover bg-center rounded-3xl p-2"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dark overlay to make the text stand out */}
      <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>

      {/* Content on top of the dark overlay */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-full flex justify-end">
          <span className="p-2 backdrop-blur-md bg-white bg-opacity-30 rounded-full flex items-center">
            <BsThreeDots />
          </span>
        </div>

        <div className="w-full mt-20">
          <span className="px-2 py-1 backdrop-blur-md bg-white bg-opacity-30 rounded-full text-[.7vw]">
            {genre}
          </span>
        </div>

        <div className="flex w-full justify-between mt-3 items-center">
          <div className="w-[90%]">
            <span>{title}</span>
            <p className="w-[80%] text-[.7vw] text-gray-300 line-clamp-2 overflow-hidden">
              {description}
            </p>
          </div>
          <div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black">
              <FaPlay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define prop types for Card component
Card.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const Cards = ({ cardsData }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          genre={card.genre}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

// Define prop types for Cards component
Cards.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;
