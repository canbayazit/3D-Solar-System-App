import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { AmbientLight } from 'three';
import style from './style.module.scss';
const SolarSystem = () => {
  return (
    <div className={style.container}>
      <Canvas className={style.Canvas}>
        <OrbitControls enableZoom={false}></OrbitControls>
        <AmbientLight></AmbientLight>
        <Suspense fallback={null}>

        </Suspense>
      </Canvas>
    </div>
  )
}

export default SolarSystem