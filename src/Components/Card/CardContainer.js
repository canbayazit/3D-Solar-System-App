/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { textures, starTexture } from "../../Constant/planet_image/image";
import { arrowLeft, arrowRight, closeButton, detailToggle, moon } from "../../Assets/svg/svg";
import { useDispatch, useSelector } from "react-redux";
import { setClick, setMod } from "../../Store/PlanetSlice";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { setIsSun } from "../../Store/StarSlice";

const CardContainer = () => {
  const { planets, planetIndex, click, mod, pathname } = useSelector(
    (store) => store.planets
  );
  const { stars, isSun } = useSelector((store) => store.stars);
  const dispatch = useDispatch();
  let location = useLocation();
  const [open, setOpen] = useState(false)
  const openComparison = () => {
    dispatch(setMod(true));
  };
  const closeComparison = () => {
    dispatch(setMod(false));
  };
  const CloseCard = () => {
    dispatch(setClick(false));
    dispatch(setIsSun(false));
    setOpen(false);
  }; 
  const setToggle = () => {
    setOpen(true);
    dispatch(setClick(true));
    console.log("clicked")
  };
  const matches = useMediaQuery('(max-width:1025px)');

  useEffect(() => {
    pathname!=='/solarsystem' && (matches ===false && dispatch(setClick(true)));
     setOpen(false) ;
  }, [])
  
  console.log("click card", click);
  console.log("pathname card", pathname);
  console.log("location.pathname card", location.pathname);
  return (
    <>
      <div
        className={style.comparison_mode_container}
        style={{
          display: mod ? "flex" : "none",
          top: pathname !== '/solarsystem' ? `${85}px` : "0",
        }}
      >
        <button
          className={style.comparison_mode_button}
          onClick={() => closeComparison()}
        >
          <span>X</span> Close Comparison Mode
        </button>
      </div>
      <div className={style.detail_toggle_container} style={{display:pathname === '/solarsystem' ? (click ?  matches ? open ? "none": "flex" :"none" : "none") : (matches ? open ? "none":"flex":"none")}}>
          <h1>{location.pathname === "/sun"
              ? stars[planetIndex].name.toUpperCase()
              : isSun
                ? stars[planetIndex].name.toUpperCase()
                : planets[planetIndex].name.toUpperCase()}</h1>
          <button className={style.detail_toggle} onClick={() => setToggle()}>
            {detailToggle()}
          </button>
      </div>
      <div
        className={
          pathname !== '/solarsystem'
            ? style.card_container
            : style.card_container_3d
        }
        style={
          pathname !== '/solarsystem'
            ? click
              ? matches ? {display:open ?  (mod ? "none" : "block") :"none"} : { display: mod ? "none" : "block"}
              : { display: "none" }
            : click
              ? matches ? {display:open ?  (mod ? "none" : "block") :"none"} : { display: mod ? "none" : "block", height: "100%" }
              : { display: "none" }
        }
      >
        <div className={style.close_button_container}>
          <button className={style.close_button} onClick={() => CloseCard()}>
            {closeButton()}
          </button>
        </div>
        <div className={style.image_container}>
          <img
            src={
              location.pathname === "/sun"
                ? starTexture[planetIndex].image
                : isSun
                  ? starTexture[planetIndex].image
                  : textures[planetIndex].image
            }
            className={style.image}
          ></img>
        </div>
        <div className={style.description_container}>
          <p className={style.description}>
            {location.pathname === "/sun"
              ? stars[planetIndex].description
              : isSun
                ? stars[planetIndex].description
                : planets[planetIndex].description}
          </p>
        </div>

        <div className={style.stats_container}>
          <div className={style.length_year_container}>
            <div
              className={style.length_year}
              style={{
                color:
                  location.pathname === "/sun"
                    ? stars[planetIndex].color
                    : isSun
                      ? stars[planetIndex].color
                      : planets[planetIndex].color,
              }}
            >
              {location.pathname === "/sun"
                ? stars[planetIndex].lengthYear
                : planets[planetIndex].lengthYear}{" "}
              <span>
                {location.pathname === "/sun"
                  ? "MILLION EARTH YEARS"
                  : isSun
                    ? "MILLION EARTH YEARS"
                    : "EARTH DAYS"}
              </span>
            </div>
            <div className={style.label}>Length of Year</div>
          </div>

          <div className={style.distance_container}>
            <div
              className={style.distance}
              style={{
                color:
                  location.pathname === "/sun"
                    ? stars[planetIndex].color
                    : isSun
                      ? stars[planetIndex].color
                      : planets[planetIndex].color,
              }}
            >
              {location.pathname === "/sun"
                ? stars[planetIndex].radius
                : isSun
                  ? stars[planetIndex].radius
                  : planets[planetIndex].distance}{" "}
              <span>{location.pathname === "/sun" ? "KM" : isSun ? "KM" : "AU"}</span>
            </div>
            <div className={style.label}>
              {location.pathname === "/sun"
                ? "Radius"
                : isSun
                  ? "Radius"
                  : "Distance from Sun"}
            </div>
          </div>
          <div className={style.namesake_container}>
            <div className={style.namesake}>
              {location.pathname === "/sun"
                ? stars[planetIndex].namesake
                : isSun
                  ? stars[planetIndex].namesake
                  : planets[planetIndex].namesake}
            </div>
            <div className={style.label}>Namesake</div>
          </div>
          <div className={style.moons_units_container}>
            <div
              className={style.moons_units}
              style={{
                color:
                  location.pathname === "/sun"
                    ? stars[planetIndex].color
                    : isSun
                      ? stars[planetIndex].color
                      : planets[planetIndex].color,
              }}
            >
              {location.pathname === "/sun"
                ? stars[planetIndex].planets.units
                : isSun
                  ? stars[planetIndex].planets.units
                  : planets[planetIndex].moons.units}
              <span>{moon(planets[planetIndex].color)}</span>
            </div>
            <div className={style.label}>
              {location.pathname === "/sun" ? "Planets" : isSun ? "Planets" : "Moons"}
            </div>
          </div>
        </div>
        <div className={style.button_container}>
          <button className={style.button} onClick={() => openComparison()}>
            <span className={style.left}>
              {arrowLeft(isSun ? stars[planetIndex].color : planets[planetIndex].color)}
            </span>
            <span>COMPARE SIZE</span>
            <span className={style.right}>
              {arrowRight(isSun ? stars[planetIndex].color : planets[planetIndex].color)}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
