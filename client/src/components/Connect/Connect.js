import React from "react";
import "./Connect.css";

const Connect = () => {
  return (
    <div className="Connect-wrapper">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <p
            style={{
              color: "#7562E0",
              fontFamily: "Poppins",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
            }}
          >
            Connect with me:
          </p>
          <p
            style={{
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              marginTop: "16px",
            }}
          >
            Satisfied with me? Please contact me
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <a href="">
              <img src="./assets/icons/sms.svg" />
            </a>
            <a href="">
              <img src="./assets/icons/dribbble.svg" />
            </a>
            <a href="">
              <img src="./assets/icons/instagram.svg" />
            </a>
            <a href="">
              <img src="./assets/icons/facebook.svg" />
            </a>
          </div>
        </div>
        <div>
          <p
            style={{
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
          >
            Contact me, let’s make magic together
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
