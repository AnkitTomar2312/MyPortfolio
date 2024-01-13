import { React, useRef } from "react";
import Aboutme from "./components/AboutMe/Aboutme";
import Banner from "./components/Banner/Banner";
import Connect from "./components/Connect/Connect";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
function App() {
  const bannerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const connectRef = useRef(null);

  const scrollToRef = (ref) => {
    switch (ref) {
      case "banner":
        bannerRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "aboutMe":
        aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "connect":
        connectRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
  return (
    <div style={{ width: "100vw", height: "auto", backgroundColor: "#1a1a29" }}>
      <NavBar scrollToRef={scrollToRef} />
      <Banner innerRef={bannerRef} />
      <Aboutme innerRef={aboutMeRef} />
      <Projects innerRef={projectsRef} />
      <Connect innerRef={connectRef} />
    </div>
  );
}

export default App;
