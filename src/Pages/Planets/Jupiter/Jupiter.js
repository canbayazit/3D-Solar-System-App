import React from "react";
import JupiterContent from "../../../Components/Content/JupiterContent/JupiterContent";
import Dashboard from "../../../Components/Dashboard/Dashboard";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import More from "../../../Components/Dashboard/More/More";
import PlanetSection from "../../../Components/Section/PlanetSection/PlanetSection";
import style from "./style.module.scss";

const Jupiter = () => {
  return (
    <div className={style.container}>
      <Header />
      <PlanetSection />
      <Dashboard />
      <More />
      <JupiterContent />
      <Footer />
    </div>
  );
};

export default Jupiter;
