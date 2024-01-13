import React from "react";
import "./Connect.css";

const Connect = ({ innerRef }) => {
  return (
    <div ref={innerRef} className="Connect-wrapper">
      <div className="Connect-wrapper-div">
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
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              margin: "24px 0",
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
          <form className="connect-form" action="mailto: ankitjdec@gmail.com">
            <input className="form-input" type="text" placeholder="Name:" />
            <input className="form-input" type="email" placeholder="Email:" />
            <textarea className="form-input" placeholder="Message:" />

            <input
              style={{ marginTop: "36px", textAlign: "center" }}
              className="submit-btn"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
