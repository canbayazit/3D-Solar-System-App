import React from "react";
import style from "./style.module.scss";
import solarSystem from "../../../Assets/img/solarsystemm.png";
import PlanetCardContainer from "../../PlanetCard/PlanetCardContainer";

const HomeContent = () => {
  return (
    <div className={style.main} id="content">
      <div className={style.content}>
        <fieldset className={style.fieldset}>
          <legend>Our Solar System</legend>
          <h2>Why is it Called the Solar System? </h2>
          <p className={style.fieldset_description}>
            There are many planetary systems like ours in the universe, with
            planets orbiting a host star. Our planetary system is called “the
            solar system” because we use the word “solar” to describe things
            related to our star, after the Latin word for Sun, "solis."{" "}
          </p>
        </fieldset>
        <div className={style.solar_system_description}>
          <img src={solarSystem} className={style.solar_system_img}></img>
          <p className={style.description}>
            Our solar system consists of our star, the Sun, and everything bound
            to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter,
            Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of
            moons; and millions of asteroids, comets, and meteoroids.
          </p>
        </div>
      </div>
      <PlanetCardContainer/>
    </div>
  );
};

export default HomeContent;
