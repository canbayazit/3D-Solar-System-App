import React from "react";
import UranusContent from "../../../Components/Content/UranusContent/UranusContent";
import Dashboard from "../../../Components/Dashboard/Dashboard";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import More from "../../../Components/Dashboard/More/More";
import PlanetSection from "../../../Components/Section/PlanetSection/PlanetSection";
import style from "./style.module.scss";

const Neptune = () => {
  return (
    <div className={style.container}>
      <Header />
      <PlanetSection />
      <Dashboard />
      <More />
      <UranusContent />
      <Footer />
    </div>
  );
};

export default Neptune;
