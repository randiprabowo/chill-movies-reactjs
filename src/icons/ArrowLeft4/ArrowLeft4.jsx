import PropTypes from "prop-types";
import React from "react";

export const ArrowLeft4 = ({ color = "white", className }) => {
  return (
    <svg
      className={`arrow-left-4 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M20 11V13H8L13.5 18.5L12.08 19.92L4.16 12L12.08 4.08L13.5 5.5L8 11H20Z"
        fill={color}
      />
    </svg>
  );
};

ArrowLeft4.propTypes = {
  color: PropTypes.string,
};