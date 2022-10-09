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

const ComparePlanet = () => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState();
  const [radiusLeft, setRadiusLeftPlanet] = useState(100);
  const [radiusRight, setRadiusRightPlanet] = useState(100);
  const { planets, planetIndex, mod, click, pathname } = useSelector(
    (store) => store.planets
  );
  const { stars, isSun } = useSelector((store) => store.stars);

  let location = useLocation();

  const handleClickLeft = () => {
    let val = index - 1;
    if (click) {
      if (location.pathname === "/sun" || isSun) {
        if (val === -1) {
          setIndex(planets.length - 1);
        } else {
          setIndex(val);
        }
      } else {
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
      }
    }
  };

  const handleClickRight = () => {
    let val = index + 1;
    if (click) {
      if (location.pathname === "/sun" || isSun) {
        if (val === planets.length) {
          setIndex(0);
        } else {
          setIndex(val);
        }
      } else {
        if (val === planets.length) {
          planetIndex === 0 ? setIndex(1) : setIndex(0);
        } else {
          planetIndex === val
            ? val === planets.length - 1
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
    pathname !== "/solarsystem" ? setHeight("595px") : setHeight("100%");
    if (location.pathname === "/sun" || isSun) {
      console.log("1.");

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
      console.log("2.");
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

  console.log("compare mod", mod);
  return (
    <div className={style.container} style={{ height: `${height}` }}>
      <div
        className={style.canvas_left}
        style={{ width: mod ? "50%" : "100%" }}
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
              <Provider store={store}>
                <PlanetMain radius={radiusLeft} />
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
              color: (pathname === "/sun" ? stars : isSun ? stars : planets)[
                planetIndex
              ].color,
            }}
          >
            {
              (pathname === "/sun" ? stars : isSun ? stars : planets)[
                planetIndex
              ].name
            }
          </div>
          <div
            className={style.radius_left}
            style={{
              color: (pathname === "/sun" ? stars : isSun ? stars : planets)[
                planetIndex
              ].color,
            }}
          >
            {
              (pathname === "/sun" ? stars : isSun ? stars : planets)[
                planetIndex
              ].radius
            }
            <span>KM</span>
          </div>
        </div>
      </div>
      <div
        className={style.canvas_right}
        style={{ display: mod ? "block" : "none" }}
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
              <Provider store={store}>
                <Planet index={index} radius={radiusRight} />
              </Provider>
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
