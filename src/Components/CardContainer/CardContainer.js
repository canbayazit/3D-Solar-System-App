import React, { useState } from "react";
import style from "./style.module.scss";
import { textures } from "../../Constant/planet_image/image";
import { arrowLeft, arrowRight, closeButton, moon } from "../../Assets/svg/svg";
import { useDispatch, useSelector } from "react-redux";
import { setClick, setMod } from "../../Store/PlanetSlice";
import ComparePlanet from "../ComparePlanet/ComparePlanet";
const CardContainer = () => {
  const { planets,stars,planetIndex,click,mod} = useSelector(
    (store) => store.planets);
  const dispatch = useDispatch();
  const openComparison = () => {
    dispatch(setMod(true));
  };
  const closeComparison = () => {
    dispatch(setMod(false));
  };
  const handleClose = () => {
    dispatch(setClick(false)); 
  };
  return (
    <>
      <div
        className={style.comparison_mode_container}
        style={mod === false ? { display: "none" } : { display: "flex" }}
      >
        <button
          className={style.comparison_mode_button}
          onClick={() => closeComparison()}
        >
          <span>X</span> Close Comparison Mode
        </button>
      </div>
      <div
        className={style.card_container}
        style={
          (mod === true || click === false)
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <div className={style.close_button_container}>
          <button className={style.close_button} onClick={() => handleClose()}>
           {closeButton()}
          </button>
        </div>
        <div className={style.image_container}>
          <img src={textures[planetIndex].image} className={style.image}></img>
        </div>
        <div className={style.description_container}>
          <p className={style.description}>{planets[planetIndex].description}</p>
        </div>

        <div className={style.stats_container}>
          <div className={style.length_year_container}>
            <div
              className={style.length_year}
              style={{ color: planets[planetIndex].color }}
            >
              {planets[planetIndex].lengthYear} <span>EARTH DAYS</span>
            </div>
            <div className={style.label}>Length of Year</div>
          </div>

          <div className={style.distance_container}>
            <div
              className={style.distance}
              style={{ color: planets[planetIndex].color }}
            >
              {planets[planetIndex].distance} <span>AU</span>
            </div>
            <div className={style.label}>Distance from Sun</div>
          </div>
          <div className={style.namesake_container}>
            <div className={style.namesake}>{planets[planetIndex].namesake}</div>
            <div className={style.label}>Namesake</div>
          </div>
          <div className={style.moons_units_container}>
            <div
              className={style.moons_units}
              style={{ color: planets[planetIndex].color }}
            >
              {planets[planetIndex].moons.units}
              <span>{moon(planets[planetIndex].color)}</span>
            </div>
            <div className={style.label}>Moons</div>
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
      {/* <div className={mod ? style.canvas_container_active : style.canvas_container_passive} >
        <ComparePlanet/>
      </div> */}
    </>
  );
};

export default CardContainer;
