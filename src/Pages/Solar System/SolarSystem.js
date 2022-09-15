import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import PlanetCreator from "../../Components/Planets/PlanetCreator";
import style from "./style.module.scss";
const SolarSystem = () => {
  // const width=window.innerHeight;
  // console.log()
  // const height=window.innerHeight;
  return (
    <div className={style.container}   >
      <Canvas className={style.Canvas}>
        <Suspense fallback={null}>
          <PlanetCreator />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SolarSystem;
