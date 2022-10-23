/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { button } from "../../Assets/svg/svg";
import {
  moonTexture,
  starTexture,
  textures,
} from "../../Constant/planet_image/image";
import {
  setClick,
  setEarthIndex,
  setHeaderStatus,
  setImage,
  setIsMoon,
  setMod,
  setPathname,
  setPlanetArray,
  setPlanetIndex,
  setTexture,
} from "../../Store/PlanetSlice";
import { setIsSun } from "../../Store/StarSlice";
import style from "./style.module.scss";

const PlanetCardContainer = () => {
  const [id, setID] = useState();
  const [indexButton, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [buttonID, setButtonID] = useState(1);
  const [moon, setMoon] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const { planets, moons} =
    useSelector((store) => store.planets);
  const { stars } = useSelector((store) => store.stars);
  const navigate = useNavigate();
  const buttonList = [
    {
      id: 1,
      name: "Planets",
      array: planets,
      texture: textures,
      isMoon:false
    },
    {
      id: 2,
      name: "Moons",
      array: moons,
      texture: moonTexture,
      isMoon:true
    },
    {
      id: 3,
      name: "Stars",
      array: stars,
      texture: starTexture,
      isMoon:false
    },
  ];
  const planetButton = (item,index) => {
    setIndex(index)   
    item.isMoon ? setMoon(true) : setMoon(false);
    setActive(false);
  };
 
  useEffect(() => {
    const list = document.getElementById(buttonID).classList;
    list.add(`${style.active}`);
    setActive(true); 
    let prevButton = active ? null : document.getElementById(buttonID);
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
    window.fullScreen && document.exitFullscreen();
  }, []);

  const handleClick = (item,index,image,texture) => {
    dispatch(setHeaderStatus(true));
    dispatch(setMod(false));
    dispatch(setClick(true));
    dispatch(setPlanetIndex(index));
    dispatch(setPlanetArray(buttonList[indexButton].array));
    dispatch(setTexture(texture));
    dispatch(setImage(image));
    moon ? dispatch(setIsMoon(true)) : dispatch(setIsMoon(false));
    item.name==="Earth" &&  dispatch(setEarthIndex(index));
    item.name==="Sun" ? dispatch(setIsSun(true)): dispatch(setIsSun(false));
    let text = `/${item.name}`;
    let result = text.toLowerCase();
    dispatch(setPathname(moon ? "/moons" : result));
    navigate(moon ? "/moons" : result);
    location.pathname==="/moons" && window.scrollTo(0, 0);
  };

  return (
    <div className={style.card_container}>
      <div className={style.main_heading}>
        <h1>Planets in Our Solar System</h1>
      </div>
      <div className={style.button_container} id={"wrapper"}>
        {buttonList.map((item,index) => (
          <button
            key={item.id}
            onClick={() => (planetButton(item,index), setButtonID(item.id))}
            className={`${style.button}`}
            id={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className={style.planets}>
        {buttonList[indexButton].array.map((item, index) => {
          const image = buttonList[indexButton].texture[index].image;
          const texture = buttonList[indexButton].texture[index].texture;
          return (
            <div
              key={item.id}
              className={style.card}
              style={
                id === item.id
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
                <img
                  src={image}
                  className={style.image}
                  style={{ width: moon && "238px" }}
                ></img>
              </div>
              <div className={style.heading}>
                <h2 style={{ color: item.color }}>{item.name}</h2>
                {moon && (
                  <h4 style={{ color: item.color }}>{`(${item.planet})`}</h4>
                )}
              </div>
              <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={style.Button}
                onClick={() => handleClick(item,index,image,texture)}
              >
                <span>{button(item.color, hover)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlanetCardContainer;
