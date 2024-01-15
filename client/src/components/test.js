import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Test = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        gap: "400px",
        paddingTop: "50px",
        flexDirection: "column",
      }}
    >
      <div
        style={{ width: "400px", height: "100px", background: "tomato" }}
        data-aos="fade-left"
      ></div>
      <div
        style={{ width: "400px", height: "100px", background: "tomato" }}
        data-aos="fade-right"
      ></div>
      <div
        style={{ width: "400px", height: "100px", background: "tomato" }}
        data-aos="flip-up"
      ></div>
      <div
        style={{ width: "400px", height: "100px", background: "tomato" }}
        data-aos="flip-down"
      ></div>
      <div
        style={{ width: "400px", height: "100px", background: "tomato" }}
        data-aos="zoom-in"
      ></div>
      <div
        style={{ width: "400px", height: "100px", background: "tomato" }}
        data-aos="slide-right"
      ></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Test;
