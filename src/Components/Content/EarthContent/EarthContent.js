/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { textures } from "../../../Constant/planet_image/image";
import { setImage, setPlanetArray, setPlanetIndex, setTexture } from "../../../Store/PlanetSlice";
import { setIsSun } from "../../../Store/StarSlice";
import style from "./style.module.scss";

const EarthContent = () => {
  const { planets } = useSelector((store) => store.planets);
  const dispatch=useDispatch();
  const location = useLocation();
  useEffect(() => {
    let i = 0;
    while (i < planets.length) {
      let text = location.pathname.slice(1);
      if (planets[i].name.toLowerCase()===text) {
           dispatch(setPlanetIndex(i));
           dispatch(setPlanetArray(planets));
           dispatch(setTexture(textures[i].texture));
           dispatch(setImage(textures[i].image));
           dispatch(setIsSun(false));
           break;
      }
      i++;
    }
  }, [])
  
  
  return (
    <div className={style.container} id="content">
      <fieldset className={style.fieldset}>
        <legend>Our Solar System</legend>
        <h2>Earth</h2>
        <p className={style.fieldset_description}>
          Our home planet is the third planet from the Sun, and the only place
          we know of so far that’s inhabited by living things.{" "}
        </p>
      </fieldset>
      <div className={style.solar_system_description}>
        <p className={style.description}>
          While Earth is only the fifth largest planet in the solar system, it
          is the only world in our solar system with liquid water on the
          surface. Just slightly larger than nearby Venus, Earth is the biggest
          of the four planets closest to the Sun, all of which are made of rock
          and metal. The name Earth is at least 1,000 years old. All of the
          planets, except for Earth, were named after Greek and Roman gods and
          goddesses. However, the name Earth is a Germanic word, which simply
          means “the ground.”
        </p>
      </div>
    </div>
  );
};

export default EarthContent;
