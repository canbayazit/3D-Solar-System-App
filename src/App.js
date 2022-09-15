import { Route, Routes } from "react-router-dom";
import style from "./App.module.scss";
import AsteroidsAndComets from "./Pages/Asteroids&Comets/AsteroidsAndComets";
import Home from "./Pages/Home/Home";
import Moons from "./Pages/Moons/Moons";
import Planets from "./Pages/Planets/Planets";
import SolarSystem from "./Pages/Solar System/SolarSystem";

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solarsystem" element={<SolarSystem />} />
        <Route path="/moons" element={<Moons />} />
        <Route path="/asteroidsandcomets" element={<AsteroidsAndComets />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
