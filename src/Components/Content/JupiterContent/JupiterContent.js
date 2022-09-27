import React from "react";
import style from "./style.module.scss";

const JupiterContent = () => {
  return (
    <div className={style.container} id="content">
      <fieldset className={style.fieldset}>
        <legend>Our Solar System</legend>
        <h2>Jupiter</h2>
        <p className={style.fieldset_description}>
          Jupiter has a long history of surprising scientists – all the way back
          to 1610 when Galileo Galilei found the first moons beyond Earth. That
          discovery changed the way we see the universe.{" "}
        </p>
      </fieldset>
      <div className={style.solar_system_description}>
        <p className={style.description}>
          Fifth in line from the Sun, Jupiter is, by far, the largest planet in
          the solar system – more than twice as massive as all the other planets
          combined. Jupiter's familiar stripes and swirls are actually cold,
          windy clouds of ammonia and water, floating in an atmosphere of
          hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm
          bigger than Earth that has raged for hundreds of years.
        </p>
      </div>
    </div>
  );
};

export default JupiterContent;
