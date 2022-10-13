import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import { arrowButtonLeft, arrowButtonRight } from "../../Assets/svg/svg";
import style from "./style.module.scss";

const Dashboard = () => {
  const { planets, planetIndex, pathname } = useSelector(
    (store) => store.planets
  );
  const { stars } = useSelector((store) => store.stars);
  const [color, setColor] = useState();
  const location = useLocation();
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          display: "flex",
          position: "absolute",
          left: "0",
          top: "0",
          marginLeft:"-20px",
          opacity:.7,
        }}
        onClick={onClick}
      >
        {arrowButtonLeft()}
      </div>
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: "0",
          top: "0",
          marginRight:"-20px",
          justifyContent: "flex-end",
          opacity:.7
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
        value: (pathname === "/sun" ? stars : planets)[planetIndex].gravity,
      },
      {
        id: 2,
        name: "temperature",
        value: (pathname === "/sun" ? stars : planets)[planetIndex].temperature,
      },
      {
        id: 3,
        name: "axialTilt",
        value: (pathname === "/sun" ? stars : planets)[planetIndex].axialTilt,
      },
      {
        id: 4,
        name: pathname === "/sun" ? "planets":"moons",
        value: pathname === "/sun" ?  stars[planetIndex].planets.units : (planets[planetIndex].moons.units),
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
  // console.log("data",data[0].heading)
  useEffect(() => {
    let color =
      location.pathname === pathname
        ? (pathname === "/sun" ? stars : planets)[planetIndex].color
        : "#a9d3ee";
    setColor(color);
  }, [
    color,
    setColor,
    pathname,
    location.pathname,
    stars,
    planets,
    planetIndex,
  ]);

  return (
    <div className={style.dashboard_container}>
      <div className={style.dashboard}>
        <div className={style.title}>
          <h1>
            {location.pathname === pathname &&
              (pathname === "/sun" ? stars : planets)[planetIndex].name}
            {location.pathname === "/planets" && "Solar System"}
          </h1>
        </div>
        <div className={style.stats}>
          <Slider {...settings}>
            {(location.pathname === "/planets" ? data.heading : data.stats).map(
              (item, index) => (
                <div key={item.id} className={style.info}>
                  <h4 style={{ color: color }}>{item.name.toUpperCase()}</h4>
                  <span>{item.value}</span>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
