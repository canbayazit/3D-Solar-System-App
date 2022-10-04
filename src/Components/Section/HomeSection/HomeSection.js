import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import image from "../../../Assets/img/solar_system_img.jpg";
import { useDispatch } from "react-redux";
import { setHeaderStatus, setIsPlanet } from "../../../Store/PlanetSlice";
import { button, ExploreButton, Text } from "../../../Assets/svg/svg";
import { useNavigate } from "react-router-dom";
const HomeSection = () => {
  const [status, setStatus] = useState(false);
  const [hover, setHover] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setHeaderStatus(false));
    setStatus(true);
  }, []);
  
  const handleClick = () => {
    navigate("/solarsystem");
    dispatch(setIsPlanet(false));
  }

  return (
    <div className={style.container}>
      <img className={style.img} src={image}></img>
      <div className={style.button_container} onClick={()=>handleClick()}>
        <button  className={style.explore_button}>EXPLORE</button>
        {/* <span className={style.explore_button}>
          {ExploreButton()} <span className={style.text}>{Text()}</span>
        </span> */}
      </div>
    </div>
  );
};

export default HomeSection;
