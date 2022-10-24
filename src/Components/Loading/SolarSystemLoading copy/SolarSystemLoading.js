import { Html, useProgress } from "@react-three/drei";
import React from "react";
import style from "./style.module.scss";

const SolarSystemLoading = () => {
  const { progress } = useProgress();
  return (
    <Html wrapperClass={style.container}>
      <div className={style.loading}></div>
      <div className={style.progress}>{progress} % loading</div>
    </Html>
  );
};

export default SolarSystemLoading;
