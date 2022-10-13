import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import planet from "../../../Assets/img/planets.jpg";
import { useDispatch, useSelector } from "react-redux";
import { starTexture, textures } from "../../../Constant/planet_image/image";
import { useNavigate } from "react-router-dom";
import { button } from "../../../Assets/svg/svg";
import {
  getPlanets,
  setClick,
  setHeaderStatus,
  setPathname,
  setPlanetIndex,
} from "../../../Store/PlanetSlice";
import { getStars, setIsSun } from "../../../Store/StarSlice";
const PlanetContent = () => {
  const [id, setID] = useState();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { planets, loading, isPlanet } = useSelector((store) => store.planets);
  const { stars, isSun } = useSelector((store) => store.stars);
  const navigate = useNavigate();

  const handleButton = (check) => {
    check === isPlanet && dispatch(setIsSun(false));
    check === isSun && dispatch(setIsSun(true));
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
    <div className={style.main} >
      <div className={style.content}>
        <fieldset className={style.fieldset}>
          <legend>Our Solar System</legend>
          <h2>What is a Planet?</h2>
          <p className={style.fieldset_description}>
            This seemingly simple question doesn't have a simple answer.
            Everyone knows that Earth, Mars and Jupiter are planets. But both
            Pluto and Ceres were once considered planets until new discoveries
            triggered scientific debate about how to best describe them—a
            vigorous debate that continues to this day.{" "}
          </p>
        </fieldset>
        <div className={style.description_container}>
          <p className={style.description}>
            The most recent definition of a planet was adopted by the
            International Astronomical Union in 2006. It says a planet must do
            three things:
          </p>
          <ol>
            <li>
              It must orbit a star (in our cosmic neighborhood, the Sun).{" "}
            </li>
            <li>
              It must be big enough to have enough gravity to force it into a
              spherical shape.
            </li>
            <li>
              It must be big enough that its gravity cleared away any other
              objects of a similar size near its orbit around the Sun.
            </li>
          </ol>
        </div>
        <div className={style.planets_img_container}>
          <img src={planet} className={style.planets_img}/>
        </div>
      </div>
      <div className={style.card_container}>
        <div className={style.main_heading}>
          <h1>Planets in Our Solar System</h1>
        </div>
        <div className={style.button_container} id={"wrapper"}>
          <button
            onClick={() => handleButton(isPlanet)}
            className={`${style.button} `}
            id={"planets"}
          >
            Planets
          </button>
          <button
            onClick={() => handleButton(isSun)}
            className={`${style.button} `}
          >
            Stars
          </button>
        </div>
        <div className={style.planets}>
          {(isSun ? stars : planets).map((item, index) => {
            const image = isSun
              ? starTexture[index].image
              : textures[index].image;
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
                  <img src={image} className={style.image} ></img>
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

export default PlanetContent;
