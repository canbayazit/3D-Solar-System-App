import React from "react";
import useScroll from "../../Function/ScrollFunction";
import style from "./style.module.scss";

const PlanetMainSection = () => {
  const value = useScroll(1);
  return (
    <>
      <div className={style.section} id="stars">
        <div
          className={style.earthDiv}
          style={{ backgroundPositionX: -value - 1280 }}
        ></div>

        <div className={style.sun} style={{ top: value * 0.5 + 350 }}></div>
        <div
          className={style.moon}
          style={{
            top: 400 + value * 0.3,
            left: `${80 - value * 0.08}%`,
            boxShadow: `inset ${-30 - value * 0.22}px 0 ${8}px #000,
        -12px 0 20px #90909055`,
          }}
        ></div>
      </div>
      <div className={style.dashboard}>
        <div className={style.title}>
          <h1>Solar System</h1>
        </div>
        <div className={style.stats}>
          <div className={style.info}>
            <h3>Planets</h3>
            <span>8</span>
          </div>
          <div className={style.info}>
            <h3>Moons</h3>
            <span>200+</span>
          </div>
          <div className={style.info}>
            <h3>Asteroids</h3>
            <span>1.113.527</span>
          </div>
          <div className={style.info}>
            <h3>Comets</h3>
            <span>3.743</span>
          </div>
        </div>
      </div>   
    </>
  );
};

export default PlanetMainSection;
