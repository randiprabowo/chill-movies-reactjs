import PropTypes from "prop-types";
import React from "react";
import { Star2 } from "../../icons/Star2";
import "./MaterialIcon.css";


export const MaterialIcon = ({
  size,
  className,
  icon = <Star2 className="star" />,
}) => {
  return <div className={`material-icon ${className}`}>{icon}</div>;
};

MaterialIcon.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
};
