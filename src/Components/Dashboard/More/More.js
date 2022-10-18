import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { arrowDown } from "../../../Assets/svg/svg";
import style from "./style.module.scss";
import { Link } from 'react-scroll'
const More = () => {
  const {  planetIndex, pathname,planetArray } = useSelector(
    (store) => store.planets
  );
  const location = useLocation();
  const handleMore = (e) => {
    e.preventDefault();
    const target = document.getElementById("more");
    const elDistanceToTop =
      window.pageYOffset + target.getBoundingClientRect().top;
    window.scrollTo(0, elDistanceToTop);
  console.log("window.pageYOffset",window.pageYOffset)
  console.log("target.getBoundingClientRect().top",target.getBoundingClientRect().top)

  };
  
  return (
    <div
      className={style.container}
      style={{
        backgroundColor:
          location.pathname === pathname
            ? planetArray[planetIndex].color
            : "#a9d3ee",
      }}
    >
      <div className={style.more} id={"more"} >
        <Link activeClass="active" to="content" spy={true} smooth={true} offset={-90} duration={500}>
        <span>MORE</span>
        <span>{arrowDown()}</span>
        </Link>
      
      </div>
    </div>
  );
};

export default More;
