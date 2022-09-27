import React from 'react'
import UranusContent from '../../../Components/Content/UranusContent/UranusContent';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import PlanetSection from '../../../Components/Section/PlanetSection/PlanetSection';
import style from "./style.module.scss";


const Uranus = () => {
  
  return (
    <div className={style.container}>  
    <Header/>
    <PlanetSection/>
    <UranusContent/>
    <Footer/>
  </div>
  )
}

export default Uranus;