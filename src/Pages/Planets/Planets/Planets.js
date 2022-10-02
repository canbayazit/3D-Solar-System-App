import React, { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import style from "./style.module.scss";
import Footer from "../../../Components/Footer/Footer";
import HomeContent from "../../../Components/Content/HomeContent/HomeContent";
import PlanetsSection from "../../../Components/Section/PlanetsSection/PlanetsSection";


const Planets = () => {

  return (
    <div className={style.container}>
      <Header />
      <PlanetsSection />
      <HomeContent />
      <Footer/>
    </div>
  );
};

export default Planets;
