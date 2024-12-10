import PropTypes from "prop-types";
import React from "react";
import "./NumberWrapper.css";

export const NumberWrapper = ({ number, className }) => {
  return <div className={`number-wrapper number-${number} ${className}`} />;
};

NumberWrapper.propTypes = {
  number: PropTypes.oneOf([
    "sixteen",
    "twenty-five",
    "seventeen",
    "ten",
    "twelve",
    "twenty-one",
    "five",
    "eight",
    "twenty-two",
    "twenty-seven",
    "twenty-eight",
    "twenty-three",
    "four",
    "eighteen",
    "one",
    "twenty-nine",
    "thirteen",
    "twenty-four",
    "thirty",
    "twenty",
    "three",
    "nine",
    "fourteen",
    "twenty-six",
    "seven",
    "fifteen",
    "two",
    "thirty-two",
    "nineteen",
    "eleven",
    "thirty-one",
    "six",
  ]),
};
