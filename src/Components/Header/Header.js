import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeButton, hamburgerMenu } from "../../Assets/svg/svg";
import {
  setClick,
  setHeaderStatus,
  setIsMoon,
  setMod,
  setPathname,
  setPlanetIndex,  
  setPlanetArray,
  setTexture,
  setImage
} from "../../Store/PlanetSlice";
import style from "./style.module.scss";
import useMediaQuery from "@mui/material/useMediaQuery";
import { setIsSun } from "../../Store/StarSlice";
import { moonTexture } from "../../Constant/planet_image/image";
const Header = () => {
  const [isScrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  window.addEventListener("scroll", () => {
    window.scrollY >= 80 ? setScrolling(true) : setScrolling(false);
  });
  const { headerStatus,moons,planets } = useSelector((store) => store.planets);
  const headerList = [
    {
      id: 1,
      name: "3D Solar System",
      link: "/solarsystem",
    },
    {
      id: 2,
      name: "Planets",
      link: "/planets",
    },
    {
      id: 3,
      name: "Moons",
      link: "/moons",
    },
    {
      id: 4,
      name: "Asteroids & Comets",
      link: "/asteroids-comets",
    },
  ];
  const handleLogoClick=()=>{
    dispatch(setMod(false));
    dispatch(setClick(false));
    dispatch(setIsSun(false));
    dispatch(setPlanetIndex(0)); 
    dispatch(setPlanetArray(planets));
    dispatch(setMod(false));
  }
  const handleClick = (pathname) => {
    if (pathname === "/solarsystem") {
      dispatch(setMod(false));
      dispatch(setClick(false));
      dispatch(setPlanetIndex(0)); 
      dispatch(setIsMoon(false)); 
      dispatch(setIsSun(false)); 
      dispatch(setPlanetArray(planets));
      dispatch(setPathname("/solarsystem"));
    } else if(pathname === "/moons"){ 
      dispatch(setMod(false));
      dispatch(setPlanetIndex(0)); 
      dispatch(setIsMoon(true));
      dispatch(setIsSun(false));
      dispatch(setHeaderStatus(true));
      dispatch(setPathname("/moons"));
      dispatch(setPlanetArray(moons));
      dispatch(setTexture(moonTexture[0].texture));
      dispatch(setImage(moonTexture[0].image));
      dispatch(setClick(true));
    }else if(pathname === "/planets"){
      pathname === "/planets" && dispatch(setPlanetArray(planets));
      dispatch(setPlanetIndex(0)); 
      dispatch(setMod(false));
      dispatch(setClick(false));
      dispatch(setIsSun(false));
    }
  };

  const openMenu = () => {
    setOpen(!open);
  };
  const matches = useMediaQuery("(max-width:1025px)");

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
              <Link to={"/"} onClick={() => handleLogoClick()}>
                EXPLORE
                <span>
                  <br /> THE SOLAR SYSTEM
                </span>
              </Link>
            </h4>
          </div>
        </div>
        <div className={style.right_header_hamburger}>
          <button onClick={() => openMenu()}>
            {open ? closeButton() : hamburgerMenu()}
          </button>
        </div>
      </div>

      <div
        className={style.right_header}
        style={{ display: matches ? (open ? "flex" : "none") : "flex" }}
      >
        <ul>
          {headerList.map((item, index) => (
            <li key={item.id}>
              {item.name === "3D Solar System" ? (
                <>
                  <div>
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
                  </div>
                  <div>
                    <Link to={item.link} onClick={() => handleClick(item.link)}>
                      {item.name}
                    </Link>
                  </div>
                </>
              ) : (
                <Link to={item.link} onClick={() => handleClick(item.link)}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
