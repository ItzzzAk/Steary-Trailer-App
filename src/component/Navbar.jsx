import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { PiBellDuotone } from "react-icons/pi";
const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initial active item

  const items = ["Movies", "TV Series", "Animation", "Mystery", "More"];
  return (
    <>
      <nav className="w-full py-5 px-5 rounded-xl  flex items-center justify-between">
        <div className="relative ">
          <GoSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white" />
          <input
            type="text"
            placeholder="Search movies ...."
            className="w-full pl-10 pr-24 py-3 bg-[#787776ab] rounded-full outline-none border-none placeholder-white text-white"
          />
        </div>
        <div className="w-1/2 flex justify-between items-center">
          {items.map((item, index) => (
            <span
              key={item}
              onClick={() => setActiveIndex(index)}
              className={`relative cursor-pointer px-8 py-3 rounded-full text-light transition-all duration-300 ease-in-out ${
                activeIndex === index ? "text-normal" : ""
              }`}
            >
              {/* Background Span */}
              <span
                className={`absolute inset-0 bg-[#787776ab] rounded-full transition-transform duration-300 ease-in-out  ${
                  activeIndex === index
                    ? "scale-opacity-in z-0"
                    : "scale-0 opacity-0 z-[-1]"
                }`}
              />
              {/* Text */}
              <span className="relative z-10">{item}</span>
            </span>
          ))}
        </div>
        <div className="w-[20%] flex items-center justify-between ">
          <div className="w-12 h-12 rounded-full bg-[#787776ab] flex items-center cursor-pointer justify-center relative">
            <PiBellDuotone />
            <div className="absolute top-2 right-[1%] w-2 h-2 bg-green-500 rounded-full"></div>
          </div>

          <div className=" rounded-full bg-[#787776ab] cursor-pointer flex items-center gap-5 px-5 py-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover "
                src="https://i.pinimg.com/736x/96/6e/1d/966e1de8fc2972adc058e5b0fea9f12a.jpg"
                alt=""
              />
            </div>
            <div className="leading-none">
              <span>Amol kalel</span>
              <p className="text-sm ">@Itxx_ak</p>
            </div>
            <IoIosArrowDown className="text-white " />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
