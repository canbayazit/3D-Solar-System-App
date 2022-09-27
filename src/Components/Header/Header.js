import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
const Header = () => {
  const [value, setText] = useState("");
  const [isScrolling, setScrolling] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY >= 80 ? setScrolling(true) : setScrolling(false);
  });
  const { headerStatus } = useSelector((store) => store.planets);
  return (
    <header
      className={style.container}
      style={
        isScrolling
          ? {
              backgroundColor: "#000",
              borderBottom: " 1px solid #3b3b3b",
              transitionDuration: "1s",
            }
          : {
              backgroundColor: headerStatus ? "#000" : "#00000000",
              borderBottom: headerStatus
                ? " 1px solid #3b3b3b"
                : " 1px solid #3b3b3b00",
              transitionDuration: "1s",
            }
      }
    >
      <div className={style.left_header}>
        <div className={style.page_logo}></div>
        <div className={style.heading}>
          <h4><Link to={"/"} >EXPLORE THE SOLAR SYSTEM</Link></h4>
        </div>
      </div>
      <div className={style.right_header}>
        <div className={style.orrery}>
          <div className={style.outmost_circle}>
            <div className={style.outmost_dot}></div>
          </div>
          <div className={style.outer_circle}>
            <div className={style.outer_dot}></div>
          </div>
          <div className={style.inner_circle}>
            <div className={style.inner_dot}></div>
          </div>
          <div className={style.sun}></div>
        </div>
        <ul>
          <li>
            <Link to={"/solarsystem"} >
              3D Solar System
            </Link>
          </li>
          <li>
            <Link to={"/planets"} >
              Planets
            </Link>
          </li>
          <li>
            <Link to={"/moons"} >
              Moons
            </Link>
          </li>
          <li>
            <Link to={"/asteroidsandcomets"} >
              Asteroids & Comets
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
