/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import { arrowButtonLeft, arrowButtonRight } from "../../Assets/svg/svg";
import { setHeaderStatus, setPlanetArray, setPlanetIndex, setSpeed } from "../../Store/PlanetSlice";
import style from "./style.module.scss";

const Dashboard = () => {
  const { planets,planetIndex, pathname, planetArray } = useSelector(
    (store) => store.planets
  );
  const [color, setColor] = useState();
  const [value, setValue] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (location.pathname==="/") {
      dispatch(setHeaderStatus(false));
      dispatch(setPlanetArray(planets));
      dispatch(setPlanetIndex(0));
      dispatch(setSpeed(true));
    }  
  }, []);

  useEffect(() => {
    let color =
      location.pathname === pathname
        ? planetArray[planetIndex].color
        : "#a9d3ee";
    setColor(color);
    location.pathname === pathname ? setValue(false) : setValue(true);
  }, [location.pathname, pathname, planetArray, planetIndex]);

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        style={{
          display: "flex",
          position: "absolute",
          left: "0",
          top: "0",
          marginLeft: "-20px",
          opacity: 0.7,
        }}
        onClick={onClick}
      >
        {arrowButtonLeft()}
      </div>
    );
  }
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: "0",
          top: "0",
          marginRight: "-20px",
          justifyContent: "flex-end",
          opacity: 0.7,
        }}
        onClick={onClick}
      >
        {arrowButtonRight()}
      </div>
    );
  }

  const data = {
    heading: [
      {
        id: 1,
        name: "Planets",
        value: "8",
      },
      {
        id: 2,
        name: "Moons",
        value: "200+",
      },
      {
        id: 3,
        name: "Asteroids",
        value: "1.113.527",
      },
      {
        id: 4,
        name: "Comets",
        value: "3.743",
      },
    ],
    stats: [
      {
        id: 1,
        name: "gravity",
        value:value ? "" : planetArray[planetIndex].gravity,
      },
      {
        id: 2,
        name: "temperature",
        value: value ? "" :planetArray[planetIndex].temperature,
      },
      {
        id: 3,
        name: "axialTilt",
        value: value ? "" :planetArray[planetIndex].axialTilt,
      },
      {
        id: 4,
        name:
          pathname === "/moons"
            ? "PLANET'S MOON"
            : pathname === "/sun"
            ? "planets"
            : "moons",
        value:
        value ? "" :location.pathname === "/sun"
            ? planetArray[planetIndex].planets.units
            : location.pathname === "/moons"
            ? planetArray[planetIndex].planet
            : planetArray[planetIndex].moons.units,
      },
    ],
  };
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          adaptiveHeight: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 835,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          adaptiveHeight: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          adaptiveHeight: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  

  return (
    <div className={style.dashboard_container}>
      <div className={style.dashboard}>
        <div className={style.title}>
          <h1>
            {location.pathname === pathname
              ? planetArray[planetIndex].name
              : "Solar System"}
          </h1>
        </div>
        <div className={style.stats}>
          <Slider {...settings}>
            {(location.pathname !== pathname
              ? data.heading
              : location.pathname === '/'
              ? data.heading
              : data.stats
            ).map((item) => (
              <div key={item.id} className={style.info}>
                <h4 style={{ color: color }}>{item.name.toUpperCase()}</h4>
                <span>{item.value}</span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
