import React from "react";
import Header from "../../Components/Header/Header";
import style from "./style.module.scss";
import earth from "../../Assets/img/earthTrans.png";
const Home = () => {
  return (
    <div className={style.container}>
      <Header />
      <section className={style.section}>
        <div className={style.earthDiv}>
          {/* <img src={earth} className={style.earth}></img> */}
        </div>
      </section>
      <div className={style.main}>
        <div className={style.info}>
          <h2>Solar System</h2>           
        </div>
      </div>
    </div>
  );
};

export default Home;
