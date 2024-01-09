import React from "react";
import "./Aboutme.css";
const Aboutme = () => {
  const data = [
    {
      icon: "./assets/icons/webdev.svg",
      name: "WEB DEVELOPMENT",
    },
  ];
  return (
    <div className="About-wrapper">
      <div>
        <p className="Aboutme-text">About me:</p>
        <p className="Aboutme-desc">
          Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer,
          UI designer, and Mobile developer. I jhave honed my skills in Web
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
      </div>
    </div>
  );
};

export default Aboutme;
