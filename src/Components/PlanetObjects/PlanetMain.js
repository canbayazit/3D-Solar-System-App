/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/rules-of-hooks */
import { OrbitControls, Stars } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  textures,  
} from "../../Constant/planet_image/image";
import * as THREE from "three";
import { useSelector } from "react-redux";
const PlanetMain = (props) => {
  const [args, setArgs] = useState();
  const { planetIndex, mod,texture,planetArray } = useSelector(
    (store) => store.planets
  );
  const map =useLoader(TextureLoader, texture);
  const ringMap =
  planetArray[planetIndex].name === "Saturn" &&
    useLoader(TextureLoader, textures[planetIndex].ring);

  useEffect(() => {
    mod ? setArgs(props.radius) : setArgs(100);
  }, [mod, props.radius]);
  const planetMainRef = useRef();
  const ringSaturnRef = useRef();
  const ringNeptuneOuterRef = useRef();
  const ringNeptuneInnerRef = useRef();
  useEffect(() => {
      planetArray[planetIndex].name === "Neptune"
      ? (ringNeptuneOuterRef.current.visible = true)
      : (ringNeptuneOuterRef.current.visible = false);
     planetArray[planetIndex].name === "Neptune"
      ? (ringNeptuneInnerRef.current.visible = true)
      : (ringNeptuneInnerRef.current.visible = false);
      planetArray[planetIndex].name === "Saturn"
      ? (ringSaturnRef.current.visible = true)
      : (ringSaturnRef.current.visible = false);
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
        enableZooms={mod ? false : true}
        enablePan={false}
        enableRotate={true}
        autoRotate={false}
        screenSpacePanning={false}
      ></OrbitControls>
      <group>
        <mesh ref={planetMainRef} position={[0, 0, 0]}>
          <sphereGeometry
            args={mod ? [props.radius, 128, 64] : [110, 128, 250]}
          ></sphereGeometry>
          <meshStandardMaterial map={map} />
          <ambientLight intensity={0.5} />
        </mesh>
        <mesh
          ref={ringNeptuneOuterRef}
          position={[0, 0, 0]}
          rotation-y={Math.PI / 8}
          rotation-x={Math.PI / 2.5}
          receiveShadow
        >
          <ringGeometry args={[1.9 * args, 2.1 * args, 250]} />
          <meshBasicMaterial color="#252525" side={THREE.DoubleSide} />
        </mesh>
        <mesh
          ref={ringNeptuneInnerRef}
          position={[0, 0, 0]}
          rotation-y={Math.PI / 8}
          rotation-x={Math.PI / 2.5}
          receiveShadow
        >
          <ringGeometry args={[1.5 * args, 1.6 * args, 250]} />
          <meshBasicMaterial color="#252525" side={THREE.DoubleSide} />
        </mesh>
        <mesh
          ref={ringSaturnRef}
          position={[0, 0, 0]}
          rotation-y={Math.PI / 12}
          rotation-x={Math.PI / 2}
          receiveShadow
        >
          <ringGeometry args={[1.4 * args, 2.2 * args, 250]} />
          <meshStandardMaterial map={ringMap} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
};

export default PlanetMain;
