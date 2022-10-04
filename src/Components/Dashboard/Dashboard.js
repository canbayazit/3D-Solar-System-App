import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";

const Dashboard = () => {
  const { planets, planetIndex } = useSelector((store) => store.planets);

  return (
    <div className={style.dashboard_container}>
      <div className={style.dashboard}>
        <div className={style.title}>
          <h1>{planets[planetIndex].name}</h1>
        </div>
        <div className={style.stats}>
          <div className={style.info}>
            <h4 style={{ color: planets[planetIndex].color }}>GRAVITY</h4>
            <span>{planets[planetIndex].gravity}</span>
          </div>
          <div className={style.info}>
            <h4 style={{ color: planets[planetIndex].color }}>TEMPERATURE</h4>
            <span>{planets[planetIndex].temperature}</span>
          </div>
          <div className={style.info}>
            <h4 style={{ color: planets[planetIndex].color }}>AXIAL TILT</h4>
            <span>{planets[planetIndex].axialTilt}</span>
          </div>
        </div>
      </div>    
    </div>
  );
};

export default Dashboard;
