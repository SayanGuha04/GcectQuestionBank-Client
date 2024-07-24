import React from "react";

interface SwitchButtonProps {
  text: string;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ text }) => {
  return (
    <button
      className="bg-primary-100 rounded-full h-12 w-12 text-3xl items-center align-middle 
              font-bold text-primary-500 border-none cursor-pointer inline-block text-center leading-tight 
              transition duration-300 ease-in-out hover:bg-primary-300 hover:text-primary-100"
    >
      {text}
    </button>
  );
};

export default SwitchButton;
