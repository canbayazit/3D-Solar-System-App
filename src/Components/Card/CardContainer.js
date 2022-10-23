/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import {
  arrowLeft,
  arrowRight,
  closeButton,
  detailToggle,
  moon,
} from "../../Assets/svg/svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setClick,
  setMod,
  setPlanetArray,
} from "../../Store/PlanetSlice";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { setIsSun } from "../../Store/StarSlice";

const CardContainer = () => {
  const {
    earthIndex,
    cardImage,
    planetIndex,
    click,
    mod,
    pathname,
    planetArray,
    planets, 
  } = useSelector((store) => store.planets);
  const { isSun } = useSelector((store) => store.stars);
  const dispatch = useDispatch();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const openComparison = () => {
    dispatch(setMod(true));
  };
  const closeComparison = () => {
    dispatch(setMod(false));
  };
  const CloseCard = () => {
    dispatch(setPlanetArray(planets));
    dispatch(setClick(false));
    dispatch(setIsSun(false));
    setOpen(false);
  };
  const setToggle = () => {
    setOpen(true);
    dispatch(setClick(true));
  };
  const matches = useMediaQuery("(max-width:1025px)");
  const statList = [
    {
      id: 1,
      value: planetArray[planetIndex].lengthYear,
      info:
        planetIndex <= earthIndex
          ? "EARTH DAYS"
          : isSun
          ? "MILLION EARTH YEARS"
          : "EARTH YEARS",
      label: "Length of Year",
      display: location.pathname === "/moons" ? "none" : "block",
      color: planetArray[planetIndex].color,
    },
    {
      id: 2,
      value: isSun
        ? planetArray[planetIndex].radius
        : planetArray[planetIndex].distance,
      info: isSun ? "KM" : "AU",
      label: isSun ? "Radius" : "Distance from Sun",
      display: location.pathname === "/moons" ? "none" : "block",
      color: planetArray[planetIndex].color,
    },
    {
      id: 3,
      value: null,
      info: planetArray[planetIndex].namesake,
      label: "Namesake",
      display: "block",
      color: "",
    },
    {
      id: 4,
      value:
        location.pathname === "/moons"
          ? ""
          : isSun
          ? planetArray[planetIndex].planets.units
          : planetArray[planetIndex].moons.units,
      info: moon(),
      label: isSun ? "Planets" : "Moons",
      display: location.pathname === "/moons" ? "none" : "block",
      color: planetArray[planetIndex].color,
    },
    {
      id: 5,
      value:
        location.pathname === "/moons" ? planetArray[planetIndex].planet : "",
      info: null,
      label: "Planet's Moon",
      display: location.pathname === "/moons" ? "block" : "none",
      color: planetArray[planetIndex].color,
    },
  ];

  useEffect(() => {
    pathname !== "/solarsystem" &&
      matches === false &&
      dispatch(setClick(true));
    setOpen(false);
  }, []);

  return (
    <>
      <div
        className={style.comparison_mode_container}
        style={{
          display: mod ? "flex" : "none",
          top: pathname !== "/solarsystem" ? `${85}px` : "0",
        }}
      >
        <button
          className={style.comparison_mode_button}
          onClick={() => closeComparison()}
        >
          <span>X</span> Close Comparison Mode
        </button>
      </div>
      <div
        className={style.detail_toggle_container}
        style={{
          display:
            pathname === "/solarsystem"
              ? click
                ? matches
                  ? open
                    ? "none"
                    : "flex"
                  : "none"
                : "none"
              : matches
              ? open
                ? "none"
                : "flex"
              : "none",
        }}
      >
        <h1>{planetArray[planetIndex].name.toUpperCase()}</h1>
        <button className={style.detail_toggle} onClick={() => setToggle()}>
          {detailToggle()}
        </button>
      </div>
      <div
        className={
          location.pathname !== "/solarsystem"
            ? style.card_container
            : style.card_container_3d
        }
        style={
          location.pathname !== "/solarsystem"
            ? click
              ? matches
                ? { display: open ? (mod ? "none" : "block") : "none" }
                : { display: mod ? "none" : "block" }
              : { display: "none" }
            : click
            ? matches
              ? { display: open ? (mod ? "none" : "block") : "none" }
              : { display: mod ? "none" : "block", height: "100%" }
            : { display: "none" }
        }
      >
        <div className={style.close_button_container}>
          <button className={style.close_button} onClick={() => CloseCard()}>
            {closeButton()}
          </button>
        </div>
        <div className={style.image_container}>
          <img
            src={cardImage}
            className={style.image}
            style={{ width: location.pathname === "/moons" ? "63%" : "85%" }}
          />
        </div>
        <div className={style.description_container}>
          <p className={style.description}>
            {planetArray[planetIndex].description}
          </p>
        </div>
        <div className={style.stats_container}>
          {statList.map((item, index) => {
            return (
              <div
                key={item.id}
                className={style.stats}
                style={{ display: item.display }}
              >
                <div className={style.stat_item} style={{ color: item.color }}>
                  <span className={style.value}>{item.value}</span>
                  <span
                    className={style.info}
                    style={{
                      fontSize: item.label === "Namesake" ? "0.35em" : "0.4em",
                      marginLeft: item.label === "Namesake" && "-10px",
                    }}
                  >
                    {item.info}
                  </span>
                </div>
                <div className={style.label}>{item.label}</div>
              </div>
            );
          })}
        </div>
        <div className={style.button_container}>
          <button className={style.button} onClick={() => openComparison()}>
            <span className={style.left}>
              {arrowLeft(planetArray[planetIndex].color)}
            </span>
            <span>COMPARE SIZE</span>
            <span className={style.right}>
              {arrowRight(planetArray[planetIndex].color)}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
