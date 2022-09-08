import React from "react";
import style from "./style.module.scss";
const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.leftHeader}>
        <div className={style.worldLogo}>       
        </div>
        <div className={style.head}>
          <h4>EXPLORE THE SOLAR SYSTEM</h4>
        </div>
      </div>
      <div className={style.rightHeader}></div>
    </div>
  );
};

export default Header;
