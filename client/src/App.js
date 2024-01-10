import Aboutme from "./components/AboutMe/Aboutme";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div style={{ width: "100vw", height: "auto" }}>
      <NavBar />
      <Banner />
      <Aboutme />
      <Projects />
    </div>
  );
}

export default App;
