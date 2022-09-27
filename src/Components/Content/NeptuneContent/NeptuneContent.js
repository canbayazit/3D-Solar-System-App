import React from "react";
import style from "./style.module.scss";

const NeptuneContent = () => {
  return (
    <div className={style.container} id="content">
      <fieldset className={style.fieldset}>
        <legend>Our Solar System</legend>
        <h2>Neptune</h2>
        <p className={style.fieldset_description}>
          Dark, cold, and whipped by supersonic winds, ice giant Neptune is the
          eighth and most distant planet in our solar system.{" "}
        </p>
      </fieldset>
      <div className={style.solar_system_description}>
        <p className={style.description}>
          More than 30 times as far from the Sun as Earth, Neptune is the only
          planet in our solar system not visible to the naked eye and the first
          predicted by mathematics before its discovery. In 2011 Neptune
          completed its first 165-year orbit since its discovery in 1846. NASA's
          Voyager 2 is the only spacecraft to have visited Neptune up close. It
          flew past in 1989 on its way out of the solar system.
        </p>
      </div>
    </div>
  );
};

export default NeptuneContent;
