/* eslint-disable react-hooks/exhaustive-deps */
import { Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CardContainer from "../../Components/Card/CardContainer";
import ComparePlanet from "../../Components/ComparePlanet/ComparePlanet";
import SolarSystemLoading from "../../Components/Loading/SolarSystemLoading copy/SolarSystemLoading";
import MediaContainer from "../../Components/Media/MediaContainer";
import PlanetCreator from "../../Components/PlanetCreator/PlanetCreator";
import Search from "../../Components/Search/Search";
import { store } from "../../Store";
import {
  setPathname,
  setPlanetArray,
  setPlanetIndex,
} from "../../Store/PlanetSlice";
import { setIsSun } from "../../Store/StarSlice";
import style from "./style.module.scss";
const SolarSystem = () => {
  const { mod, planets } = useSelector((store) => store.planets);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(setPlanetArray(planets));
    dispatch(setPlanetIndex(0));
    dispatch(setIsSun(false));
    dispatch(setPathname(location.pathname));
    document.body.requestFullscreen();
  }, []);

  return (
    <div className={style.container}>
      <MediaContainer />
      <CardContainer />
      <Search />

      {mod ? (
        <ComparePlanet />
      ) : (
        <Canvas
          shadows
          className={style.canvas}
          camera={{
            fov: 60,
            aspect: window.innerWidth / window.innerHeight,
            near: 1,
            far: 3,
            position: [0, 0, 0],
          }}
        >
          <Suspense fallback={<SolarSystemLoading />}>
            <Bounds fit clip observe margin={0.2}>
              <Provider store={store}>
                <PlanetCreator />
              </Provider>
            </Bounds>
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default SolarSystem;
