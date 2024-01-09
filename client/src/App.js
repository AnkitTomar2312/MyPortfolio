import Aboutme from "./components/AboutMe/Aboutme";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <div style={{ width: "100vw", height: "auto" }}>
      <NavBar />
      <Banner />
      <Aboutme />
    </div>
  );
}

export default App;
