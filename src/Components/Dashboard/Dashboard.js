import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";

const Dashboard = () => {
  const { planets, planetIndex, pathname } = useSelector(
    (store) => store.planets
  );
  const {stars } = useSelector((store) => store.stars);
  const [color, setColor] = useState();
  useEffect(() => {
    let color=(pathname === '/sun' ? stars : planets)[planetIndex].color
    setColor(color);

  }, [color,setColor,pathname])
      


  return (
    <div className={style.dashboard_container}>
      <div className={style.dashboard}>
        <div className={style.title}>
          <h1>{(pathname === '/sun' ? stars : planets)[planetIndex].name}</h1>
        </div>
        <div className={style.stats}>
          <div className={style.info}>
            <h4 style={{ color: color }}>GRAVITY</h4>
            <span>{(pathname === '/sun' ? stars : planets)[planetIndex].gravity}</span>
          </div>
          <div className={style.info}>
            <h4 style={{ color: color }}>TEMPERATURE</h4>
            <span>{(pathname === '/sun' ? stars : planets)[planetIndex].temperature}</span>
          </div>
          <div className={style.info}>
            <h4 style={{ color: color }}>AXIAL TILT</h4>
            <span>{(pathname === '/sun' ? stars : planets)[planetIndex].axialTilt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
