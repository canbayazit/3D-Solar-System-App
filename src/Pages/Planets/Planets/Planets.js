import React, { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import style from "./style.module.scss";
import Footer from "../../../Components/Footer/Footer";
import HomeContent from "../../../Components/Content/HomeContent/HomeContent";
import PlanetMainSection from "../../../Components/Section/PlanetMainSection/PlanetMainSection";


const Planets = () => {

  return (
    <div className={style.container}>
      <Header />
      <PlanetMainSection />
      <HomeContent />
      <Footer/>
    </div>
  );
};

export default Planets;
