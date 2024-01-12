import Aboutme from "./components/AboutMe/Aboutme";
import Banner from "./components/Banner/Banner";
import Connect from "./components/Connect/Connect";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div style={{ width: "100vw", height: "auto", backgroundColor: "#1a1a29" }}>
      <NavBar />
      <Banner />
      <Aboutme />
      <Projects />
      <Connect />
    </div>
  );
}

export default App;
