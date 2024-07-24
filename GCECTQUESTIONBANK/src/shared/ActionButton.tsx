import React from "react";
import PropTypes from "prop-types";

interface ActionButtonProps {
  height: string;
  width: string;
  text: string;
  textSize: string; // Added textSize to the interface
}

const ActionButton: React.FC<ActionButtonProps> = ({ height, width, text, textSize }) => {
  return (
    <button
      className="bg-primary-300 text-primary-100 border-none rounded-3xl cursor-pointer 
      inline-block text-center leading-tight transition duration-300 ease-in-out hover:bg-primary-400"
      style={{ height, width, fontSize: textSize }} // Apply the textSize to the fontSize style
    >
      {text}
    </button>
  );
};

ActionButton.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired, // Added textSize to propTypes
};

export default ActionButton;
