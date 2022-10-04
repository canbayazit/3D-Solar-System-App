import { Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";
import { textures } from "../../../Constant/planet_image/image";
import {  
  arrowLeft,
  arrowRight,
  moon,
  arrowButtonRight,
  arrowButtonLeft,
} from "../../../Assets/svg/svg";
import Planet from "../../PlanetObjects/Planet";
import PlanetMain from "../../PlanetObjects/PlanetMain";
import CardContainer from "../../CardContainer/CardContainer";

const PlanetSection = () => {
  const [index, setIndex] = useState(0);
  const [radiusLeft, setRadiusLeftPlanet] = useState(100);
  const [radiusRight, setRadiusRightPlanet] = useState(100);
  const { planets,planetIndex,mod} = useSelector((store) => store.planets);

  const handleClickLeft = () => {
    let val = index - 1; 
    if (val === -1) {
      planetIndex !== planets.length - 1 ? setIndex(planets.length - 1): setIndex(planets.length - 2)
    } else {
      planetIndex === val ? val===0 ? setIndex(planets.length - 1):setIndex(val-1) : setIndex(val)
    }
  };

  const handleClickRight = () => {
    let val = index + 1;
    if (val === planets.length) {
      planetIndex === 0 ? setIndex(1): setIndex(0)
    } else {
      planetIndex === val ? val === planets.length-1 ? setIndex(0): setIndex(val+1) : setIndex(val)
    }
  };
  useEffect(() => {
    window.scrollTo(0,0);
  planetIndex===index ? setIndex(1) : setIndex(0)
  },[] )
  console.log("radius right",radiusRight);
  console.log("radius left",radiusLeft);

  useEffect(() => {
    if (planets[planetIndex].radius > planets[index].radius) {
      let newRadius = radiusLeft / (planets[planetIndex].radius / planets[index].radius);
      setRadiusRightPlanet(newRadius);
      setRadiusLeftPlanet(100);
    } else if (planets[planetIndex].radius < planets[index].radius) {
      let newRadius = radiusRight / (planets[index].radius / planets[planetIndex].radius);
      setRadiusRightPlanet(100);
      setRadiusLeftPlanet(newRadius);
    } else {
      setRadiusRightPlanet(100);
      setRadiusLeftPlanet(100);
    }    

  });
  
  return (
    <div className={style.container}>      
      <CardContainer/>
      <div className={style.canvas_container}>        
        <div className={style.canvas_left} style={mod ? { width: "50%" } : { width: "100%" } }>
          <Canvas
            shadows
            className={style.Canvas}
            camera={{
              fov: 45,
              aspect: window.innerWidth / window.innerHeight,
              near: 1,
              far: 4000,
              position: [5, 0, 10],
            }}
          >
            <Suspense fallback={null}>
              <Bounds fit clip observe margin={0.2}>
                <PlanetMain  index={planetIndex} planets={planets[planetIndex]} radius={radiusLeft} mod={mod}/>
              </Bounds>
            </Suspense>
          </Canvas>
          <div className={style.card_left_container} style={mod ? {display:"flex" } : {display:"none" } }>
            <div className={style.name_left} style={{color:planets[planetIndex].color}}>{planets[planetIndex].name}</div>
            <div className={style.radius_left} style={{color:planets[planetIndex].color}}>{planets[planetIndex].radius}<span>KM</span></div>
          </div>
        </div>
        <div className={style.canvas_right} style={mod ? { display: "flex", color:planets[planetIndex].color,width: "50%" } : { display: "none",width: "100%" } }>
          <Canvas
            shadows
            className={style.Canvas}
            camera={{
              fov: 45,
              aspect: window.innerWidth / window.innerHeight,
              near: 1,
              far: 4000,
              position: [5, 0, 10],
            }}
          >
            <Suspense fallback={null}>
              <Bounds fit clip observe margin={0.2}>
                <Planet
                  planets={planets[index]}
                  index={index}
                  radius={radiusRight}
                  mod={mod}
                />
              </Bounds>
            </Suspense>
          </Canvas>
          <div className={style.card_right_container}>
            <div className={style.name_right} style={{color:planets[index].color}}>{planets[index].name}</div>
            <div className={style.radius_right} style={{color:planets[index].color}}>{planets[index].radius}<span>KM</span></div>
          </div>
          <button
            className={style.button_left}
            onClick={() => handleClickLeft()}
          >
            {arrowButtonLeft()}
          </button>
          <button
            className={style.button_right}
            onClick={() => handleClickRight()}
          >
            {arrowButtonRight()}
          </button>
        </div>
      </div>    
    </div>
   

  );
};

export default PlanetSection;
