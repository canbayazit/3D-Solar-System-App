/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import style from "./style.module.scss";
import { textures, starTexture } from "../../Constant/planet_image/image";
import { arrowLeft, arrowRight, closeButton, moon } from "../../Assets/svg/svg";
import { useDispatch, useSelector } from "react-redux";
import { setClick, setMod } from "../../Store/PlanetSlice";
import { setStarStatus } from "../../Store/StarSlice";

const CardContainer = () => {
  const { planets, planetIndex, click, mod, isPlanet } = useSelector(
    (store) => store.planets
  );
  const { stars, status } = useSelector((store) => store.stars);
  const dispatch = useDispatch();
console.log("status",status)
  const openComparison = () => {
    dispatch(setMod(true));
  };
  const closeComparison = () => {
    dispatch(setMod(false));
  };
  const CloseCard = () => {
    dispatch(setClick(false));
    dispatch(setStarStatus(false));
  };
  console.log("isPlanet", isPlanet);
  console.log("mod ", mod);
  console.log("click ", click);
  return (
    <>
      <div
        className={
          isPlanet
            ? style.comparison_mode_container_isPlanet
            : style.comparison_mode_container
        }
        style={mod ? { display: "flex" } : { display: "none" }}
      >
        <button
          className={style.comparison_mode_button}
          onClick={() => closeComparison()}
        >
          <span>X</span> Close Comparison Mode
        </button>
      </div>
      <div
        className={
          isPlanet ? style.card_container_isPlanet : style.card_container
        }
        style={
          click
            ? mod
              ? { display: "none" }
              : { display: "block" }
            : isPlanet
            ? mod
              ? { display: "none" }
              : { display: "block" }
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
              status
                ? starTexture[planetIndex].image
                : textures[planetIndex].image
            }
            className={style.image}
          ></img>
        </div>
        <div className={style.description_container}>
          <p className={style.description}>
            {status ? stars[planetIndex].description : planets[planetIndex].description}
          </p>
        </div>

        <div className={style.stats_container}>
          <div className={style.length_year_container}>
            <div
              className={style.length_year}
              style={{ color: status ? stars[planetIndex].color : planets[planetIndex].color }}
            >
              {status ? stars[planetIndex].lengthYear : planets[planetIndex].lengthYear} <span>{status ?"MILLION EARTH YEARS": "EARTH DAYS"}</span>
            </div>
            <div className={style.label}>Length of Year</div>
          </div>

          <div className={style.distance_container}>
            <div
              className={style.distance}
              style={{ color: status ? stars[planetIndex].color : planets[planetIndex].color }}
            >
              {status ? stars[planetIndex].radius : planets[planetIndex].distance} <span>{status ? "KM":"AU"}</span>
            </div>
            <div className={style.label}>{status ? "Radius" : "Distance from Sun"}</div>
          </div>
          <div className={style.namesake_container}>
            <div className={style.namesake}>
              {status ? stars[planetIndex].namesake : planets[planetIndex].namesake}
            </div>
            <div className={style.label}>Namesake</div>
          </div>
          <div className={style.moons_units_container}>
            <div
              className={style.moons_units}
              style={{ color:status ? stars[planetIndex].color : planets[planetIndex].color }}
            >
              {status ? stars[planetIndex].planets.units : planets[planetIndex].moons.units}
              <span>{moon(planets[planetIndex].color)}</span>
            </div>
            <div className={style.label}>{status ?"Planets" : "Moons"}</div>
          </div>
        </div>
        <div className={style.button_container}>
          <button className={style.button} onClick={() => openComparison()}>
            <span className={style.left}>
              {arrowLeft(planets[planetIndex].color)}
            </span>
            <span>COMPARE SIZE</span>
            <span className={style.right}>
              {arrowRight(planets[planetIndex].color)}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
