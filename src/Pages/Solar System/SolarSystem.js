import { useMediaQuery } from "@mui/material";
import { Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import CardContainer from "../../Components/Card/CardContainer";
import ComparePlanet from "../../Components/ComparePlanet/ComparePlanet";
import MediaContainer from "../../Components/Media/MediaContainer";
import PlanetCreator from "../../Components/PlanetCreator/PlanetCreator";
import Search from "../../Components/Search/Search";
import { store } from "../../Store";
import style from "./style.module.scss";
const SolarSystem = () => {
  const { mod } = useSelector((store) => store.planets);

  const matches = useMediaQuery('(max-width:1025px)');
  useEffect(() => {
    matches===false && document.body.requestFullscreen();
  }, []);
  // useEffect(() => {
  //   planets.filter((item) => item.name.toLowerCase()).includes(text) ? setStatus(true): setStatus(false)
  //   console.log(status)
  //   console.log("text",text)

  //   console.log("includes",planets.filter((item) => item.name.toLowerCase()))
  // }, [text]);

  return (
    <div className={style.container}>
      <MediaContainer/>
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
              fov: 60,
              aspect: window.innerWidth / window.innerHeight,
              near: 1,
              far: 3,
              position: [0, 0, 0],
            }}
          >
           
            <axesHelper args={[2500, 2500, 2500]} />
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
