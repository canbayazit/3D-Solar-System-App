/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import style from "./style.module.scss";
import { useDispatch} from "react-redux";
import { setClick, setPathname } from "../../../Store/PlanetSlice";
import { useNavigate } from "react-router-dom";
const HomeSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const handleClick = () => {
    navigate("/solarsystem");
    dispatch(setPathname("/solarsystem"));
    dispatch(setClick(false));
  }

  return (
    <div className={style.container}>
      <div className={style.button_container} onClick={()=>handleClick()}>
        <button  className={style.explore_button}>EXPLORE</button>     
      </div>
    </div>
  );
};

export default HomeSection;
