import React from "react";
import UranusContent from "../../../Components/Content/UranusContent/UranusContent";
import Dashboard from "../../../Components/Dashboard/Dashboard";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import More from "../../../Components/Dashboard/More/More";
import style from "./style.module.scss";
import ComparePlanet from "../../../Components/ComparePlanet/ComparePlanet";
import CardContainer from "../../../Components/Card/CardContainer";
import PlanetCardContainer from "../../../Components/PlanetCard/PlanetCardContainer";

const Neptune = () => {
  return (
    <div className={style.container}>
      <Header />
      <ComparePlanet />
      <CardContainer />
      <Dashboard />
      <More />
      <UranusContent />
      <PlanetCardContainer />
      <Footer />
    </div>
  );
};

export default Neptune;
