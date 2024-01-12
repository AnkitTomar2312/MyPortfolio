import React from "react";
import "./Aboutme.css";
const Aboutme = () => {
  const data = [
    {
      icon: "./assets/icons/webdev.svg",
      name: "WEB DEVELOPMENT",
    },
    {
      icon: "./assets/icons/webdev.svg",
      name: "WEB DEVELOPMENT",
    },
  ];
  const services = [
    {
      icon: "./assets/icons/webdev.svg",
      title: "UI & UX DESIGNING",
      info: "I design beautiful web iterfaces with Figma and Adove XD",
    },
    {
      icon: "./assets/icons/webdev.svg",
      title: "UI & UX DESIGNING",
      info: "I design beautiful web iterfaces with Figma and Adove XD",
    },
    {
      icon: "./assets/icons/webdev.svg",
      title: "UI & UX DESIGNING",
      info: "I design beautiful web iterfaces with Figma and Adove XD",
    },
    {
      icon: "./assets/icons/webdev.svg",
      title: "UI & UX DESIGNING",
      info: "I design beautiful web iterfaces with Figma and Adove XD",
    },
    {
      icon: "./assets/icons/webdev.svg",
      title: "UI & UX DESIGNING",
      info: "I design beautiful web iterfaces with Figma and Adove XD",
    },
    {
      icon: "./assets/icons/webdev.svg",
      title: "UI & UX DESIGNING",
      info: "I design beautiful web iterfaces with Figma and Adove XD",
    },
  ];
  return (
    <div className="About-wrapper">
      <div>
        <p className="Aboutme-text">About me:</p>
        <p className="Aboutme-desc">
          Hi, my name is Ankit Tomar, i am a Fullstack web developer, UI
          designer, and Mobile developer. I jhave honed my skills in Web
          Development and advance i have core understanding of advance UI design
          principles. Here are the major skiills i have.
        </p>
        <div className="exp-wrpper">
          <p className="exp">1+</p>
          <p className="exp-text">
            Years of experience. Specialised in building apps, while ensuring a
            seamless <br /> web experience for end users.
          </p>
        </div>
        <div className="data-wrapper">
          {data.map((item, index) => {
            return (
              <div className="data-holder" key={index}>
                <img className="data-icon" src={item.icon} />
                <p className="data-text">{item.name}</p>
              </div>
            );
          })}
        </div>
        <p
          className="services-i-offer"
          style={{
            color: " #7562E0",
            fontFamily: "Poppins",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginTop: "80px",
          }}
        >
          The services i offer:
        </p>
        <div className="services-wrapper">
          {services.map((item, index) => {
            return (
              <div className="services-div" key={index}>
                <img className="services-icon" src={item.icon} />
                <p className="services-title">{item.title}</p>
                <p className="services-info">{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
