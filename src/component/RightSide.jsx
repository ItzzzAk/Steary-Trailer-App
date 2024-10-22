import { useState, useRef } from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Cards from "./Cards";


const cardsData = [
  {
    title: 'The Flash',
    genre: 'Fantasy',
    description: 'The movie follows Barry Allen, aka The Flash, played by Ezra Miller, as he uses his super-speed abilities to travel back in time and alter events from his past in an attempt to save his mother from being murdered.',
    imageUrl: 'https://i.pinimg.com/564x/fe/42/4a/fe424abeb6ae298fe54698acde79e453.jpg'
  },
  {
    title: 'Manifest',
    genre: 'Mistery',
    description: 'Manifest is a captivating supernatural drama series that follows the lives of the passengers of Flight 828, who experience a turbulent flight and arrive five and a half years later to discover that the world has moved on without them.',
    imageUrl: 'https://i.pinimg.com/564x/17/47/7c/17477c872e2a3a6fed37c2683c403c46.jpg'
  },
  {
    title: 'Lucifer',
    genre: 'Dark',
    description: 'Lucifer is an enthralling urban fantasy series that follows Lucifer Morningstar, the Devil, who becomes disillusioned with his role in Hell and decides to retire to Los Angeles.',
    imageUrl: 'https://i.pinimg.com/564x/cc/34/73/cc347347a270607cfaffc41bd2fd3ce2.jpg'
  },
  {
    title: 'Interstellar',
    genre: 'Thriller',
    description: 'Interstellar is a groundbreaking science fiction film directed by Christopher Nolan that explores the boundless possibilities of space travel and the survival of humanity.',
    imageUrl: 'https://i.pinimg.com/564x/01/01/c6/0101c6179012640f9fd8ecad12ebc33b.jpg'
  },

];




const videoData = [
  {
    id: 1,
    src: "/Videos/Trailer4.mp4",
    thumbnail: "/Thumbnails/madara.png",
    title: "Wake Up to Reality",
    description: "Madara Uchiha's true words on the reality of the world.",
    genre: ["Naruto", "Anime", "Madara"],
  },
  {
    id: 4,
    src: "/Videos/Trailer3.mp4",
    thumbnail: "/Thumbnails/Venom.jpg",
    title: "Venom: The Last Dance",
    description:
      "Venom: The Last Dance is an intense action-packed film where Eddie Brock faces his most personal battle yet.",
    genre: ["Sci-Fi", "Action", "Thriller"],
  },
  {
    id: 3,
    src: "/Videos/Trailer2.mp4",
    thumbnail: "/Thumbnails/Spiderman.jpg",
    title: "SPIDER-MAN: INTO THE SPIDER-VERSE",
    description:
      "Spider-Man: Into the Spider-Verse is an exhilarating animated adventure that follows teenager Miles Morales as he discovers his Spider-Man abilities.",
    genre: ["SpiderVerse", "Action", "Animation"],
  },
  {
    id: 2,
    src: "/Videos/Trailer1.mp4",
    thumbnail: "/Thumbnails/MoneyHiest.jpg",
    title: "Money Heist",
    description:
      "Money Heist (La Casa de Papel) is a gripping Spanish crime drama series that follows the meticulous plans of a criminal mastermind known as 'The Professor' and his team of robbers.",
    genre: ["Crime", "Heist"],
  },
  // Add more videos here...
];

