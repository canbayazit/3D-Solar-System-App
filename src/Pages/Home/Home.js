import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import HomeSection from "../../Components/Section/HomeSection/HomeSection";
import style from "./style.module.scss";
import Footer from "../../Components/Footer/Footer";
import HomeContent from "../../Components/Content/HomeContent/HomeContent";

const Home = () => {

  return (
    <div className={style.container}>
      <Header />
      <HomeSection />
      <HomeContent />
      <Footer/>
    </div>
  );
};

export default Home;
