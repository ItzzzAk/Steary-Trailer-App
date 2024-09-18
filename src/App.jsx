import LeftSide from "./component/LeftSide";
import Navbar from "./component/Navbar";
import RightSide from "./component/RightSide";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[#868584a6] flex items-center justify-center p-10 text-white">
        <div className="w-[80%] h-[100%] bg-opacity-10 backdrop-blur-lg shadow-lg rounded-xl border border-white border-opacity-30">
          <Navbar/>
          <div className="w-full h-[88.4%]  rounded-xl flex">
            <LeftSide/>
            <RightSide/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
