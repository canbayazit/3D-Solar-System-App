import React from 'react'
import MercuryContent from '../../../Components/Content/MercuryContent/MercuryContent';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header'
import MercurySection from '../../../Components/Section/PlanetSection/PlanetSection';
import style from "./style.module.scss";


const Mercury = () => {
  
  return (
    <div className={style.container}>  
    <Header />
    <MercurySection/>
    <MercuryContent/>
    <Footer/>
  </div>
  )
}

export default Mercury