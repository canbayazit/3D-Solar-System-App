import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";
import { arrowDown } from "../../Assets/svg/svg"
const Dashboard = () => {
  const { planets,planetIndex } = useSelector((store) => store.planets);

  return (
   <div className={style.dashboard_container}>
    <div className={style.dashboard}>
      <div className={style.title}>
        <h1>{planets[planetIndex].name}</h1>
      </div>
      <div className={style.stats}>
        <div className={style.info}>
          <h4 style={{color:planets[planetIndex].color}}>DISTANCE FROM SUN</h4>
          <span>8</span>
        </div>
        <div className={style.info}>
          <h4 style={{color:planets[planetIndex].color}}>MOONS</h4>
          <span>{planets[planetIndex].moons.units}</span>
        </div>
        <div className={style.info}>
          <h4 style={{color:planets[planetIndex].color}}>LENGTH OF YEAR</h4>
          <span>{planets[planetIndex].lengthYear}</span>
        </div>        
      </div>
    </div>
    <div className={style.more} style={{backgroundColor:planets[planetIndex].color}}>
        <a href="#content"><span>MORE</span>{arrowDown()}</a>
    </div>
    </div>
  );
};

export default Dashboard;
