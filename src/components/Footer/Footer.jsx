import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";
import "./Footer.css";

export const Footer = ({
  type,
  className,
  logoMovieOpen = "https://c.animaapp.com/4gYTn61Z/img/movie-open.svg",
}) => {
  return (
    <div className={`footer type-5-${type} ${className}`}>
      {type === "web" && (
        <div className="frame-2">
          <div className="frame-3">
            <Logo movieOpen={logoMovieOpen} />
            <p className="hello-we-are-flair">
              @2023 Chill All Rights Reserved.
            </p>
          </div>

          <div className="frame-4">
            <div className="frame-5">
              <div className="text-wrapper-7">Genre</div>

              <div className="frame-6">
                <div className="frame-7">
                  <div className="text-wrapper-8">Aksi</div>

                  <div className="text-wrapper-9">Anak-anak</div>

                  <div className="text-wrapper-9">Anime</div>

                  <div className="text-wrapper-9">Britania</div>
                </div>

                <div className="frame-7">
                  <div className="text-wrapper-8">Drama</div>

                  <div className="text-wrapper-9">
                    Fantasi Ilmiah &amp; Fantasi
                  </div>

                  <div className="text-wrapper-9">Kejahatan</div>

                  <div className="text-wrapper-9">KDrama</div>
                </div>

                <div className="frame-7">
                  <div className="text-wrapper-8">Komedi</div>

                  <div className="text-wrapper-9">Petualangan</div>

                  <div className="text-wrapper-9">Perang</div>

                  <div className="text-wrapper-9">Romantis</div>
                </div>

                <div className="frame-7">
                  <div className="text-wrapper-8">Sains &amp; Alam</div>

                  <div className="text-wrapper-9">Thriller</div>
                </div>
              </div>
            </div>

            <div className="frame-5">
              <div className="text-wrapper-7">Bantuan</div>

              <div className="frame-7">
                <div className="text-wrapper-8">FAQ</div>

                <div className="text-wrapper-9">Kontak Kami</div>

                <div className="text-wrapper-9">Privasi</div>

                <div className="text-wrapper-9">Syarat &amp; Ketentuan</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {type === "mobile" && (
        <>
          <div className="frame-wrapper">
            <div className="frame-8">
              <div className="logo-3">
                <img
                  className="movie-open-3"
                  alt="Movie open"
                  src="https://c.animaapp.com/4gYTn61Z/img/movie-open-1.svg"
                />

                <div className="text-wrapper-10">CHILL</div>
              </div>

              <div className="hello-we-are-flair-wrapper">
                <p className="p">@2023 Chill All Rights Reserved</p>
              </div>
            </div>
          </div>

          <div className="frame-9">
            <div className="frame-10">
              <div className="text-wrapper-11">Genre</div>

              <img
                className="chevron-right"
                alt="Chevron right"
                src="https://c.animaapp.com/4gYTn61Z/img/chevron-right-1.svg"
              />
            </div>

            <div className="frame-10">
              <div className="text-wrapper-11">Bantuan</div>

              <img
                className="chevron-right"
                alt="Chevron right"
                src="https://c.animaapp.com/4gYTn61Z/img/chevron-right-1.svg"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Footer.propTypes = {
  type: PropTypes.oneOf(["web", "mobile"]),
  logoMovieOpen: PropTypes.string,
};
