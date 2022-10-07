/* eslint-disable react-hooks/rules-of-hooks */
import { OrbitControls, Stars } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { textures } from "../../Constant/planet_image/image";
import * as THREE from "three";
import { useSelector } from "react-redux";
const Planet = (props) => {
  const [args, setArgs] = useState();
  const {  mod, planets } = useSelector(
    (store) => store.planets
  );
  const planetMap = useLoader(TextureLoader, textures[props.index].texture);
  const ringMap =
  planets[props.index].name === "Saturn" &&
    useLoader(TextureLoader, textures[props.index].ring);
  useEffect(() => {
    mod ? setArgs(props.radius) : setArgs(100);
  });
console.log("mod planet",mod)
  useEffect(() => {
    planets[props.index].name === "Neptune"
      ? (ringNeptuneOuterRef.current.visible = true)
      : (ringNeptuneOuterRef.current.visible = false);
      planets[props.index].name === "Neptune"
      ? (ringNeptuneInnerRef.current.visible = true)
      : (ringNeptuneInnerRef.current.visible = false);
      planets[props.index].name === "Saturn"
      ? (ringSaturnRef.current.visible = true)
      : (ringSaturnRef.current.visible = false);
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
        enableZooms={mod ? false : true}
        enablePan={false}
        enableRotate={true}
        autoRotate={false}
        screenSpacePanning={false}
      ></OrbitControls>
      <group>
        <mesh ref={planetRef} position={[0, 0, 0]}>
          <sphereGeometry args={[props.radius, 128, 64]} />
          <meshStandardMaterial map={planetMap} />
          <ambientLight intensity={0.45} />
        </mesh>
        <mesh
          ref={ringNeptuneOuterRef}
          position={[0, 0, 0]}
          rotation-y={Math.PI / 8}
          rotation-x={Math.PI / 2.5}
          receiveShadow
        >
          <ringGeometry args={[1.9 * args, 2.1 * args, 55]} />
          <meshBasicMaterial color="#252525" side={THREE.DoubleSide} />
        </mesh>
        <mesh
          ref={ringNeptuneInnerRef}
          position={[0, 0, 0]}
          rotation-y={Math.PI / 8}
          rotation-x={Math.PI / 2.5}
          receiveShadow
        >
          <ringGeometry args={[1.5 * args, 1.6 * args, 55]} />
          <meshBasicMaterial color="#252525" side={THREE.DoubleSide} />
        </mesh>
        <mesh
          ref={ringSaturnRef}
          position={[0, 0, 0]}
          rotation-y={Math.PI / 8}
          rotation-x={Math.PI / 2.5}
          receiveShadow
        >
          <ringGeometry args={[1.25 * args, 1.9 * args, 55]} />
          <meshStandardMaterial map={ringMap} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
};

export default Planet;
