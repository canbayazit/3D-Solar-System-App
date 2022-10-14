import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import solarSystem from "../../../Assets/img/solarsystemm.png";
import { useDispatch, useSelector } from "react-redux";
import { moonTexture, starTexture, textures } from "../../../Constant/planet_image/image";
import { useNavigate } from "react-router-dom";
import { button } from "../../../Assets/svg/svg";
import {
  getPlanets,
  setClick,
  setHeaderStatus,
  setIsMoon,
  setIsPlanet,
  setPathname,
  setPlanetIndex,
} from "../../../Store/PlanetSlice";
import { getStars, setIsSun } from "../../../Store/StarSlice";
const HomeContent = () => {
  const [id, setID] = useState();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { planets,moons, loading, isPlanet, isMoon} = useSelector((store) => store.planets);
  const { stars, isSun } = useSelector((store) => store.stars);
  const navigate = useNavigate();

  const planetButton = () => {
    dispatch(setIsPlanet(true));
    dispatch(setIsSun(false));
    dispatch(setIsMoon(false));
  };
  const sunButton = () => {
    dispatch(setIsPlanet(false));
    dispatch(setIsSun(true));
    dispatch(setIsMoon(false));
  };
  const moonButton = () => {
    dispatch(setIsPlanet(false));
    dispatch(setIsSun(false));
    dispatch(setIsMoon(true));
  };

  useEffect(() => {
    const list = document.getElementById("planets").classList;
    list.add(`${style.active}`);
    setActive(true);
    dispatch(setIsSun(false));
    if (loading === false) {
      dispatch(getPlanets());
      dispatch(getStars());
    }
  }, []);

  useEffect(() => {
    dispatch(setIsPlanet(true));
    let prevButton = active ? null : document.getElementById("planets");
    console.log("prevButton", prevButton);
    const wrapper = document.getElementById("wrapper");
    wrapper.addEventListener("click", (e) => {
      const isButton = e.target.nodeName === "BUTTON";
      if (!isButton) {
        return;
      }
      e.target.classList.add(`${style.active}`);
      prevButton.classList.remove(`${style.active}`);
      prevButton = e.target;
    });
  }, []);
  console.log("isSun homecontent", isSun);
  console.log("isPlanet homecontent", isPlanet);

  const handleClick = (item, index) => {
    dispatch(setHeaderStatus(true));
    dispatch(setClick(true));
    dispatch(setPlanetIndex(index));
    let text = `/${item.name}`;
    let result = text.toLowerCase();
    dispatch(setPathname(result));
    navigate(result);
  };

  return (
    <div className={style.main} id="content">
      <div className={style.content}>
        <fieldset className={style.fieldset}>
          <legend>Our Solar System</legend>
          <h2>Why is it Called the Solar System? </h2>
          <p className={style.fieldset_description}>
            There are many planetary systems like ours in the universe, with
            planets orbiting a host star. Our planetary system is called “the
            solar system” because we use the word “solar” to describe things
            related to our star, after the Latin word for Sun, "solis."{" "}
          </p>
        </fieldset>
        <div className={style.solar_system_description}>
          <img src={solarSystem} className={style.solar_system_img}></img>
          <p className={style.description}>
            Our solar system consists of our star, the Sun, and everything bound
            to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter,
            Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of
            moons; and millions of asteroids, comets, and meteoroids.
          </p>
        </div>
      </div>
      <div className={style.card_container}>
        <div className={style.main_heading}>
          <h1>Planets in Our Solar System</h1>
        </div>
        <div className={style.button_container} id={"wrapper"}>
          <button
            onClick={() => planetButton(isPlanet)}
            className={`${style.button} `}
            id={"planets"}
          >
            Planets
          </button>
          <button
            onClick={() => sunButton(isSun)}
            className={`${style.button} `}
          >
            Stars
          </button>
          <button
            onClick={() => moonButton(isMoon)}
            className={`${style.button} `}
          >
            Moons
          </button>
        </div>
        <div className={style.planets}>
          {(isPlanet ? planets : isSun ? stars : moons).map((item, index) => {
            const image = isSun
              ? starTexture[index].image
              : isPlanet ? textures[index].image : moonTexture[index].image;
            return (
              <div
                key={item.id}
                className={style.card}
                style={
                  id === index + 1
                    ? {
                        border: `1px solid ${item.color}`,
                        boxShadow: `0 0 5px 5px ${item.color}33,
                                    0 0 10px 10px ${item.color}22,
                                    0 0 20px 20px ${item.color}11,
                                  
                                    0 0 5px ${item.color},
                                    0 0 10px ${item.color}`,
                      }
                    : { border: `1px solid transparent` }
                }
                onMouseEnter={() => setID(item.id)}
                onMouseLeave={() => setID(null)}
              >
                <div className={style.image_container}>
                  <img src={image} className={style.image} style={{width:isMoon && "238px"}}></img>
                </div>
                <div className={style.heading}>
                  <h2 style={{ color: item.color }}>{item.name}</h2>
                </div>
                <div
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  className={style.Button}
                  onClick={() => handleClick(item, index)}
                >
                  <span>{button(item.color, hover)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
