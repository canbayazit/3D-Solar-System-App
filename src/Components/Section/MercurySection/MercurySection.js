import { Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import Mercury from "../../PlanetObjects/Mercury/Mercury";
import style from "./style.module.scss";
import { textures } from "../../../Constant/planet_image/image";
import { arrowLeft, arrowRight } from "../../../Assets/svg/svg";
const MercurySection = () => {
  const { planets } = useSelector((store) => store.planets);
  const handleClick=()=>{

  }
  return (
    <div className={style.container}>
      <div className={style.card_container}>
        <div className={style.image_container}>
          <img src={textures[0].image} className={style.image}></img>
        </div>
        <div className={style.description_container}>
          <p className={style.description}>{planets[0].description}</p>
        </div>

        <div className={style.stats_container}>
          <div className={style.length_year_container}>
            <div className={style.length_year} style={{color:planets[0].color}}>
              {planets[0].lengthYear} <span>EARTH DAYS</span>
            </div>
            <div className={style.label}>Length of Year</div>
          </div>

          <div className={style.distance_container}>
            <div className={style.distance} style={{color:planets[0].color}}>
              {planets[0].distance} <span>AU</span>
            </div>
            <div className={style.label}>Distance from Sun</div>
          </div>
          <div className={style.namesake_container}>
            <div className={style.namesake}>{planets[0].namesake}</div>
            <div className={style.label}>Namesake</div>
          </div>
          <div className={style.moons_units_container}>
            <div className={style.moons_units} style={{color:planets[0].color}}>{planets[0].moons.units}</div>
            <div className={style.label}>Moons</div>
          </div>
        </div>
        <div className={style.button} >
          <button onClick={() => handleClick()}><span className={style.left}>{arrowLeft(planets[0].color)}</span><span>COMPARE SIZE</span><span className={style.right}>{arrowRight(planets[0].color)}</span></button>
        </div>
      </div>
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
            <Mercury planets={planets} />
          </Bounds>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MercurySection;
