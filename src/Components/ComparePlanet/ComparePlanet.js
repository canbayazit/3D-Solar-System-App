/* eslint-disable react-hooks/exhaustive-deps */
import { Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { arrowButtonLeft, arrowButtonRight } from "../../Assets/svg/svg";
import { store } from "../../Store";
import Planet from "../PlanetObjects/Planet";
import PlanetMain from "../PlanetObjects/PlanetMain";
import style from "./style.module.scss";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Phobos from "../3DModel/Phobos";
import Deimos from "../3DModel/Deimos";
import PlanetLoading from "../Loading/PlanetLoading/PlanetLoading";

const ComparePlanet = () => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState();
  const [radiusLeft, setRadiusLeftPlanet] = useState(100);
  const [radiusRight, setRadiusRightPlanet] = useState(100);
  const { planets, planetIndex, mod, moons, isMoon, planetArray } = useSelector(
    (store) => store.planets
  );
  const { isSun } = useSelector((store) => store.stars);
  let location = useLocation();
  const handleClickLeft = () => {
    let val = index - 1;
    if (location.pathname === "/sun" || isSun) {
      if (val === -1) {
        setIndex(planetArray.length - 1);
      } else {
        setIndex(val);
      }
    } else {
      if (!isSun) {
        if (val === -1) {
          planetIndex !== planetArray.length - 1
            ? setIndex(planetArray.length - 1)
            : setIndex(planetArray.length - 2);
        } else {
          planetIndex === val
            ? val === 0
              ? setIndex(planetArray.length - 1)
              : setIndex(val - 1)
            : setIndex(val);
        }
      }
    }
  };

  const handleClickRight = () => {
    let val = index + 1;
    if (location.pathname === "/sun" || isSun) {
      if (val === planets.length) {
        setIndex(0);
      } else {
        setIndex(val);
      }
    } else {
      if (!isSun) {
        if (val === planetArray.length) {
          planetIndex === 0 ? setIndex(1) : setIndex(0);
        } else {
          planetIndex === val
            ? val === planetArray.length - 1
              ? setIndex(0)
              : setIndex(val + 1)
            : setIndex(val);
        }
      }
    }
  };

  useEffect(() => {
    location.pathname === "/sun"
      ? setIndex(0)
      : planetIndex === index
      ? setIndex(1)
      : setIndex(0);
  }, []);

  useEffect(() => {
    location.pathname === "/solarsystem" && setHeight("100%");
    if (location.pathname === "/sun" || isSun) {
      if (planetArray[planetIndex].radius > planets[index].radius) {
        let newRadius =
          radiusLeft /
          (planetArray[planetIndex].radius / planets[index].radius);
        setRadiusRightPlanet(newRadius);
        setRadiusLeftPlanet(100);
      } else if (planetArray[planetIndex].radius < planets[index].radius) {
        let newRadius =
          radiusRight /
          (planetArray[index].radius / planets[planetIndex].radius);
        setRadiusRightPlanet(100);
        setRadiusLeftPlanet(newRadius);
      } else {
        setRadiusRightPlanet(100);
        setRadiusLeftPlanet(100);
      }
    } else {
      if (planetArray[planetIndex].radius > planetArray[index].radius) {
        let newRadius =
          radiusLeft /
          (planetArray[planetIndex].radius / planetArray[index].radius);
        setRadiusRightPlanet(newRadius);
        setRadiusLeftPlanet(100);
      } else if (planetArray[planetIndex].radius < planetArray[index].radius) {
        let newRadius =
          radiusRight /
          (planetArray[index].radius / planetArray[planetIndex].radius);
        setRadiusRightPlanet(100);
        setRadiusLeftPlanet(newRadius);
      } else {
        setRadiusRightPlanet(100);
        setRadiusLeftPlanet(100);
      }
    }
  }, [
    index,
    isSun,
    location.pathname,
    planetArray,
    planetIndex,
    planets,
    radiusLeft,
    radiusRight,
  ]);
  const matches = useMediaQuery("(max-width:1025px)");
  return (
    <div className={style.container} style={{ height: `${height}` }}>
      <div
        className={style.canvas_left}
        style={{
          width: mod ? (matches ? "100%" : "50%") : "100%",
          height: mod ? (matches ? "65%" : "100%") : "100%",
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
          <Suspense fallback={<PlanetLoading />}>
            <Bounds fit clip observe margin={0.2}>
              <Provider store={store}>
                {planetArray[planetIndex].name === "Phobos" ? (
                  <Phobos radius={radiusLeft} />
                ) : planetArray[planetIndex].name === "Deimos" ? (
                  <Deimos radius={radiusLeft} />
                ) : (
                  <PlanetMain radius={radiusLeft} />
                )}
              </Provider>
            </Bounds>
          </Suspense>
        </Canvas>
        <div
          className={style.card_left_container}
          style={{ display: mod ? "flex" : "none" }}
        >
          <div
            className={style.name_left}
            style={{
              color: planetArray[planetIndex].color,
            }}
          >
            {planetArray[planetIndex].name}
          </div>
          <div
            className={style.radius_left}
            style={{
              color: planetArray[planetIndex].color,
            }}
          >
            {planetArray[planetIndex].radius}
            <span>KM</span>
          </div>
          {isMoon && (
            <div
              className={style.planet_moon_left}
              style={{ color: planetArray[planetIndex].color }}
            >
              {planetArray[planetIndex].planet}
            </div>
          )}
        </div>
      </div>
      <div
        className={style.canvas_right}
        style={{
          display: mod ? "block" : "none",
          height: mod ? (matches ? "35%" : "100%") : "100%",
          width: mod ? (matches ? "100%" : "50%") : "100%",
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
          <Suspense fallback={<PlanetLoading />}>
            <Bounds fit clip observe margin={0.2}>
              <Provider store={store}>
                {location.pathname === "/sun" ? (
                  <Planet index={index} radius={radiusRight} />
                ) : planetArray[index].name === "Phobos" ? (
                  <Phobos radius={radiusRight} />
                ) : planetArray[index].name === "Deimos" ? (
                  <Deimos radius={radiusRight} />
                ) : (
                  <Planet index={index} radius={radiusRight} />
                )}
              </Provider>
            </Bounds>
          </Suspense>
        </Canvas>
        <div className={style.card_right_container}>
          <div
            className={style.name_right}
            style={{ color: (isMoon ? moons : planets)[index].color }}
          >
            {(isMoon ? moons : planets)[index].name}
          </div>
          <div
            className={style.radius_right}
            style={{ color: (isMoon ? moons : planets)[index].color }}
          >
            {(isMoon ? moons : planets)[index].radius}
            <span>KM</span>
          </div>
          {isMoon && (
            <div
              className={style.planet_moon_right}
              style={{ color: moons[index].color }}
            >
              {moons[index].planet}
            </div>
          )}
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
