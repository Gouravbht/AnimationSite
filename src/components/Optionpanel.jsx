import React, { useState } from "react";
import "./Optionpanel.css";

const Optionpanel = () => {
  const [boxes, setBoxes] = useState(["SPEAKERS", "AGENDA", "SHOW", "SPONSORS"]);
  const [activeSection, setActiveSection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (index) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveSection(boxes[index]);
      setIsAnimating(false);
    }, 1000); // This should match the total duration of your animations
  };

  return (
    <div className="bg-black text-white">
      <div className="flex justify-between px-1 py-1">
        {boxes.map((box, index) => (
          <div
            key={box}
            className="text-white border cursor-pointer border-black bg-pink-500 font-semibold rounded-sm w-[25%] p-2"
            onClick={() => handleClick(index)}
          >
            {box}
          </div>
        ))}
      </div>
      {isAnimating && <div className="triangle-animation" />}
      {activeSection && !isAnimating && (
        <div className="section-content">
          <h2>{activeSection}</h2>
          <p>This is the content for the {activeSection} section.</p>
        </div>
      )}
    </div>
  );
};

export default Optionpanel;