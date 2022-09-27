/* eslint-disable react-hooks/rules-of-hooks */
import { OrbitControls, Stars } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { textures } from "../../Constant/planet_image/image";
import * as THREE from "three";
const Planet = (props) => {

  console.log("Planet",props.mod)
//   console.log("Planet index", props);
//   console.log("mercury", props) ;

  const planetMap = useLoader(TextureLoader, textures[props.index].texture);
  const ringMap = (props.planets.name === "Saturn" ) && useLoader(
    TextureLoader,
    textures[props.index].ring
  );

  useEffect(() => {
    props.planets.name === "Neptune" 
    ? ringNeptuneOuterRef.current.visible=true
    : ringNeptuneOuterRef.current.visible=false
    props.planets.name === "Neptune" 
    ? ringNeptuneInnerRef.current.visible=true
    : ringNeptuneInnerRef.current.visible=false
    props.planets.name === "Saturn" 
    ? ringSaturnRef.current.visible=true
    : ringSaturnRef.current.visible=false
    // console.log("useffect")
  });
 

  const planetRef = useRef();
  const ringSaturnRef = useRef();
  const ringNeptuneOuterRef = useRef();
  const ringNeptuneInnerRef = useRef();

  useFrame(() => {
    planetRef.current.rotation.y += 0.001;
  });
  return (
    <>
      <Stars
        radius={500}
        depth={500}
        saturation={100}
        count={12000}
        fade={false}
        factor={2}
      ></Stars>

      <OrbitControls
        enableZooms={props.mod ? false : true}
        enablePan={true}
        enableRotate={true}
        autoRotate={false}
        screenSpacePanning={false}
      ></OrbitControls>
      <group>
        <mesh ref={planetRef} position={[0,0,0]} >
          <sphereGeometry args={[props.radius, 128, 64]}/>
          <ambientLight intensity={0.25}  />
          {/* <pointLight 
        castShadow 
        position={[5, 0, 0]} 
        intensity={0.1} 
        distance={1000} 
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
       
        /> */}
        </mesh>
        <mesh
         
          ref={ringNeptuneOuterRef}
          position={[0, 0, 0]}
          rotation-y={Math.PI / 8}
          rotation-x={Math.PI / 2.5}
          receiveShadow                    
        >
          <ringGeometry args={[190, 210, 55]} />
          <meshBasicMaterial color="#252525" side={THREE.DoubleSide} />
        </mesh>
        <mesh
         
          ref={ringNeptuneInnerRef}
          position={[0, 0, 0]}
          rotation-y={Math.PI / 8}
          rotation-x={Math.PI / 2.5}
          receiveShadow                    
        >
          <ringGeometry args={[150, 160, 55]} />
          <meshBasicMaterial color="#252525" side={THREE.DoubleSide} />
        </mesh>
        <mesh
         
          ref={ringSaturnRef}
          position={[0, 0, 0]}
          rotation-y={Math.PI / 8}
          rotation-x={Math.PI / 2.5}
          receiveShadow                    
        >
          <ringGeometry args={[125, 190, 55]} />
          <meshStandardMaterial map={ringMap} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
};

export default Planet;
