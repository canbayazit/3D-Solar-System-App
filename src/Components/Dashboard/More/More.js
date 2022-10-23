import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { arrowDown } from "../../../Assets/svg/svg";
import style from "./style.module.scss";
import { Link } from 'react-scroll'
import { useMediaQuery } from "@mui/material";
const More = () => {
  const {  planetIndex, pathname,planetArray } = useSelector(
    (store) => store.planets
  );
  const location = useLocation();
  const matches = useMediaQuery("(max-width:1025px)")  
  return (
    <div
      className={style.container}
      style={{
        backgroundColor:
          location.pathname === pathname
            ? planetArray[planetIndex].color
            : "#a9d3ee",
      }}
    >
      <div className={style.more} id={"more"} >
        <Link activeClass="active" to="content" spy={true} smooth={true} offset={matches?-85:-90} duration={500}>
        <span>MORE</span>
        <span>{arrowDown("#000")}</span>
        </Link>
      
      </div>
    </div>
  );
};

export default More;
