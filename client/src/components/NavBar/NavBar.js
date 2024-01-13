import React, { useState, useRef } from "react";
import "./NavBar.css";
const Navbar = ({ scrollToRef }) => {
  return (
    <>
      <div className="NavParent">
        <div className="NavChild1">Ankit Tomar</div>
        <div className="NavChild2">
          <p onClick={() => scrollToRef("banner")}>Home</p>
          <p onClick={() => scrollToRef("aboutMe")}>About</p>
          <p onClick={() => scrollToRef("projects")}>Projects</p>
          <p onClick={() => scrollToRef("connect")}>Contact</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
