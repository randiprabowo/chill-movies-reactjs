import PropTypes from "prop-types";
import React from "react";

export const ArrowRight4 = ({ color = "white", className }) => {
  return (
    <svg
      className={`arrow-right-4 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4 11V13H16L10.5 18.5L11.92 19.92L19.84 12L11.92 4.08L10.5 5.5L16 11H4Z"
        fill={color}
      />
    </svg>
  );
};

ArrowRight4.propTypes = {
  color: PropTypes.string,
};
