import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import style from "./style.module.scss";

const Dashboard = () => {
  const { planets, planetIndex, pathname } = useSelector(
    (store) => store.planets
  );
  const { stars } = useSelector((store) => store.stars);
  const [color, setColor] = useState();
  const location = useLocation();
  const data = {
    heading: [
      {
        id: 1,
        name: "Planets",
        value: "8",
      },
      {
        id: 2,
        name: "Moons",
        value: "200+",
      },
      {
        id: 3,
        name: "Asteroids",
        value: "1.113.527",
      },
      {
        id: 4,
        name: "Comets",
        value: "3.743",
      },
    ],
    stats: [
      {
        id: 1,
        name: "gravity",
        value: (pathname === "/sun" ? stars : planets)[planetIndex].gravity,
      },
      {
        id: 2,
        name: "temperature",
        value: (pathname === "/sun" ? stars : planets)[planetIndex].temperature,
      },
      {
        id: 3,
        name: "axialTilt",
        value: (pathname === "/sun" ? stars : planets)[planetIndex].axialTilt,
      },
      {
        id: 4,
        name: "moons",
        value: (pathname === "/sun" ? stars : planets)[planetIndex].moons.units,
      },
    ],
  };

  // console.log("data",data[0].heading)
  useEffect(() => {
    let color =
      location.pathname === pathname
        ? (pathname === "/sun" ? stars : planets)[planetIndex].color
        : "#a9d3ee";
    setColor(color);
  }, [color, setColor, pathname, location.pathname, stars, planets, planetIndex]);

  return (
    <div className={style.dashboard_container}>
      <div className={style.dashboard}>
        <div className={style.title}>
          <h1>
            {location.pathname === pathname &&
              (pathname === "/sun" ? stars : planets)[planetIndex].name}
            {location.pathname === "/planets" && "Solar System"}
          </h1>
        </div>
        <div className={style.stats}>
          {(location.pathname === "/planets" ? data.heading : data.stats).map(
            (item, index) => {
              return (
                <div key={item.id} className={style.info}>
                  <h4 style={{ color: color }}>{item.name.toUpperCase()}</h4>
                  <span>{item.value}</span>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
