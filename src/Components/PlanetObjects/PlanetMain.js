/* eslint-disable react-hooks/rules-of-hooks */
import { OrbitControls, Stars } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { textures } from "../../Constant/planet_image/image";
import * as THREE from "three";
const PlanetMain = (props) => {
  const planetMap = useLoader(TextureLoader, textures[props.index].texture);
  const ringMap = (props.planets.name === "Saturn" ) && useLoader(
    TextureLoader,
    textures[props.index].ring
  );
  const planetMainRef = useRef();
  const ringSaturnRef = useRef();
  const ringNeptuneOuterRef = useRef();
  const ringNeptuneInnerRef = useRef();
  // console.log("PlanetMain",props.mode)
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

  useFrame(() => {
    planetMainRef.current.rotation.y += 0.001;
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
        enableZooms={false}
      ></Stars>

      <OrbitControls
        enableZooms={props.mod ? false : true}
        enablePan={true}
        enableRotate={true}
        autoRotate={false}
        screenSpacePanning={false}
      ></OrbitControls>
      <group>
        <mesh ref={planetMainRef} position={[0, 0, 0]}>
          <sphereGeometry
            args={props.mod ? [props.radius, 128, 64] : [110, 128, 64]}
          ></sphereGeometry>
          <meshStandardMaterial map={planetMap} />
          <ambientLight intensity={0.25} />
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
          <ringGeometry args={props.mod ? [(190*props.radius)/100, (210*props.radius)/100, 55]:[190, 210, 55]} />
          <meshBasicMaterial color="#252525" side={THREE.DoubleSide} />
        </mesh>
        <mesh
          ref={ringNeptuneInnerRef}
          position={[0, 0, 0]}
          rotation-y={Math.PI / 8}
          rotation-x={Math.PI / 2.5}
          receiveShadow
        >
          <ringGeometry args={props.mod ? [(150*props.radius)/100, (160*props.radius)/100, 55]:[150, 160, 55]} />
          <meshBasicMaterial color="#252525" side={THREE.DoubleSide} />
        </mesh>
        <mesh
          ref={ringSaturnRef}
          position={[0, 0, 0]}
          rotation-y={Math.PI /12}
          rotation-x={Math.PI /2 }
          receiveShadow
        >
          <ringGeometry args={props.mod ? [(140*props.radius)/100, (220*props.radius)/100, 55] : [140, 220, 55]} />
          <meshStandardMaterial map={ringMap} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
};

export default PlanetMain;
