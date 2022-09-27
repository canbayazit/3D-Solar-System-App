import React from "react";
import style from "./style.module.scss";

const MarsContent = () => {
  return (
    <div className={style.container} id="content">
      <fieldset className={style.fieldset}>
        <legend>Our Solar System</legend>
        <h2>Mars</h2>
        <p className={style.fieldset_description}>
          Mars is the fourth planet from the Sun – a dusty, cold, desert world
          with a very thin atmosphere. Mars is also a dynamic planet with
          seasons, polar ice caps, canyons, extinct volcanoes, and evidence that
          it was even more active in the past.{" "}
        </p>
      </fieldset>
      <div className={style.solar_system_description}>
        <p className={style.description}>
          Mars is one of the most explored bodies in our solar system, and it's
          the only planet where we've sent rovers to roam the alien landscape.
          NASA currently has two rovers (Curiosity and Perseverance), one lander
          (InSight), and one helicopter (Ingenuity) exploring the surface of
          Mars. Perseverance rover – the largest, most advanced rover NASA has
          sent to another world – touched down on Mars on Feb. 18, 2021, after a
          203-day journey traversing 293 million miles (472 million kilometers).
          The Ingenuity helicopter rode to Mars attached to the belly of
          Perseverance. Perseverance is one of three spacecraft that arrived at
          Mars in 2021. The Hope orbiter from the United Arab Emirates arrived
          on Feb. 9, 2021. China’s Tianwen-1 mission arrived on Feb. 10, 2021,
          and includes an orbiter, a lander, and a rover. Europe and India also
          have spacecraft studying Mars from orbit.
        </p>
      </div>
    </div>
  );
};

export default MarsContent;
