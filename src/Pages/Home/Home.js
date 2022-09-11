import React from "react";
import Header from "../../Components/Header/Header";
import style from "./style.module.scss";
import earth from "../../Assets/img/earthTrans.png";
const Home = () => {
  return (
    <div className={style.container}>
      <Header />
      <section className={style.section}>
        <div>
          <img src={earth} className={style.earth}></img>
        </div>
      </section>
    </div>
  );
};

export default Home;
