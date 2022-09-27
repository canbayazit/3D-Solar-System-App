import React from "react";
import style from "./style.module.scss";

const SaturnContent = () => {
  return (
    <div className={style.container} id="content">
      <fieldset className={style.fieldset}>
        <legend>Our Solar System</legend>
        <h2>Saturn</h2>
        <p className={style.fieldset_description}>
          Saturn is the sixth planet from the Sun and the second-largest planet
          in our solar system.{" "}
        </p>
      </fieldset>
      <div className={style.solar_system_description}>
        <p className={style.description}>
          Adorned with thousands of beautiful ringlets, Saturn is unique among
          the planets. It is not the only planet to have rings – made of chunks
          of ice and rock – but none are as spectacular or as complicated as
          Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made
          mostly of hydrogen and helium.
        </p>
      </div>
    </div>
  );
};

export default SaturnContent;
