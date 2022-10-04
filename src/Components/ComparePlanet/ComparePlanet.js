import { Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { arrowButtonLeft, arrowButtonRight } from "../../Assets/svg/svg";
import Planet from "../PlanetObjects/Planet";
import PlanetMain from "../PlanetObjects/PlanetMain";
import style from "./style.module.scss";

const ComparePlanet = () => {
  const [index, setIndex] = useState(0);
  const [radiusLeft, setRadiusLeftPlanet] = useState(100);
  const [radiusRight, setRadiusRightPlanet] = useState(100);
  const { planets, planetIndex,mod } = useSelector((store) => store.planets);
  const { stars,status } = useSelector((store) => store.stars);

  const handleClickLeft = () => {
    let val = index - 1;
    if (val === -1) {
      planetIndex !== planets.length - 1
        ? setIndex(planets.length - 1)
        : setIndex(planets.length - 2);
    } else {
      planetIndex === val
        ? val === 0
          ? setIndex(planets.length - 1)
          : setIndex(val - 1)
        : setIndex(val);
    }
  };

  const handleClickRight = () => {
    let val = index + 1;
    if (val === planets.length) {
      planetIndex === 0 ? setIndex(1) : setIndex(0);
    } else {
      planetIndex === val
        ? val === planets.length - 1
          ? setIndex(0)
          : setIndex(val + 1)
        : setIndex(val);
    }
  };
  useEffect(() => {
    planetIndex === index ? setIndex(1) : setIndex(0);
  }, []);

  useEffect(() => {
    if (status) {
        if (stars[planetIndex].radius > planets[index].radius) {
            let newRadius =
              radiusLeft / (stars[planetIndex].radius / planets[index].radius);
            setRadiusRightPlanet(newRadius);
            setRadiusLeftPlanet(100);
          } else if (stars[planetIndex].radius < planets[index].radius) {
            let newRadius =
              radiusRight / (stars[index].radius / planets[planetIndex].radius);
            setRadiusRightPlanet(100);
            setRadiusLeftPlanet(newRadius);
          } else {
            setRadiusRightPlanet(100);
            setRadiusLeftPlanet(100);
          }
    } else {
        if (planets[planetIndex].radius > planets[index].radius) {
            let newRadius =
              radiusLeft / (planets[planetIndex].radius / planets[index].radius);
            setRadiusRightPlanet(newRadius);
            setRadiusLeftPlanet(100);
          } else if (planets[planetIndex].radius < planets[index].radius) {
            let newRadius =
              radiusRight / (planets[index].radius / planets[planetIndex].radius);
            setRadiusRightPlanet(100);
            setRadiusLeftPlanet(newRadius);
          } else {
            setRadiusRightPlanet(100);
            setRadiusLeftPlanet(100);
          }
    }
    
  });

  return (
    <div className={style.container}>    
      <div className={style.canvas_left} >
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
              <PlanetMain
                index={planetIndex}
                planets={status ? stars[planetIndex] : planets[planetIndex]}
                radius={radiusLeft}
                mod={mod}
                status={status}
              />
            </Bounds>
          </Suspense>
        </Canvas>
        <div className={style.card_left_container} style={{ display: "flex" }}>
          <div
            className={style.name_left}
            style={{ color: status ? stars[planetIndex].color : planets[planetIndex].color }}
          >
            {status ? stars[planetIndex].name : planets[planetIndex].name}
          </div>
          <div
            className={style.radius_left}
            style={{ color: status ? stars[planetIndex].color : planets[planetIndex].color }}
          >
            {status ? stars[planetIndex].radius : planets[planetIndex].radius}
            <span>KM</span>
          </div>
        </div>
      </div>
      <div
        className={style.canvas_right}
        style={{     
          color: planets[planetIndex].color,    
        }}
      >
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
          <div
            className={style.name_right}
            style={{ color: planets[index].color }}
          >
            {planets[index].name}
          </div>
          <div
            className={style.radius_right}
            style={{ color: planets[index].color }}
          >
            {planets[index].radius}
            <span>KM</span>
          </div>
        </div>
        <button className={style.button_left} onClick={() => handleClickLeft()}>
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
  );
};

export default ComparePlanet;
