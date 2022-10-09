import { useMediaQuery } from "@mui/material";
import React from "react";
import Dashboard from "../../Dashboard/Dashboard";
import useScroll from "../../Function/ScrollFunction";
import style from "./style.module.scss";

const PlanetMainSection = () => {
  const matches = useMediaQuery('(max-width:835px)');
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
      <Dashboard/>
        
    </>
  );
};

export default PlanetMainSection;
