import { Html, useProgress } from "@react-three/drei";
import style from "./style.module.scss";
import React from "react";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className={style.container}>
      <div className={style.loading}></div>
      <div>{progress} % loading</div>
    </Html>
  );
};

export default Loader;
