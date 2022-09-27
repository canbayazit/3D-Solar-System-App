import React from 'react'
import EarthContent from '../../../Components/Content/EarthContent/EarthContent';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import PlanetSection from '../../../Components/Section/PlanetSection/PlanetSection';
import style from "./style.module.scss";


const Earth = () => {
  
  return (
    <div className={style.container}>  
    <Header />
    <PlanetSection/>
    <EarthContent/>
    <Footer/>
  </div>
  )
}

export default Earth