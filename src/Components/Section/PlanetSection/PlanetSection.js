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
import Dashboard from "../../Dashboard/Dashboard";

const PlanetSection = () => {
  const [mod, setMod] = useState(false);
  const [index, setIndex] = useState(0);
  const [radiusLeft, setRadiusLeftPlanet] = useState(100);
  const [radiusRight, setRadiusRightPlanet] = useState(100);
  const { planets,planetIndex} = useSelector((store) => store.planets);
  // console.log("home",planets);
console.log("section index",planetIndex);

  const openComparison = () => {
    setMod(true);
  };
  const closeComparison = () => {
    setMod(false);
  };

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

    // console.log("useffect section");
  });
  
  return (
    <div className={style.container}>      
      <div
        className={style.card_container}
        style={mod ? { display: "none" } : { display: "block" }}
      >
        <div className={style.image_container}>
          <img src={textures[planetIndex].image} className={style.image}></img>
        </div>
        <div className={style.description_container}>
          <p className={style.description}>{planets[planetIndex].description}</p>
        </div>

        <div className={style.stats_container}>
          <div className={style.length_year_container}>
            <div
              className={style.length_year}
              style={{ color: planets[planetIndex].color }}
            >
              {planets[planetIndex].lengthYear} <span>EARTH DAYS</span>
            </div>
            <div className={style.label}>Length of Year</div>
          </div>

          <div className={style.distance_container}>
            <div className={style.distance} style={{ color: planets[planetIndex].color }}>
              {planets[planetIndex].distance} <span>AU</span>
            </div>
            <div className={style.label}>Distance from Sun</div>
          </div>
          <div className={style.namesake_container}>
            <div className={style.namesake}>{planets[planetIndex].namesake}</div>
            <div className={style.label}>Namesake</div>
          </div>
          <div className={style.moons_units_container}>
            <div
              className={style.moons_units}
              style={{ color: planets[planetIndex].color }}
            >
              {planets[planetIndex].moons.units}
              <span>{moon(planets[planetIndex].color)}</span>
            </div>
            <div className={style.label}>Moons</div>
          </div>
        </div>
        <div className={style.button}>
          <button onClick={() => openComparison()}>
            <span className={style.left}>{arrowLeft(planets[planetIndex].color)}</span>
            <span>COMPARE SIZE</span>
            <span className={style.right}>{arrowRight(planets[planetIndex].color)}</span>
          </button>
        </div>
      </div>
      <div className={style.canvas_container}>
        <div className={style.comparison_mode_container} style={mod===false ? { display: "none" } : { display: "flex" }}>
          <button className={style.comparison_mode_button}  onClick={()=>closeComparison()}>
            <span>X</span> Close Comparison Mode
          </button>
        </div>
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
      <Dashboard/>  
    </div>
   

  );
};

export default PlanetSection;
