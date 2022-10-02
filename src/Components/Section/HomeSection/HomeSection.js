import { Bounds } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react'
import { Provider } from 'react-redux';
import { store } from '../../../Store';
import PlanetCreator from '../../PlanetCreator/PlanetCreator';
import Sun from '../../PlanetObjects/Sun';
import style from "./style.module.scss";

const HomeSection = () => {
    useEffect(() => {
      
    }, [])
    
  return (
    <div className={style.container}>
        <Canvas
            shadows
            className={style.Canvas}
            camera={{
              fov: 45,
              aspect: window.innerWidth / window.innerHeight,
              near: 1,
              far: 4000,
              position: [5, 0, 10],
            }}
          >
            <Suspense fallback={null}>
              <Bounds fit clip observe margin={0.2}>
                <Provider store={store}>
                <PlanetCreator />
                </Provider>
              </Bounds>
            </Suspense>
          </Canvas>
    </div>
  )
}

export default HomeSection