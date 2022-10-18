import { useMediaQuery } from "@mui/material";
import { Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CardContainer from "../../Components/Card/CardContainer";
import ComparePlanet from "../../Components/ComparePlanet/ComparePlanet";
import MediaContainer from "../../Components/Media/MediaContainer";
import PlanetCreator from "../../Components/PlanetCreator/PlanetCreator";
import Search from "../../Components/Search/Search";
import { store } from "../../Store";
import { setPathname, setPlanetArray, setPlanetIndex } from "../../Store/PlanetSlice";
import { setIsSun } from "../../Store/StarSlice";
import style from "./style.module.scss";
const SolarSystem = () => {
  const { mod,planets } = useSelector((store) => store.planets);
  const dispatch=useDispatch();
  const location=useLocation();
  const matches = useMediaQuery('(max-width:1025px)');
  useEffect(() => {
    matches===false && document.body.requestFullscreen();
  }, []);
  useEffect(() => {

      dispatch(setPlanetArray(planets));
      dispatch(setPlanetIndex(0));
      dispatch(setIsSun(false));
      dispatch(setPathname(location.pathname));

    console.log("use EFFECT ASDAS")

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
