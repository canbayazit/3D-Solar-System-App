import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { starTexture } from "../../../Constant/planet_image/image";
import { setImage, setPathname, setPlanetArray, setPlanetIndex, setTexture } from "../../../Store/PlanetSlice";
import { setIsSun } from "../../../Store/StarSlice";
import style from "./style.module.scss";

const SunContent = () => {
  const { stars } = useSelector((store) => store.stars);
      const dispatch=useDispatch();
      console.log("girdi sun aa")
      const location=useLocation();
    useEffect(() => {       
      dispatch(setPlanetArray(stars));
      dispatch(setPlanetIndex(0));
      dispatch(setIsSun(true));
      dispatch(setTexture(starTexture[0].texture));
      dispatch(setImage(starTexture[0].image));    
      dispatch(setPathname(location.pathname));
      console.log("girdi sun")
    }, [dispatch, location.pathname, stars]);


  return (
    <div className={style.container} id="content">
      <fieldset className={style.fieldset}>
        <legend>Our Solar System</legend>
        <h2>Sun</h2>
        <p className={style.fieldset_description}>
          Our Sun is a 4.5 billion-year-old star – a hot glowing ball of
          hydrogen and helium at the center of our solar system. The Sun is
          about 93 million miles (150 million kilometers) from Earth, and
          without its energy, life as we know it could not exist here on our
          home planet.{" "}
        </p>
      </fieldset>
      <div className={style.solar_system_description}>
        <p className={style.description}>
          The Sun is the largest object in our solar system. The Sun’s volume
          would need 1.3 million Earths to fill it. Its gravity holds the solar
          system together, keeping everything from the biggest planets to the
          smallest bits of debris in orbit around it. The hottest part of the
          Sun is its core, where temperatures top 27 million degrees Fahrenheit
          (15 million degrees Celsius). The Sun’s activity, from its powerful
          eruptions to the steady stream of charged particles it sends out,
          influences the nature of space throughout the solar system.
        </p>
      </div>
    </div>
  );
};

export default SunContent;
