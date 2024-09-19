// App.jsx
import LeftSide from "./component/LeftSide";
import Navbar from "./component/Navbar";
import RightSide from "./component/RightSide";

const App = () => {
  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/f9/16/24/f91624184f7ec1a772128fa28192a1b0.jpg)",
        }}
      >
        <div className="w-screen h-screen bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center p-10 text-white">
          <div className="w-[80%] h-[100%] bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-xl border border-white border-opacity-30">
            <Navbar />
            <div className="w-full h-[88.4%] rounded-xl flex">
              <LeftSide />
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
