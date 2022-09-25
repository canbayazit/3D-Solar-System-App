import { Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import PlanetCreator from "../../Components/PlanetCreator/PlanetCreator";
import style from "./style.module.scss";
// import texture from "../../Assets/img/stars.jpg";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
const SolarSystem = () => {
  // const map = useLoader(TextureLoader, texture);
  const { planets} = useSelector(
    (store) => store.planets); 
  console.log("solar system",planets);
 
  return (
    <div className={style.container}>    
      <Canvas
        shadows
        className={style.Canvas}
        camera={{
          fov: 45,
          aspect:  window.innerWidth / window.innerHeight,
          near: 1,
          far: 4000,
          position: [0, 0, 0],
        }}
      >
        {/* <axesHelper args={[25, 25, 25]} /> */}
    
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={0.2}>
            <PlanetCreator planets={planets}/>     
          </Bounds>
        </Suspense>
        
      </Canvas>
    </div>
  );
};

export default SolarSystem;
