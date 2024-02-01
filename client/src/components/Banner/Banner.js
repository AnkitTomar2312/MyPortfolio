import React, { useEffect } from "react";
import "./Banner.css";
import Typewriter from "../typewritter";
import Aos from "aos";
import "aos/dist/aos.css";
const Banner = ({ innerRef }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div ref={innerRef} style={{ position: "relative" }}>
      <div className="BannerParent">
        <div className="intro">
          <p
            style={{
              color: "#fff",
              fontFamily: "Poppins",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
            }}
            data-aos="slide-right"
          >
            Hello, i'am
          </p>
          <p
            style={{
              color: " #F5F5F5",
              fontFamily: "Poppins",
              fontSize: "52px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
            }}
            data-aos="zoom-in"
          >
            <Typewriter />
          </p>
          <p
            style={{
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              marginTop: "24px",
            }}
            data-aos="flip-left"
          >
            Freelance Fullstack developer.
            <br /> I create seamless web experiences <br /> for end-users.
          </p>
          <div className="banner-btns" data-aos="slide-up">
            <p className="BannerAboutMe">
              About Me <img src="./assets/icons/user.svg" />
            </p>
            <a
              className="BannnerProjects"
              href="./assets/icons/Ankit.pdf"
              download
            >
              Resume <img src="./assets/icons/eye.svg" />
            </a>
          </div>
        </div>
        <div className="profile" data-aos="zoom-in">
          <img
            style={{ width: "80%" }}
            src="./assets/images/Dp.png"
            alt="ellipse"
          />
        </div>
      </div>
      <div className="overlapper"></div>
    </div>
  );
};

export default Banner;
