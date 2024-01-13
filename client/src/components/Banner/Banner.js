import React from "react";
import "./Banner.css";
import Typewriter from "../typewritter";
const Banner = ({ innerRef }) => {
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
            }}
          >
            Freelance Fullstack developer.
            <br /> I create seamless web experiences <br /> for end-users.
          </p>
          <div className="banner-btns">
            <p className="BannerAboutMe">
              About Me <img src="./assets/icons/user.svg" />
            </p>
            <p className="BannnerProjects">
              Projects <img src="./assets/icons/eye.svg" />
            </p>
          </div>
        </div>
        <div className="profile">
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
