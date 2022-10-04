import React from "react";
import { useSelector } from "react-redux";
import { arrowDown } from "../../../Assets/svg/svg";
import style from "./style.module.scss";

const More = () => {
  const { planets, planetIndex, isPlanet } = useSelector(
    (store) => store.planets
  );
  return (
    <div
      className={style.more}
      style={
        isPlanet
          ? { backgroundColor: planets[planetIndex].color }
          : { backgroundColor: "#a9d3ee" }
      }
    >
      <a href={"#content"}>
        <span>MORE</span>
        {arrowDown()}
      </a>
    </div>
  );
};

export default More;
