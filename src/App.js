import { Route, Routes } from "react-router-dom";
import style from "./App.module.scss";
import FirebaseFunction from "./Components/Function/FirebaseFunction";
import AsteroidsAndComets from "./Pages/Asteroids&Comets/AsteroidsAndComets";
import Home from "./Pages/Home/Home";
import Moons from "./Pages/Moons/Moons";
import Earth from "./Pages/Planets/Earth/Earth";
import Jupiter from "./Pages/Planets/Jupiter/Jupiter";
import Mars from "./Pages/Planets/Mars/Mars";
import Mercury from "./Pages/Planets/Mercury/Mercury";
import Neptune from "./Pages/Planets/Neptune/Neptune";
import Planets from "./Pages/Planets/Planets/Planets";
import Saturn from "./Pages/Planets/Saturn/Saturn";
import Uranus from "./Pages/Planets/Uranus/Uranus";
import Venus from "./Pages/Planets/Venus/Venus";
import SolarSystem from "./Pages/Solar System/SolarSystem";

function App() {
  FirebaseFunction();
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solarsystem" element={<SolarSystem />} />
        <Route path="/moons" element={<Moons />} />
        <Route path="/asteroidsandcomets" element={<AsteroidsAndComets />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />
      </Routes>
    </div>
  );
}

export default App;
