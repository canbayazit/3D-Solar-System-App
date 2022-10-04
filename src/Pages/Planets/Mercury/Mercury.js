import React from "react";
import MercuryContent from "../../../Components/Content/MercuryContent/MercuryContent";
import Dashboard from "../../../Components/Dashboard/Dashboard";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import More from "../../../Components/Dashboard/More/More";
import MercurySection from "../../../Components/Section/PlanetSection/PlanetSection";
import style from "./style.module.scss";

const Mercury = () => {
  return (
    <div className={style.container}>
      <Header />
      <MercurySection />
      <Dashboard />
      <More />
      <MercuryContent />
      <Footer />
    </div>
  );
};

export default Mercury;
