import { Bounds, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import PlanetCreator from "../../Components/Planets/PlanetCreator";
import style from "./style.module.scss";
// import texture from "../../Assets/img/stars.jpg";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
import Background from "../../Components/Background/Background";

const SolarSystem = () => {
  // const map = useLoader(TextureLoader, texture);
  const width = window.innerHeight;
  console.log();
  const height = window.innerHeight;
  return (
    <div className={style.container}>
      <Canvas
        shadows
        className={style.Canvas}
        camera={{
          fov: 45,
          aspect: width / height,
          near: 1,
          far: 4000,
          position: [-10, 45, 20],
        }}
      >
        <axesHelper args={[25, 25, 25]} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={0.2}>
            <PlanetCreator />
          </Bounds>
        </Suspense>
        
      </Canvas>
    </div>
  );
};

export default SolarSystem;
