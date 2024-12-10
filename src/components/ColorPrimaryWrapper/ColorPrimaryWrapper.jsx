import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import "./ColorPrimaryWrapper.css";


export const ColorPrimaryWrapper = ({
  color,
  variant,
  className,
  buttonContent = "Button",
}) => {
  return (
    <div className={`color-primary-wrapper ${variant} ${color} ${className}`}>
      <Button
        className="button-unstyledbutton"
        content={buttonContent}
        contentClassName={`${variant === "outlined" && color === "primary" ? "class" : (color === "disabled") ? "class-2" : color === "secondary" && ["outlined", "shadow"].includes(variant) ? "class-3" : "class-4"}`}
        icon="none"
        size="large"
      />
    </div>
  );
};

ColorPrimaryWrapper.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "disabled"]),
  variant: PropTypes.oneOf(["outlined", "shadow", "contained"]),
  buttonContent: PropTypes.string,
};
