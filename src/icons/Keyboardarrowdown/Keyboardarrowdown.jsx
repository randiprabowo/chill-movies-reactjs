import PropTypes from "prop-types";
import React from "react";

export const Keyboardarrowdown = ({
  color = "white",
  opacity = "unset",
  className,
}) => {
  return (
    <svg
      className={`keyboardarrowdown ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.94 5.72656L8 8.7799L11.06 5.72656L12 6.66656L8 10.6666L4 6.66656L4.94 5.72656Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Keyboardarrowdown.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
