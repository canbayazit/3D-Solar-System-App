/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import { useSelector } from "react-redux";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/Deimos.gltf");
  const { mod } = useSelector((store) => store.planets);
  console.log("mod", mod);
  const moonRef = useRef();

  useFrame(() => {
    moonRef.current.rotation.y += 0.001;
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
      <ambientLight intensity={0.8} />
      <group
        ref={moonRef}
        scale={mod ? (15 * props.radius) / 110 : 15}
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.deimos.geometry}
          material={materials.deimos_tex_01}
        />
      </group>
    </>
  );
}

useGLTF.preload("/Deimos.gltf");
