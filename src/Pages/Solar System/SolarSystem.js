import { Bounds, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeButton } from "../../Assets/svg/svg";
import CardContainer from "../../Components/CardContainer/CardContainer";
import ComparePlanet from "../../Components/ComparePlanet/ComparePlanet";
import PlanetCreator from "../../Components/PlanetCreator/PlanetCreator";
import Search from "../../Components/Search/Search";
import { store } from "../../Store";
import { setClick, setIsPlanet, setMod } from "../../Store/PlanetSlice";
import { setIsSun } from "../../Store/StarSlice";
import style from "./style.module.scss";
const SolarSystem = () => {
  const { planets, stars, mod } = useSelector((store) => store.planets);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.requestFullscreen();
  }, []);
  // useEffect(() => {
  //   planets.filter((item) => item.name.toLowerCase()).includes(text) ? setStatus(true): setStatus(false)
  //   console.log(status)
  //   console.log("text",text)

  //   console.log("includes",planets.filter((item) => item.name.toLowerCase()))
  // }, [text]);
  const handleClick = () => {
    dispatch(setClick(false));
    dispatch(setIsSun(false));
    dispatch(setIsPlanet(false));
    dispatch(setMod(false));
    navigate("/");
    document.exitFullscreen();
  };
  return (
    <div className={style.container}>
      <div className={style.close_button}>
        <button onClick={() => handleClick()}>{closeButton()}</button>
      </div>
      <CardContainer />
      <Search />
      <div className={style.canvas_container}>
        {mod ? (
          <ComparePlanet />
        ) : (
          <Canvas
            shadows
            className={style.Canvas}
            camera={{
              fov: 45,
              aspect: window.innerWidth / window.innerHeight,
              near: 1,
              far: 4000,
              position: [0, 0, 0],
            }}
          >
            <axesHelper args={[25, 25, 25]} />

            <Suspense fallback={null}>
              <Bounds fit clip observe margin={0.2}>
                <Provider store={store}>
                  <PlanetCreator />
                </Provider>
              </Bounds>
            </Suspense>
          </Canvas>
        )}
      </div>
    </div>
  );
};

export default SolarSystem;
