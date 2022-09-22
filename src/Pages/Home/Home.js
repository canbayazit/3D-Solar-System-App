import React from "react";
import Header from "../../Components/Header/Header";
import HomeSection from "../../Components/Section/HomeSection/HomeSection";
import HomeContent from "../../Components/Content/HomeContent/HomeContent";
import style from "./style.module.scss";
const Home = () => {

  return (
    <div className={style.container}>
      <Header />
      <HomeSection />
      <HomeContent />
    </div>
  );
};

export default Home;
