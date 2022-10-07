import React from "react";
import style from "./style.module.scss";

const MercuryContent = () => {
  return (
    <div className={style.container} id="content">
      <fieldset className={style.fieldset}>
        <legend>Our Solar System</legend>
        <h2>Mercury</h2>
        <p className={style.fieldset_description}>
          The smallest planet in our solar system and nearest to the Sun,
          Mercury is only slightly larger than Earth's Moon.{" "}
        </p>
      </fieldset>
      <div className={style.solar_system_description}>
        <p className={style.description}>
          From the surface of Mercury, the Sun would appear more than three
          times as large as it does when viewed from Earth, and the sunlight
          would be as much as seven times brighter. Despite its proximity to the
          Sun, Mercury is not the hottest planet in our solar system – that
          title belongs to nearby Venus, thanks to its dense atmosphere. Because
          of Mercury's elliptical – egg-shaped – orbit, and sluggish rotation,
          the Sun appears to rise briefly, set, and rise again from some parts
          of the planet's surface. The same thing happens in reverse at sunset.
        </p>
      </div>
    </div>
  );
};

export default MercuryContent;
