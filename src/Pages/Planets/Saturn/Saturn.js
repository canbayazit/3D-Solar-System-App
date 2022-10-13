import React from "react";
import SaturnContent from "../../../Components/Content/SaturnContent/SaturnContent";
import Dashboard from "../../../Components/Dashboard/Dashboard";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import More from "../../../Components/Dashboard/More/More";
import style from "./style.module.scss";
import ComparePlanet from "../../../Components/ComparePlanet/ComparePlanet";
import CardContainer from "../../../Components/Card/CardContainer";

const Saturn = () => {
  return (
    <div className={style.container}>
      <Header />
      <ComparePlanet />
      <CardContainer/>
      <Dashboard />
      <More />
      <SaturnContent />
      <Footer />
    </div>
  );
};

export default Saturn;
