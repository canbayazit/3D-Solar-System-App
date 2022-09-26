import React, { useState } from "react";
import style from "./style.module.scss";
import { textures } from "../../Constant/planet_image/image";
import { arrowLeft, arrowRight, moon } from "../../Assets/svg/svg";
const CardContainer = (props) => {
    console.log("card container",props)
  const [mod, setMod] = useState(false);
  const openComparison = () => {
    setMod(true);
  };
  const closeComparison = () => {
    setMod(false);
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
        style={mod ? { display: "none" } : { display: "block" }}
      >
        <div className={style.image_container}>
          <img src={textures[0].image} className={style.image}></img>
        </div>
        <div className={style.description_container}>
          <p className={style.description}>{props.planets.description}</p>
        </div>

        <div className={style.stats_container}>
          <div className={style.length_year_container}>
            <div
              className={style.length_year}
              style={{ color: props.planets.color }}
            >
              {props.planets.lengthYear} <span>EARTH DAYS</span>
            </div>
            <div className={style.label}>Length of Year</div>
          </div>

          <div className={style.distance_container}>
            <div
              className={style.distance}
              style={{ color: props.planets.color }}
            >
              {props.planets.distance} <span>AU</span>
            </div>
            <div className={style.label}>Distance from Sun</div>
          </div>
          <div className={style.namesake_container}>
            <div className={style.namesake}>{props.planets.namesake}</div>
            <div className={style.label}>Namesake</div>
          </div>
          <div className={style.moons_units_container}>
            <div
              className={style.moons_units}
              style={{ color: props.planets.color }}
            >
              {props.planets.moons.units}
              <span>{moon(props.planets.color)}</span>
            </div>
            <div className={style.label}>Moons</div>
          </div>
        </div>
        <div className={style.button}>
          <button onClick={() => openComparison()}>
            <span className={style.left}>
              {arrowLeft(props.planets.color)}
            </span>
            <span>COMPARE SIZE</span>
            <span className={style.right}>
              {arrowRight(props.planets.color)}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
