import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import solarSystem from "../../../Assets/img/solarsystemm.png";
import { useSelector } from "react-redux";
import { textures } from "../../../Constant/image";

const HomeContent = () => {
  const { planets } = useSelector((store) => store.planets);

  console.log("store planet", planets);

  return (
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
            Our solar system consists of our star, the Sun, and everything bound
            to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter,
            Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of
            moons; and millions of asteroids, comets, and meteoroids.
          </p>
        </div>
      </div>
      <div className={style.planets}>
        <div>
          <h1 className={style.main_heading}>Planets in Our Solar System</h1>
        </div>
        <div className={style.card_container}>
          {planets.map((item, index) => {
            const image = textures[index].image;
            return (
              <div key={index} className={style.card}>
                <div className={style.image_container}>
                  <img src={image} className={style.image}></img>
                </div>
                <h2 className={style.heading} style={{ color: item.color }}>
                  {item.name}
                </h2>
                <p></p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
