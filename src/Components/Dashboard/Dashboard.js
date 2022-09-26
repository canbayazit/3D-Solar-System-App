import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";
import { arrowDown } from "../../Assets/svg/svg"
const Dashboard = () => {
  const { planets } = useSelector((store) => store.planets);

  return (
    <>
    <div className={style.dashboard}>
      <div className={style.title}>
        <h1>{planets[0].name}</h1>
      </div>
      <div className={style.stats}>
        <div className={style.info}>
          <h4 style={{color:planets[0].color}}>DISTANCE FROM SUN</h4>
          <span>8</span>
        </div>
        <div className={style.info}>
          <h4 style={{color:planets[0].color}}>MOONS</h4>
          <span>{planets[0].moons.units}</span>
        </div>
        <div className={style.info}>
          <h4 style={{color:planets[0].color}}>LENGTH OF YEAR</h4>
          <span>{planets[0].lengthYear}</span>
        </div>        
      </div>
    </div>
    <div className={style.more} style={{backgroundColor:planets[0].color}}>
        <button><span>MORE</span>{arrowDown()}</button>
    </div>
    </>
  );
};

export default Dashboard;
