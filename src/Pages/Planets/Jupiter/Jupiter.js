import React from 'react'
import JupiterContent from '../../../Components/Content/JupiterContent/JupiterContent';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import PlanetSection from '../../../Components/Section/PlanetSection/PlanetSection';
import style from "./style.module.scss";


const Jupiter = () => {
  
  return (
    <div className={style.container}>  
    <Header/>
    <PlanetSection/>
    <JupiterContent/>
    <Footer/>
  </div>
  )
}

export default Jupiter;