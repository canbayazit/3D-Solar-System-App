import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
const Header = () => {
  const [value, setText] = useState("");
  const [isScrolling, setScrolling] = useState(false);
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    window.scrollY >= 80 ? setScrolling(true) : setScrolling(false);
  });

  return (
    <header className={style.container } style={isScrolling  ?{backgroundColor:'#000' , borderBottom:' 1px solid #3b3b3b', transitionDuration:'1s'} :{backgroundColor:'#00000000', transitionDuration:'1s'}}>
      <div className={style.left_header}>
        <div className={style.page_logo}></div>
        <div className={style.heading}>
          <h4>EXPLORE THE SOLAR SYSTEM</h4>
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
            <Link to={"/solarsystem"} className="link">
              Solar System
            </Link>{" "}
          </li>
          <li>
            <Link to={"/planets"} className="link">
              Planets
            </Link>
          </li>
          <li>
            <Link to={"/moons"} className="link">
              Moons
            </Link>
          </li>
          <li>
            <Link to={"/asteroidsandcomets"} className="link">
              Asteroids & Comets
            </Link>
          </li>
        
          <li>
            <div className={style.container_search}>
              <input
                type={"text"}
                className={style.search}
                value={value}
                onChange={(e) => setText(e.target.value)}
              />
              <div className={style.search_icon}></div>
            </div>
          </li>         
        </ul>
      </div>
    </header>
  );
};

export default Header;
