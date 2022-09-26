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
const MercurySection = () => {
  const [mod, setMod] = useState(false);
  const [index, setIndex] = useState(1);
  const [radiusLeft, setRadiusLeftPlanet] = useState(125);
  const [radiusRight, setRadiusRightPlanet] = useState(125);
  const { planets } = useSelector((store) => store.planets);

  const openComparison = () => {
    setMod(true);
  };
  const closeComparison = () => {
    setMod(false);
  };

  const handleClickLeft = () => {
    let val = index - 1;
    setIndex(planets.length - 1);
    if (val === 0) {
      setIndex(planets.length - 1);
    } else {
      setIndex(val);
    }
  };

  const handleClickRight = () => {
    let val = index + 1;
    if (val === planets.length) {
      setIndex(1);
    } else {
      setIndex(val);
    }
  };

  useEffect(() => {
    if (planets[0].radius > planets[index].radius) {
      let newRadius = radiusLeft / (planets[0].radius / planets[index].radius);
      setRadiusRightPlanet(newRadius);
      setRadiusLeftPlanet(125);
    } else if (planets[0].radius < planets[index].radius) {
      let newRadius = radiusRight / (planets[index].radius / planets[0].radius);
      setRadiusRightPlanet(125);
      setRadiusLeftPlanet(newRadius);
    } else {
      setRadiusRightPlanet(125);
      setRadiusLeftPlanet(125);
    }    
    console.log("useffect");
  });
  
  return (
    <div className={style.container}>
     
      <div
        className={style.card_container}
        style={mod ? { display: "none" } : { display: "block" }}
      >
        <div className={style.image_container}>
          <img src={textures[0].image} className={style.image}></img>
        </div>
        <div className={style.description_container}>
          <p className={style.description}>{planets[0].description}</p>
        </div>

        <div className={style.stats_container}>
          <div className={style.length_year_container}>
            <div
              className={style.length_year}
              style={{ color: planets[0].color }}
            >
              {planets[0].lengthYear} <span>EARTH DAYS</span>
            </div>
            <div className={style.label}>Length of Year</div>
          </div>

          <div className={style.distance_container}>
            <div className={style.distance} style={{ color: planets[0].color }}>
              {planets[0].distance} <span>AU</span>
            </div>
            <div className={style.label}>Distance from Sun</div>
          </div>
          <div className={style.namesake_container}>
            <div className={style.namesake}>{planets[0].namesake}</div>
            <div className={style.label}>Namesake</div>
          </div>
          <div className={style.moons_units_container}>
            <div
              className={style.moons_units}
              style={{ color: planets[0].color }}
            >
              {planets[0].moons.units}
              <span>{moon(planets[0].color)}</span>
            </div>
            <div className={style.label}>Moons</div>
          </div>
        </div>
        <div className={style.button}>
          <button onClick={() => openComparison()}>
            <span className={style.left}>{arrowLeft(planets[0].color)}</span>
            <span>COMPARE SIZE</span>
            <span className={style.right}>{arrowRight(planets[0].color)}</span>
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
            <axesHelper args={[505, 705, 550]} />
            <Suspense fallback={null}>
              <Bounds fit clip observe margin={0.2}>
                <PlanetMain planets={planets[0]} radius={radiusLeft} />
              </Bounds>
            </Suspense>
          </Canvas>
          <div className={style.card_left_container} style={mod ? {display:"flex" } : {display:"none" } }>
            <div className={style.name_left} style={{color:planets[0].color}}>{planets[0].name}</div>
            <div className={style.radius_left} style={{color:planets[0].color}}>{planets[0].radius}<span>KM</span></div>
          </div>
        </div>
        <div className={style.canvas_right} style={mod ? { display: "flex", color:planets[0].color,width: "50%" } : { display: "none",width: "100%" } }>
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
            <axesHelper args={[505, 705, 550]} />
            <Suspense fallback={null}>
              <Bounds fit clip observe margin={0.2}>
                <Planet
                  planets={planets[index]}
                  index={index}
                  radius={radiusRight}
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

export default MercurySection;
