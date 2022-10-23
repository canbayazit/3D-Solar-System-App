import React from "react";
import style from "./style.module.scss";
import Footer from "../../Components/Footer/Footer";
import More from "../../Components/Dashboard/More/More";
import Dashboard from "../../Components/Dashboard/Dashboard";
import CardContainer from "../../Components/Card/CardContainer";
import ComparePlanet from "../../Components/ComparePlanet/ComparePlanet";
import Header from "../../Components/Header/Header";
import MoonContent from "../../Components/Content/MoonContent/MoonContent";
import PlanetCardContainer from "../../Components/PlanetCard/PlanetCardContainer";

const Moons = () => {
  return (
    <div className={style.container}>
      <Header />
      <ComparePlanet />
      <CardContainer />
      <Dashboard />
      <More />
      <MoonContent />
      <PlanetCardContainer />
      <Footer />
    </div>
  );
};

export default Moons;
