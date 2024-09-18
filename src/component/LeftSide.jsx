import { FaPlay } from "react-icons/fa";
import MovieCard from "./MovieCard";

const LeftSide = () => {
  const items = [
    {
      id: 1,
      imgSrc:
        "https://i.pinimg.com/564x/0d/08/a3/0d08a3f230af584b531187e017677bcf.jpg",
      title: "You",
      description: "Psychological ",
    },
    {
      id: 2,
      imgSrc:
        "https://i.pinimg.com/564x/78/35/64/7835641bd0f6952012e9c808e103ad8a.jpg",
      title: "Lock & Key",
      description: "Mind-Bending",
    },
    
    {
      id: 3,
      imgSrc:
        "https://i.pinimg.com/564x/fc/cc/1d/fccc1d0d2e661af00f0b1781edacd7f4.jpg",
      title: "Lucifer",
      description: "Exciting , Dark",
    },
  ];

  return (
    <div className="w-[25%] h-full p-5 flex gap-5 flex-col">
      <div className="w-full h-[60%] bg-[#939391b9] rounded-3xl overflow-hidden p-5">
        {/* Header */}
        <div className="w-full flex justify-between">
          <span className="text-md">🔥 New Trailer</span>
          <span className="flex text-sm font-bold text-[#5e5e5e] items-center">
            Sort by:
            <p className="flex text-xs text-white items-center">Today</p>
          </span>
        </div>

        {/* Movie Cards */}
        <div className="p-2 flex flex-col gap-2 w-full">
          <MovieCard
            image="https://i.pinimg.com/736x/88/8e/81/888e81d78e72ad08a24994f9ad48bd94.jpg"
            title="The Last Kingdom: Seven Kings Must Die"
          />
          <MovieCard
            image="https://i.pinimg.com/736x/92/e5/19/92e5199efed4183b021d67bcc230c9b7.jpg"
            title="The Mario bros Movie."
          />
          <MovieCard
            image="https://i.pinimg.com/736x/cf/93/f3/cf93f3e32cd9f1439011ba7a1578ac0a.jpg"
            title="The SuperMan."
          />
        </div>
      </div>

      <div className="w-full h-[40%] bg-[#939391b9] rounded-3xl px-5 py-2">
        <h5>Continue Watching</h5>
        <div className="w-full px-3 py-4 " >
          {items.map((item) => (
            <div
              key={item.id}
              className="w-full flex justify-between items-center mb-6"
            >
              <div className="w-12 h-12 overflow-hidden rounded-md">
                <img
                  className="w-full h-full object-cover"
                  src={item.imgSrc}
                  alt={item.title}
                />
              </div>
              <div className="">
                <p>{item.title}</p>
                <p className="text-[#383838]">{item.description}</p>
              </div>
              <div className="w-6 h-6 bg-[#808688] rounded-full flex items-center justify-center cursor-pointer">
                <FaPlay className="text-[.5vw]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
