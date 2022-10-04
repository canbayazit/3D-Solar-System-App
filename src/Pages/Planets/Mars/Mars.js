import React from "react";
import MarsContent from "../../../Components/Content/MarsContent/MarsContent";
import Dashboard from "../../../Components/Dashboard/Dashboard";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import More from "../../../Components/Dashboard/More/More";
import PlanetSection from "../../../Components/Section/PlanetSection/PlanetSection";
import style from "./style.module.scss";

const Mars = () => {
  return (
    <div className={style.container}>
      <Header />
      <PlanetSection />
      <Dashboard />
      <More />
      <MarsContent />
      <Footer />
    </div>
  );
};

export default Mars;
