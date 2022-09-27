import React from 'react'
import SaturnContent from '../../../Components/Content/SaturnContent/SaturnContent';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import PlanetSection from '../../../Components/Section/PlanetSection/PlanetSection';
import style from "./style.module.scss";


const Saturn = () => {
  
  return (
    <div className={style.container}>  
    <Header/>
    <PlanetSection/>
    <SaturnContent/>
    <Footer/>
  </div>
  )
}

export default Saturn;