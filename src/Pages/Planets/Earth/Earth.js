import React from "react";
import EarthContent from "../../../Components/Content/EarthContent/EarthContent";
import More from "../../../Components/Dashboard/More/More";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import PlanetSection from "../../../Components/Section/PlanetSection/PlanetSection";
import style from "./style.module.scss";
import Dashboard from "../../../Components/Dashboard/Dashboard";

const Earth = () => {
  return (
    <div className={style.container}>
      <Header />
      <PlanetSection />
      <Dashboard />
      <More />
      <EarthContent />
      <Footer />
    </div>
  );
};

export default Earth;
