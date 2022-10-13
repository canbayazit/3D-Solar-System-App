import React from "react";
import { astronaut, planet } from "../../Assets/svg/svg";
import style from "./style.module.scss";

const NotFound = () => {
  return (
    <div className={style.container}>
      <h1>NOT FOUND !</h1>
      <span className={style.astronaut}>{astronaut()}</span>
      <span className={style.planet}>{planet()}</span>
    </div>
  );
};

export default NotFound;
