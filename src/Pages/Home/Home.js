import React, { useEffect } from "react";
import HomeContent from "../../Components/Content/HomeContent/HomeContent";
import More from "../../Components/Dashboard/More/More";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HomeSection from "../../Components/Section/HomeSection/HomeSection";


import style from "./style.module.scss";


const Home = () => {

  return (
    <div className={style.container}>
      <Header />
      <HomeSection />
      <More/>
      <HomeContent />
      <Footer/>
    </div>
  );
};

export default Home;
