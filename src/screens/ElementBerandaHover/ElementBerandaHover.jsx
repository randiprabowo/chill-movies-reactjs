import React, { useState, useRef, useEffect } from "react";
import { ColorPrimaryWrapper } from "../../components/ColorPrimaryWrapper";
import { Component } from '/src/components/Component';
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { NumberWrapper } from "../../components/NumberWrapper";
import { ArrowLeft4 } from "../../icons/ArrowLeft4";
import { ArrowRight4 } from "../../icons/ArrowRight4";
import { InformationOutline } from "../../icons/InformationOutline";
import { getUser } from "../../api/config";
import "./ElementBerandaHover.css";

const ElementBerandaHover = () => {
  // State untuk dropdown profil
  const [showDropdown, setShowDropdown] = useState(true);
  
  // State untuk slider
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Refs untuk slider containers
  const continueWatchingRef = useRef(null);
  const popularThisWeekRef = useRef(null);
  const topRatedThisWeekRef = useRef(null);

  // State untuk menyimpan data profile

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const data = await getUser('userId'); // Replace 'userId' with actual user ID
        setProfile(data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };
    getProfileData();
  }, []);

  // Example useEffect hook with dependency array
  useEffect(() => {
    // Your effect logic here
  }, [currentSlide]);

  // Fungsi untuk menggeser slider
  const slideHandler = (direction, ref) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="element-beranda-hover">
      <div className="div-2">
        <div className="overlap-group">
          <div className="frame-11">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://c.animaapp.com/4gYTn61Z/img/rectangle-9.png"
            />

            <div className="frame-12">
              <div className="frame-13">
                <div className="text-wrapper-12">Duty After School</div>

                <p className="text-wrapper-13">
                  Sebuah benda tak dikenal mengambil alih dunia. Dalam
                  keputusasaan, Departemen Pertahanan mulai merekrut lebih
                  banyak tentara, termasuk siswa sekolah menengah. Mereka pun
                  segera menjadi pejuang garis depan dalam perang.
                </p>
              </div>

              <div className="frame-14">
                <div className="frame-15">
                  <ColorPrimaryWrapper
                    buttonContent="Mulai"
                    className="button-instance"
                    color="primary"
                    variant="contained"
                  />
                  <div className="button-wrapper">
                    <div className="content-wrapper">
                      <div className="content">
                        <InformationOutline
                          className="icon-instance-node"
                          color="white"
                        />
                        <button className="button-2">Selengkapnya</button>
                      </div>
                    </div>
                  </div>

                  <div className="div-wrapper">
                    <div className="text-wrapper-14">18+</div>
                  </div>
                </div>

                <img
                  className="frame-16"
                  alt="Frame"
                  src="https://c.animaapp.com/4gYTn61Z/img/frame-65.svg"
                />
              </div>
            </div>
          </div>

          <Navbar
            className="navbar-instance"
            movieOpen="https://c.animaapp.com/4gYTn61Z/img/movie-open-4.svg"
            type="web"
            profile={{
              username: profile?.username,
              email: profile?.email,
              avatar: profile?.avatar,
            }}
            onProfileClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="text-field-dropdown">
              <div className="list-menu">
                <img
                  className="icon-instance-node"
                  alt="Account"
                  src="https://c.animaapp.com/4gYTn61Z/img/account.svg"
                />

                <div className="text-wrapper-15">Profil Saya</div>
              </div>

              <div className="list-menu">
                <img
                  className="icon-instance-node"
                  alt="Star"
                  src="https://c.animaapp.com/4gYTn61Z/img/star-8.svg"
                />

                <div className="text-wrapper-16">Ubah Premium</div>
              </div>

              <div className="list-menu">
                <img
                  className="icon-instance-node"
                  alt="Login variant"
                  src="https://c.animaapp.com/4gYTn61Z/img/login-variant.svg"
                />

                <div className="text-wrapper-16">Keluar</div>
              </div>
            </div>
          )}
          {profile ? (
            <div>
              <h1>{profile.name}</h1>
              <p>{profile.email}</p>
              <p>{profile.bio}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="melanjutkan-tonton">
          <div className="text-wrapper-17">Melanjutkan Tonton Film</div>

          <div className="card" ref={continueWatchingRef}>
            <div className="frame-17">
              <Component className="component-2" type="thirty-one" />
              <div className="frame-18">
                <div className="text-wrapper-18">Don’t Look Up</div>

                <div className="frame-19">
                  <img
                    className="star-2"
                    alt="Star"
                    src="https://c.animaapp.com/4gYTn61Z/img/star-7.svg"
                  />

                  <div className="text-wrapper-19">4.5/5</div>
                </div>
              </div>
            </div>

            <div className="frame-17">
              <Component className="component-instance" type="seventeen" />
              <div className="frame-18">
                <div className="text-wrapper-18">The Batman</div>

                <div className="frame-19">
                  <img
                    className="star-2"
                    alt="Star"
                    src="https://c.animaapp.com/4gYTn61Z/img/star-7.svg"
                  />

                  <div className="text-wrapper-19">4.2/5</div>
                </div>
              </div>
            </div>

            <div className="frame-17">
              <Component className="component-2-instance" type="five" />
              <div className="frame-18">
                <div className="text-wrapper-18">Blue Lock</div>

                <div className="frame-19">
                  <img
                    className="star-2"
                    alt="Star"
                    src="https://c.animaapp.com/4gYTn61Z/img/star-7.svg"
                  />

                  <div className="text-wrapper-19">4.6/5</div>
                </div>
              </div>

              <div className="chip">
                <div className="success">Episode Baru</div>
              </div>
            </div>

            <div className="frame-17">
              <Component
                className="design-component-instance-node"
                type="nine"
              />
              <div className="frame-18">
                <div className="text-wrapper-18">A Man Called Otto</div>

                <div className="frame-19">
                  <img
                    className="star-2"
                    alt="Star"
                    src="https://c.animaapp.com/4gYTn61Z/img/star-7.svg"
                  />

                  <div className="text-wrapper-19">4.4/5</div>
                </div>
              </div>
            </div>

            <div className="arrow-right-wrapper" 
                 onClick={() => slideHandler('right', continueWatchingRef)}>
              <ArrowRight4 className="icon-instance-node" color="white" />
            </div>

            <div className="arrow-left-wrapper"
                 onClick={() => slideHandler('left', continueWatchingRef)}>
              <ArrowLeft4 className="icon-instance-node" color="white" />
            </div>
          </div>
        </div>

        <div className="melanjutkan-tonton-2">
          <p className="text-wrapper-17">Top Rating Film dan Series Hari ini</p>

          <div className="frame-20">
            <div className="frame-21">
              <NumberWrapper className="component-1" number="fourteen" />
              <div className="chip">
                <div className="success">Episode Baru</div>
              </div>
            </div>

            <div className="frame-21">
              <NumberWrapper
                className="component-1-instance"
                number="twenty-five"
              />
            </div>

            <div className="frame-21">
              <NumberWrapper className="component-3" number="twenty-nine" />
            </div>

            <div className="frame-21">
              <NumberWrapper className="component-4" number="nine" />
              <div className="chip">
                <div className="success">Episode Baru</div>
              </div>
            </div>

            <div className="frame-22">
              <NumberWrapper className="component-5" number="twelve" />
              <div className="top-wrapper">
                <div className="top">
                  Top
                  <br />
                  10
                </div>
              </div>
            </div>

            <div className="element-hover-series">
              <div className="component-wrapper">
                <Component className="component-6" type="seventeen" />
              </div>

              <div className="frame-23">
                <img
                  className="frame-24"
                  alt="Frame"
                  src="https://c.animaapp.com/4gYTn61Z/img/frame-77.svg"
                />

                <div className="frame-25">
                  <div className="info-wrapper">
                    <div className="info">13+</div>
                  </div>

                  <div className="text-wrapper-20">16 Episode</div>
                </div>

                <div className="frame-26">
                  <div className="text-wrapper-21">Misteri</div>

                  <div className="text-wrapper-22">•</div>

                  <div className="text-wrapper-21">Kriminal</div>

                  <div className="text-wrapper-23">•</div>

                  <div className="text-wrapper-21">Fantasi</div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="arrow-right-4-wrapper">
                <ArrowRight4 className="icon-instance-node" color="white" />
              </div>

              <div className="arrow-left-4-wrapper">
                <ArrowLeft4 className="icon-instance-node" color="white" />
              </div>
            </div>
          </div>
        </div>

        <div className="melanjutkan-tonton-3">
          <div className="text-wrapper-17">Film Trending</div>

          <div className="frame-20">
            <div className="frame-21">
              <NumberWrapper className="component-7" number="seven" />
              <div className="frame-27">
                <div className="top">
                  Top
                  <br />
                  10
                </div>
              </div>
            </div>

            <div className="frame-21">
              <NumberWrapper className="component-8" number="sixteen" />
              <div className="frame-27">
                <div className="top">
                  Top
                  <br />
                  10
                </div>
              </div>
            </div>

            <div className="frame-21">
              <NumberWrapper className="component-9" number="thirty" />
              <div className="frame-27">
                <div className="top">
                  Top
                  <br />
                  10
                </div>
              </div>
            </div>

            <div className="frame-21">
              <NumberWrapper className="component-10" number="ten" />
              <div className="frame-27">
                <div className="top">
                  Top
                  <br />
                  10
                </div>
              </div>
            </div>

            <div className="frame-22">
              <NumberWrapper className="component-11" number="six" />
              <div className="frame-27">
                <div className="top">
                  Top
                  <br />
                  10
                </div>
              </div>
            </div>

            <div className="group">
              <div className="arrow-right-4-wrapper">
                <ArrowRight4 className="icon-instance-node" color="white" />
              </div>

              <div className="arrow-left-4-wrapper">
                <ArrowLeft4 className="icon-instance-node" color="white" />
              </div>
            </div>
          </div>
        </div>

        <div className="melanjutkan-tonton-4">
          <div className="text-wrapper-17">Rilis Baru</div>

          <div className="frame-20">
            <div className="frame-21">
              <NumberWrapper className="component-11" number="six" />
              <div className="frame-27">
                <div className="top">
                  Top
                  <br />
                  10
                </div>
              </div>
            </div>

            <div className="frame-21">
              <NumberWrapper className="component-12" number="seventeen" />
              <div className="chip">
                <div className="success">Episode Baru</div>
              </div>
            </div>

            <div className="frame-21">
              <NumberWrapper className="component-5" number="twelve" />
              <div className="frame-27">
                <div className="top">
                  Top
                  <br />
                  10
                </div>
              </div>
            </div>

            <div className="frame-21">
              <NumberWrapper className="component-4" number="nine" />
              <div className="chip">
                <div className="success">Episode Baru</div>
              </div>
            </div>

            <div className="frame-22">
              <NumberWrapper className="component-13" number="thirteen" />
            </div>

            <div className="group">
              <div className="arrow-right-4-wrapper">
                <ArrowRight4 className="icon-instance-node" color="white" />
              </div>

              <div className="arrow-left-4-wrapper">
                <ArrowLeft4 className="icon-instance-node" color="white" />
              </div>
            </div>
          </div>
        </div>

        <Footer
          className="footer-instance"
          logoMovieOpen="https://c.animaapp.com/4gYTn61Z/img/movie-open-5.svg"
          type="web"
        />
      </div>
    </div>
  );
};

export default ElementBerandaHover;
