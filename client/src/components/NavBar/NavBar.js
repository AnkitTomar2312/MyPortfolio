import React, { useState } from "react";
import "./NavBar.css";
const Navbar = () => {
  const [color, setColor] = useState("#fff");
  return (
    <>
      <div className="NavParent">
        <div className="NavChild1">Ankit Tomar</div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
