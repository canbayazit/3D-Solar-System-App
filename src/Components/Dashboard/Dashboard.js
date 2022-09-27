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
          <h4 style={{color:planets[planetIndex].color}}>GRAVITY</h4>
          <span>{planets[planetIndex].gravity}</span>
        </div>
        <div className={style.info}>
          <h4 style={{color:planets[planetIndex].color}}>TEMPERATURE</h4>
          <span>{planets[planetIndex].temperature}</span>          
          {/* <span>{planets[planetIndex].volume.number}<span className={style.ten}> x 10</span><span className={style.exponent}>{planets[planetIndex].mass.exponent}</span></span> */}

        </div>
        <div className={style.info}>
          <h4 style={{color:planets[planetIndex].color}}>AXIAL TILT</h4>
          <span>{planets[planetIndex].axialTilt}</span>         
          {/* <span>{planets[planetIndex].surfaceArea.number}<span className={style.ten}> x 10</span><span className={style.exponent}>{planets[planetIndex].mass.exponent}</span></span> */}

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
