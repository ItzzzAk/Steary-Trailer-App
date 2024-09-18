import { useState, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
    <div className="w-[75%] h-full p-5">
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

        <div className="absolute top-0 w-full h-full rounded-3xl p-5 bg-black bg-opacity-50">
          <div className="w-full">
            <span className="bg-[#393957] rounded-full p-2 text-[.8em]">
              🔥Now Trending
            </span>
          </div>

          <div className="w-full h-[40%] mt-36">
            <div className={`w-full mb-5 ${isPlaying ? "hidden" : "block"}`}>
              {activeVideo.genre.map((g, index) => (
                <span
                  key={index}
                  className="bg-[#393957] rounded-full p-2 text-[.8em] mr-5"
                >
                  {g}
                </span>
              ))}
            </div>
            <div>
              <h1
                className={`text-white text-[1.5vw] font-semibold ${
                  isPlaying ? "hidden" : "block"
                }`}
              >
                {activeVideo.title}
              </h1>
              <p
                className={`w-[70%] text-[#a0a0a0] ${
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
                className={`flex items-center gap-2 py-3 px-7 rounded-full transition-all duration-300 ${
                  isPlaying || hasEnded
                    ? "bg-white text-black"
                    : "bg-transparent border-2 border-white text-white"
                }`}
              >
                {hasEnded ? (
                  <>
                    <FaRedo />
                    Replay
                  </>
                ) : isPlaying ? (
                  <>
                    <FaPause />
                    Pause
                  </>
                ) : (
                  <>
                    <FaPlay />
                    Watch
                  </>
                )}
              </button>
              <button
                onClick={downloadVideo}
                className="flex items-center gap-2 py-3 px-7 border-2 border-white rounded-full transition-all duration-300 bg-white text-black hover:bg-black hover:text-white"
              >
                <FiDownload />
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
        <div className="w-full h-[90%] ">
          <div className="w-[20%] h-[94%] rounded-3xl bg-red-600">
            <div>
              <span>
                <BsThreeDots />
              </span>
            </div>
            <div>
              <span>Fantansy</span>
            </div>
            <div>
              <span>title</span>
              <p>descr</p>
              <div>
                <div>
                  <FaPlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
