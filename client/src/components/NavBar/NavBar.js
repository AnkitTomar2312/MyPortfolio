import React, { useState } from "react";
import "./NavBar.css";
const Navbar = () => {
  const [color, setColor] = useState("#fff");
  return (
    <>
      <div className="NavParent">
        <div className="NavChild1">Ankit Tomar</div>
        <div className="NavChild2">
          <p>Home</p>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
