import React from "react";
import JupiterContent from "../../../Components/Content/JupiterContent/JupiterContent";
import Dashboard from "../../../Components/Dashboard/Dashboard";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import More from "../../../Components/Dashboard/More/More";
import ComparePlanet from "../../../Components/ComparePlanet/ComparePlanet";
import style from "./style.module.scss";
import CardContainer from "../../../Components/Card/CardContainer";

const Jupiter = () => {
  return (
    <div className={style.container}>
      <Header />
      <ComparePlanet />
      <CardContainer/>
      <Dashboard />
      <More />
      <JupiterContent />
      <Footer />
    </div>
  );
};

export default Jupiter;
