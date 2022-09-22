import React from "react";
import useScroll from "../../Function/ScrollFunction";
import style from "./style.module.scss";

const HomeSection = () => {
  // let earth = document.getElementById("earth");
  // let stars = document.getElementById("stars");
  // let sun = document.getElementById("sun");
  // let moon = document.getElementById("moon");
  // window.addEventListener("scroll", () => {
  // let value = window.scrollY;
  // earth.style.backgroundPositionX = -1 * value - 1280 + "px";
  // moon.style.backgroundPositionX = -1 * value * 0.15 + "px";
  // moon.style.left = 80 - value * 0.08 + "%";
  // moon.style.top = 400 + value * 0.3 + "px";
  // sun.style.top = value * 0.5 + 350 + "px";
  // });
  // const parallax = useParallax<HTMLDivElement>({
  //   rotateZ: [0, 360],
  // });
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
    </>
  );
};

export default HomeSection;
