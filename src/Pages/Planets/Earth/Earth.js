import React, { useEffect } from "react";
import EarthContent from "../../../Components/Content/EarthContent/EarthContent";
import More from "../../../Components/Dashboard/More/More";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import style from "./style.module.scss";
import Dashboard from "../../../Components/Dashboard/Dashboard";
import ComparePlanet from "../../../Components/ComparePlanet/ComparePlanet";
import CardContainer from "../../../Components/Card/CardContainer";
import PlanetCardContainer from "../../../Components/PlanetCard/PlanetCardContainer";

const Earth = () => {
  return (
    <div className={style.container}>
      <Header />
      <ComparePlanet />
      <CardContainer />
      <Dashboard />
      <More />
      <EarthContent />
      <PlanetCardContainer />
      <Footer />
    </div>
  );
};

export default Earth;
