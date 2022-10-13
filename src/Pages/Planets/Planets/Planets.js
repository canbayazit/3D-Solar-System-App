import React, { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import style from "./style.module.scss";
import Footer from "../../../Components/Footer/Footer";
import PlanetMainSection from "../../../Components/Section/PlanetMainSection/PlanetMainSection";
import PlanetContent from "../../../Components/Content/PlanetsContent/PlanetContent";


const Planets = () => {

  return (
    <div className={style.container}>
      <Header />
      <PlanetMainSection />
      <PlanetContent />
      <Footer/>
    </div>
  );
};

export default Planets;
