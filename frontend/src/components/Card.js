import React from "react";
import LogModal from "./LogModal";

const Card = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-eBoost-blue mt-8 justify-evenly h-80">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mt-6">{content}</p>
      <div className="flex flex-row items-center justify-center my-10 justify-evenly mt-8 mr-4">
        <LogModal />
      </div>
    </div>
  );
};

export default Card;
