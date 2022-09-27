import React from 'react'
import VenusContent from '../../../Components/Content/VenusContent/VenusContent';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import PlanetSection from '../../../Components/Section/PlanetSection/PlanetSection';
import style from "./style.module.scss";


const Venus = () => {
  
  return (
    <div className={style.container}>  
    <Header />
    <PlanetSection/>
    <VenusContent/>
    <Footer/>
  </div>
  )
}

export default Venus;