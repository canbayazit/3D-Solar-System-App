import React from "react";
import VenusContent from "../../../Components/Content/VenusContent/VenusContent";
import Dashboard from "../../../Components/Dashboard/Dashboard";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import More from "../../../Components/Dashboard/More/More";
import PlanetSection from "../../../Components/Section/PlanetSection/PlanetSection";
import style from "./style.module.scss";

const Venus = () => {
  return (
    <div className={style.container}>
      <Header />
      <PlanetSection />
      <Dashboard />
      <More />
      <VenusContent />
      <Footer />
    </div>
  );
};

export default Venus;
