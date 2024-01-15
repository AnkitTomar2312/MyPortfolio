import React, { useEffect } from "react";
import "./Aboutme.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Aboutme = ({ innerRef }) => {
  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-in-out" });
  }, []);

  const data = [
    {
      icon: "./assets/icons/webdev.svg",
      name: "WEB DEVELOPMENT",
    },
  ];
  const services = [
    {
      icon: "./assets/icons/webdev.svg",
      title: "UI & UX DEVELOPER",
      info: "I develop beautiful web iterfaces.",
    },
    {
      icon: "./assets/icons/webdev.svg",
      title: "MERN STACK",
      info: "I develop single page web interfaces with React js and MongoDB database ",
    },
  ];
  return (
    <div ref={innerRef} className="About-wrapper" data-aos="fade-up">
      <div>
        <p data-aos="slide-right" className="Aboutme-text">
          About me:
        </p>
        <p className="Aboutme-desc" data-aos="slide-left">
          Hi, my name is Ankit Tomar, i am a Fullstack web developer, UI
          designer, and Mobile developer. I jhave honed my skills in Web
          Development and advance i have core understanding of advance UI design
          principles. Here are the major skiills i have.
        </p>
        <div className="exp-wrpper" data-aos="slide-right">
          <p className="exp">1+</p>
          <p className="exp-text">
            Years of experience. Specialised in building apps, while ensuring a
            seamless <br /> web experience for end users.
          </p>
        </div>
        <div className="data-wrapper">
          {data.map((item, index) => {
            return (
              <div className="data-holder" data-aos="slide-up" key={index}>
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
          data-aos="slide-right"
        >
          The services i offer:
        </p>
        <div className="services-wrapper">
          {services.map((item, index) => {
            return (
              <div className="services-div" key={index} data-aos="slide-up">
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
