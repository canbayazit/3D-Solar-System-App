import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
const Header = () => {
  const [value, setText] = useState("");

  return (
    <div className={style.container}>
      <div className={style.left_header}>
        <div className={style.page_logo}></div>
        <div className={style.heading}>
          <h4>EXPLORE THE SOLAR SYSTEM</h4>
        </div>
      </div>
      <div className={style.right_header}>
        <div className={style.orrery}>
          <div className={style.outer_circle}>
            <div className={style.outer_dot}>
              <div className={style.inner_circle}>
              <div className={style.innet_dot}>
              <div className={style.sun}></div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <Link to={"/solarsystem"} className="link">Solar System</Link>{" "}
          </li>
          <li>
            <Link to={"/planets"} className="link">Planets</Link>
          </li>
          <li>
            <Link to={"/moons"} className="link">Moons</Link>
          </li>
          <li>
            <Link to={"/asteroidsandcomets"} className="link">Asteroids & Comets</Link>
          </li>
          <li>
            <Link to={"/store"} className="link">Store</Link>
          </li>
          <li>
            <div className={style.search_container}>
              <input
                type={"text"}
                className={style.search}
                value={value}
                onChange={(e) => setText(e.target.value)}
              />
              <div className={style.search_icon}>

              </div>
            </div>
          </li>
          <li>
            <Link to={"/user"} className="link">User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
