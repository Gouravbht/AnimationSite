import React, { useState } from "react";
import Optionpanel from "./Optionpanel";
import PriceList from "./PriceList";

const Home = () => {
  const [showPricing, setShowPricing] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleBoxClick = (Component) => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      setCurrentComponent(<Component />);
    }, 1000); // Match this with the animation duration
  };

  return (
    <div className="bg-black w-full h-screen relative overflow-hidden">
      <div className="w-[45%] h-full text-4xl text-white flex flex-col justify-center items-center">
        <p className="px-2">
          Join the event Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime
          repellat harum possimus, ?
        </p>
        <div className="flex justify-start items-start w-full py-8 px-2">
          <button
            className="text-sm font-medium flex justify-start items-center w-fit p-2 border-2 border-pink-500"
            onClick={() => setShowPricing(true)}
          >
            GET YOUR TICKET!
          </button>
        </div>
      </div>
      
      {showAnimation && (
        <div className="triangle-animation"></div>
      )}
      
      {currentComponent && (
        <div className="section-content">
          {currentComponent}
        </div>
      )}
      
      <div className="fixed bottom-0 left-0 right-0">
        <Optionpanel onBoxClick={handleBoxClick} />
      </div>
      
      {showPricing && <PriceList setShowPricing={setShowPricing} />}
    </div>
  );
};

export default Home;