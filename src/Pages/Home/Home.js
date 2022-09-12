import React, { startTransition } from "react";
import Header from "../../Components/Header/Header";
import style from "./style.module.scss";
import solarSystem from "../../Assets/img/solarsystemm.png";
const Home = () => {
  let earth = document.getElementById("earth");
  let stars = document.getElementById("stars");
  let sun = document.getElementById("sun");
  let moon = document.getElementById("moon");
  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    earth.style.backgroundPositionX = -1 * value - 1280 + "px";
    // moon.style.backgroundPositionX = -1 * value * 0.15 + "px";
    moon.style.left = 80 - value * 0.08 + "%";
    moon.style.top = 400 + value * 0.3 + "px";
    sun.style.top = value * 0.5 + 350 + "px";
  });
  return (
    <div className={style.container}>
      <Header />
      <div className={style.section} id={`stars`}>
        <div className={style.earthDiv} id={`earth`}></div>
        <div className={style.sun} id={`sun`}></div>
        <div className={style.moon} id={`moon`}></div>
      </div>
      <div className={style.dashboard}>
        <div className={style.title}>
          <h1>Solar System</h1>
        </div>
        <div className={style.stats}>
          <div className={style.info}>
            <h4>Planets</h4>
            <span>8</span>
          </div>
          <div className={style.info}>
            <h4>Moons</h4>
            <span>200+</span>
          </div>
          <div className={style.info}>
            <h4>Asteroids</h4>
            <span>1.113.527</span>
          </div>
          <div className={style.info}>
            <h4>Comets</h4>
            <span>3.743</span>
          </div>
        </div>
      </div>
      <div className={style.main}>
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
              Our solar system consists of our star, the Sun, and everything
              bound to it by gravity – the planets Mercury, Venus, Earth, Mars,
              Jupiter, Saturn, Uranus, and Neptune; dwarf planets such as Pluto;
              dozens of moons; and millions of asteroids, comets, and
              meteoroids.
            </p>
          </div>
        </div>
        <div className={style.planets}>
            
        </div>
      </div>
    </div>
  );
};

export default Home;
