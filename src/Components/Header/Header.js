import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeButton, hamburgerMenu } from "../../Assets/svg/svg";
import { setClick, setMod, setPathname } from "../../Store/PlanetSlice";
import style from "./style.module.scss";
import useMediaQuery from '@mui/material/useMediaQuery';
const Header = () => {
  const [isScrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  window.addEventListener("scroll", () => {
    window.scrollY >= 80 ? setScrolling(true) : setScrolling(false);
  });
  const { headerStatus } = useSelector((store) => store.planets);
  const handleClick = () => {
    dispatch(setMod(false));
    dispatch(setClick(false));
    dispatch(setPathname(""));
  };
  const handle3DClick = () => {
    dispatch(setMod(false));
    dispatch(setClick(false));
    dispatch(setPathname("/solarsystem"));
  };
  const openMenu = () => {
    setOpen(!open);
  };
  const matches = useMediaQuery('(max-width:1025px)');

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
              backgroundColor: headerStatus
                ? "#000"
                : open
                ? "#000"
                : "#00000000",
              borderBottom: headerStatus
                ? " 1px solid #3b3b3b"
                : " 1px solid #3b3b3b00",
              transitionDuration: open ? "0s" : "1s",
            }
      }
    >
      <div className={style.left_header}>
        <div className={style.left_header_icon}>
          <div className={style.page_logo}></div>
          <div className={style.heading}>
            <h4>
              <Link to={"/"} onClick={() => handleClick()}>
                EXPLORE
                <span>
                  <br /> THE SOLAR SYSTEM
                </span>
              </Link>
            </h4>
          </div>
        </div>
        <div className={style.right_header_hamburger}>
          <button onClick={() => openMenu()}>{open ? closeButton() :hamburgerMenu()}</button>
        </div>
      </div>

      <div
        className={style.right_header}
        style={{ display: matches ? open ? "flex" : "none" : "flex"}}
      >
        <ul>
          <li>
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
            <div>
              <Link to={"/solarsystem"} onClick={() => handle3DClick()}>
                3D Solar System
              </Link>
            </div>
          </li>
          <li>
            <Link to={"/planets"} onClick={() => handleClick()}>
              Planets
            </Link>
          </li>
          <li>
            <Link to={"/moons"} onClick={() => handleClick()}>
              Moons
            </Link>
          </li>
          <li>
            <Link to={"/asteroidsandcomets"} onClick={() => handleClick()}>
              Asteroids & Comets
            </Link>
          </li>
        </ul>
      </div>    
    </header>
  );
};

export default Header;