const RightSide = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const videoRef = useRef(null);

  const activeVideo = videoData[activeVideoIndex];

  // Handle play/pause
  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasEnded(false);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Handle replay
  const replayVideo = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
    setHasEnded(false);
  };

  // Handle download
  const downloadVideo = () => {
    const link = document.createElement("a");
    link.href = activeVideo.src;
    link.download = `${activeVideo.title}.mp4`;
    link.click();
  };

  // Navigate to next video
  const nextVideo = () => {
    if (activeVideoIndex < videoData.length - 1) {
      setActiveVideoIndex(activeVideoIndex + 1);
      setIsPlaying(false);
      setHasEnded(false);
    }
  };

  // Navigate to previous video
  const prevVideo = () => {
    if (activeVideoIndex > 0) {
      setActiveVideoIndex(activeVideoIndex - 1);
      setIsPlaying(false);
      setHasEnded(false);
    }
  };

  // Handle video ended
  const handleVideoEnded = () => {
    setIsPlaying(false);
    setHasEnded(true);
  };

  return (
    <div className="w-[75%] h-full p-5 below-1366:p-2">
      <div className="w-full h-[60%] relative">
        <div className="w-full h-full rounded-3xl overflow-hidden">
          {/* Video element */}
          <video
            ref={videoRef}
            src={activeVideo.src}
            className="w-full h-full object-cover rounded-3xl"
            poster={activeVideo.thumbnail} // Poster image (thumbnail)
            onEnded={handleVideoEnded}
          />
        </div>

        <div className="absolute top-0 w-full h-full rounded-3xl p-5 below-1366:p-3 bg-black bg-opacity-50">
          <div className="w-full">
            <span className="bg-[#393957] rounded-full p-2 below-1366:px-[.5em] below-1366:py-[.5em] text-[.8vw]                                                                                                      ]">
              🔥Now Trending
            </span>
          </div>

          <div className="w-full h-[40%] mt-36 below-1366:mt-[5em]">
            <div className={`w-full mb-5 below-1366:mb-[.8em] ${isPlaying ? "hidden" : "block"}`}>
              {activeVideo.genre.map((g, index) => (
                <span
                  key={index}
                  className="bg-[#393957] rounded-full p-2 below-1366:px-[.8em] below-1366:py-[.5em] text-[.8vw] mr-5"
                >
                  {g}
                </span>
              ))}
            </div>
            <div>
              <h1
                className={`text-white text-[1.5vw]  font-semibold ${
                  isPlaying ? "hidden" : "block"
                }`}
              >
                {activeVideo.title}
              </h1>
              <p
                className={`w-[70%] text-[#a0a0a0] below-1366:text-[.7em] ${
                  isPlaying ? "hidden" : "block"
                }`}
              >
                {activeVideo.description}
              </p>
            </div>
          </div>

          <div className="w-full h-[20%] flex justify-between items-center">
            <div className="flex gap-5">
              <button
                onClick={hasEnded ? replayVideo : togglePlayPause}
                className={`flex items-center gap-2 py-3 px-7 below-1366:w-[10vw] below-1366:text-[1.2vw]  below-1366:h-[6vh] rounded-full transition-all duration-300 ${
                  isPlaying || hasEnded
                    ? "bg-white text-black"
                    : "bg-transparent border-2 border-white text-white"
                }`}
              >
                {hasEnded ? (
                  <>
                    <FaRedo  className="below-1366:text-[1vw]" />
                    Replay
                  </>
                ) : isPlaying ? (
                  <>
                    <FaPause className="below-1366:text-[1vw]"  />
                    Pause
                  </>
                ) : (
                  <>
                    <FaPlay className="below-1366:text-[1vw]"  />
                    Watch
                  </>
                )}
              </button>
              <button
                onClick={downloadVideo}
                className="flex items-center justify-center gap-2 py-3 px-7 border-2  below-1366:w-[12vw] below-1366:text-[1.2vw]  below-1366:h-[6vh]  border-white rounded-full transition-all duration-300 bg-white text-black hover:bg-black hover:text-white"
              >
                <FiDownload className="below-1366:text-[1vw]" />
                Download
              </button>
            </div>

            <div className="flex gap-5">
              <div
                onClick={prevVideo}
                className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#4A4B58]"
              >
                <IoIosArrowBack />
              </div>
              <div
                onClick={nextVideo}
                className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#4A4B58]"
              >
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40%]">
        <div className="w-full flex justify-between p-2">
          <span>You might like</span>
          <span className="px-3 py-1 bg-[#939391b9] cursor-pointer rounded-full text-[.7vw]">
            See all
          </span>
        </div>
        <div className="w-full h-[90%] p-2 ">
          <Cards cardsData={cardsData} />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
