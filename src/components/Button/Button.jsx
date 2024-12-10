import PropTypes from "prop-types";
import React from "react";
import { Arrowback1 } from "../../icons/Arrowback1";
import { Arrowforward1 } from "../../icons/Arrowforward1";
import { MaterialIcon } from "../MaterialIcon";
import "./Button.css";

export const Button = ({
  content = "Button",
  icon,
  size,
  className,
  contentClassName,
}) => {
  return (
    <div className={`button ${size} ${icon} ${className}`}>
      <div className={`div ${contentClassName}`}>
        {icon === "none" && <>{content}</>}

        {icon === "left" && (
          <MaterialIcon
            className="material-icon-instance"
            icon={<Arrowback1 className="arrow-back" />}
            size="medium"
          />
        )}

        {["left", "right"].includes(icon) && (
          <div className="text-wrapper">{content}</div>
        )}

        {icon === "right" && (
          <MaterialIcon
            className="instance-node"
            icon={<Arrowforward1 className="arrow-forward" />}
            size="medium"
          />
        )}
      </div>
    </div>
  );
};

Button.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.oneOf(["none", "right", "left"]),
  size: PropTypes.oneOf(["large", "medium"]),
};
