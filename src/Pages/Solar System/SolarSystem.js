import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import PlanetCreator from "../../Components/Planets/PlanetCreator";
import style from "./style.module.scss";
const SolarSystem = () => {
  const width=window.innerHeight;
  console.log()
  const height=window.innerHeight;
  return (
    <div className={style.container}>
      <Canvas className={style.Canvas} camera={{fov:45 ,aspect:(width / height), near:1 ,far:1000, position: [-10, 45, 20]}}>
          <Suspense fallback={null}>
            <PlanetCreator />    
          </Suspense> 
      </Canvas>
    </div>
  );
};

export default SolarSystem;
