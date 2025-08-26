import React from "react";

const TopProgressBar = ({ value = 0, color = "bg-green-500" }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="w-full bg-gray-200 h-1">
        <div
          className={`${color} h-1 transition-all duration-200 ease-linear`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default TopProgressBar;
