import React from "react";
import Button from "./Button";
import Link from "next/link";
import BasicModal from "./Modal";

const Card = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-eBoost-blue mt-8 justify-evenly h-80">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mt-6">{content}</p>
      <div className="flex flex-row items-center justify-center my-10 justify-evenly mt-8 mr-4">
        <BasicModal />
      </div>
    </div>
  );
};

export default Card;
