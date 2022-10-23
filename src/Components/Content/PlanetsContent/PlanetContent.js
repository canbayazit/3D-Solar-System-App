/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import style from "./style.module.scss";
import planet from "../../../Assets/img/planets.jpg";
const PlanetContent = () => {
  return (
    <div className={style.main} >
      <div className={style.content}>
        <fieldset className={style.fieldset}>
          <legend>Our Solar System</legend>
          <h2>What is a Planet?</h2>
          <p className={style.fieldset_description}>
            This seemingly simple question doesn't have a simple answer.
            Everyone knows that Earth, Mars and Jupiter are planets. But both
            Pluto and Ceres were once considered planets until new discoveries
            triggered scientific debate about how to best describe them—a
            vigorous debate that continues to this day.{" "}
          </p>
        </fieldset>
        <div className={style.description_container}>
          <p className={style.description}>
            The most recent definition of a planet was adopted by the
            International Astronomical Union in 2006. It says a planet must do
            three things:
          </p>
          <ol>
            <li>
              It must orbit a star (in our cosmic neighborhood, the Sun).{" "}
            </li>
            <li>
              It must be big enough to have enough gravity to force it into a
              spherical shape.
            </li>
            <li>
              It must be big enough that its gravity cleared away any other
              objects of a similar size near its orbit around the Sun.
            </li>
          </ol>
        </div>
        <div className={style.planets_img_container}>
          <img src={planet} className={style.planets_img}/>
        </div>
      </div>     
    </div>
  );
};

export default PlanetContent;
