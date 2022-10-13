/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
// import image from "../../../Assets/img/solar_system_img.jpg";
import { useDispatch } from "react-redux";
import { setClick, setHeaderStatus, setPathname } from "../../../Store/PlanetSlice";
import { useNavigate } from "react-router-dom";
const HomeSection = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setHeaderStatus(false));
  }, []);
  
  const handleClick = () => {
    navigate("/solarsystem");
    dispatch(setPathname("/solarsystem"));
    dispatch(setClick(false));
  }

  return (
    <div className={style.container}>
      {/* <img className={style.img} src={image}></img> */}
      <div className={style.button_container} onClick={()=>handleClick()}>
        <button  className={style.explore_button}>EXPLORE</button>
        {/* <span className={style.explore_button}>
          {ExploreButton()} <span className={style.text}>{Text()}</span>
        </span> */}
      </div>
    </div>
  );
};

export default HomeSection;
