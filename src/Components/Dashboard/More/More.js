import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { arrowDown } from "../../../Assets/svg/svg";
import style from "./style.module.scss";

const More = () => {
  const { planets, planetIndex, pathname } = useSelector(
    (store) => store.planets
  );
  const { stars } = useSelector((store) => store.stars);
  const location = useLocation();
  const handleMore = (e) => {
    e.preventDefault();
    const target = document.getElementById("more");
    const elDistanceToTop =
      window.pageYOffset + target.getBoundingClientRect().top;
    window.scrollTo(0, elDistanceToTop);
  };
  return (
    <div
      className={style.container}
      style={{
        backgroundColor:
          location.pathname === pathname
            ? pathname === "/sun"
              ? stars[planetIndex].color
              : planets[planetIndex].color
            : "#a9d3ee",
      }}
    >
      <div className={style.more} onClick={(e) => handleMore(e)}>
        <span id={"more"}>MORE</span>
        {arrowDown()}
      </div>
    </div>
  );
};

export default More;
