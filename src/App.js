import { Route, Routes } from "react-router-dom";
import style from "./App.module.scss";
import FirebaseFunction from "./Components/Function/FirebaseFunction";
import AsteroidsAndComets from "./Pages/Asteroids&Comets/AsteroidsAndComets";
import Home from "./Pages/Home/Home";
import Moons from "./Pages/Moons/Moons";
import Planets from "./Pages/Planets/Planets/Planets";
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
        <Route path="/mercury" element={<Planets />} />
        <Route path="/venus" element={<Planets />} />
        <Route path="/earth" element={<Planets />} />
        <Route path="/mars" element={<Planets />} />
        <Route path="/jupiter" element={<Planets />} />
        <Route path="/saturn" element={<Planets />} />
        <Route path="/uranus" element={<Planets />} />
        <Route path="/neptune" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
