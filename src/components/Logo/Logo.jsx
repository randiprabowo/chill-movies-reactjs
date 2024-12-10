import PropTypes from "prop-types";
import React from "react";
import "./logo.css";

export const Logo = ({
  movieOpen = "https://c.animaapp.com/e4S1qI2e/img/movie-open.svg",
}) => {
  return (
    <div className="logo">
      <img className="movie-open" alt="Movie open" src={movieOpen} />

      <div className="text-wrapper">CHILL</div>
    </div>
  );
};

Logo.propTypes = {
  movieOpen: PropTypes.string,
};