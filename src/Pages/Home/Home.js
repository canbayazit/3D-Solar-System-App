import React from "react";
import Header from "../../Components/Header/Header";
import HomeSection from "../../Components/Section/HomeSection/HomeSection";
import HomeContent from "../../Components/HomeContent/HomeContent";
import style from "./style.module.scss";
import Footer from "../../Components/Footer/Footer";
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
