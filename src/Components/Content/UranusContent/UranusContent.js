import React from "react";
import style from "./style.module.scss";

const UranusContent = () => {
  return (
    <div className={style.container} id="content">
      <fieldset className={style.fieldset}>
        <legend>Our Solar System</legend>
        <h2>Uranus</h2>
        <p className={style.fieldset_description}>
          Uranus is the seventh planet from the Sun, and has the third-largest
          diameter in our solar system. It was the first planet found with the
          aid of a telescope, Uranus was discovered in 1781 by astronomer
          William Herschel, although he originally thought it was either a comet
          or a star.{" "}
        </p>
      </fieldset>
      <div className={style.solar_system_description}>
        <p className={style.description}>
          It was two years later that the object was universally accepted as a
          new planet, in part because of observations by astronomer Johann Elert
          Bode. Herschel tried unsuccessfully to name his discovery Georgium
          Sidus after King George III. Instead, the scientific community
          accepted Bode's suggestion to name it Uranus, the Greek god of the
          sky, as suggested by Bode.​
        </p>
      </div>
    </div>
  );
};

export default UranusContent;
