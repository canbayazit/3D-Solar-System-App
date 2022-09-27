import React from 'react'
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import PlanetSection from '../../../Components/Section/PlanetSection/PlanetSection';
import style from "./style.module.scss";


const Mars = () => {
  
  return (
    <div className={style.container}>  
    <Header/>
    <PlanetSection/>
    <Footer/>
  </div>
  )
}

export default Mars;