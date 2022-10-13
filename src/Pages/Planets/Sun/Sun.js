import React from "react";
import ComparePlanet from "../../../Components/ComparePlanet/ComparePlanet";
import Dashboard from "../../../Components/Dashboard/Dashboard";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import style from "./style.module.scss";
import More from "../../../Components/Dashboard/More/More"
import CardContainer from "../../../Components/Card/CardContainer";
import SunContent from "../../../Components/Content/SunContent/SunContent";
const Sun = () => {
  return (
    <div className={style.container}>
      <Header/>
      <ComparePlanet/>
      <CardContainer/>
      <Dashboard/>
      <More/>
      <SunContent/>
      <Footer/>
    </div>
  );
};
export default Sun;