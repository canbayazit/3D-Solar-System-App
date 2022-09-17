/* eslint-disable no-undef */
import { OrbitControls, Stars, Text } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import earthTexture from "../../Assets/img/PlanetsTexture/earthmap1kcloud.png";
import saturnTexture from "../../Assets/img/PlanetsTexture/saturnmap.jpg";
import saturnRingTexture from "../../Assets/img/PlanetsTexture/saturnRing.png";
import sunTexture from "../../Assets/img/PlanetsTexture/sunn.png";

import * as THREE from "three";
import { MeshBasicMaterial } from "three";

const PlanetCreator = () => {
  const earthMap = useLoader(TextureLoader, earthTexture);
  const saturnMap = useLoader(TextureLoader, saturnTexture);
  const saturnRing = useLoader(TextureLoader, saturnRingTexture);
  const sunMap = useLoader(TextureLoader, sunTexture);
  const text = "SATURN";
  const earthOrbitRef = useRef();
  const earthRef = useRef();
  const ringRef = useRef();
  const sunhRef = useRef();
  const textRef = useRef();
  const targetRef = useRef();
  const obliquity = 37;
  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    // earthOrbitRef.current.rotation.y += 0.001;
    // targetRef.current.position.copy(camera.rotation);
    targetRef.current.quaternion.copy(camera.quaternion);
    // textRef.current.position.copy(camera.rotation);
    // textRef.current.quaternion.copy(camera.quaternion);
    // textRef.current.translateX(20);
    // textRef.current.translateY(5);
    // sunhRef.current.rotation.y += 0.001;
  });

  return (
    <>
      <OrbitControls
        enableZooms={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={false}
        maxPolarAngle={Math.PI * 2}
        minPolarAngle={-2 * Math.PI}
        screenSpacePanning={false}
      />
      <Stars
        radius={400}
        depth={60}
        saturation={0}
        count={2000}
        fade={false}
        factor={7}
      ></Stars>

      <mesh ref={sunhRef} rotation={[0, 0, obliquity]}>
        <sphereGeometry args={[5, 32, 16]} />
        <meshBasicMaterial map={sunMap} />
        <ambientLight intensity={0} position={[0, 0, 0]} />
        <pointLight position={[0, 0, 0]} intensity={0.5} distance={500} />
        <Text
          position={[5, 0, 0]}
          fontSize={1.75}
          letterSpacing={-0.05}
          color="white"
        >
          {text}
        </Text>
      </mesh>
      {/* <mesh ref={earthOrbitRef} >    
        <mesh ref={earthRef} position={[20, 0, 0]}>
          <sphereGeometry args={[1, 32, 16]} />
          <meshStandardMaterial map={saturnMap} />
          <PerspectiveCamera />
        </mesh>
      </mesh> */}
      <mesh castShadow receiveShadow ref={earthOrbitRef}>
        <mesh ref={earthRef} position={[20, 0, 0]}>
          <sphereGeometry args={[1, 32, 16]} />
          <meshStandardMaterial map={saturnMap} />
        </mesh>
        <mesh
          ref={ringRef}
          position={[20, 0, 0]}
          rotation-y={Math.PI * 0.2}
          rotation-x={Math.PI * 0.8}
        >
          <ringGeometry args={[1, 2, 55]} />
          <meshStandardMaterial map={saturnRing} side={THREE.DoubleSide} />
        </mesh>
        <mesh ref={targetRef}  position={[20, 0, 0]} >
          <ringGeometry args={[2.4, 2.5, 32]}></ringGeometry>
          <meshBasicMaterial color="#fff"></meshBasicMaterial>
          <mesh ref={textRef} position={[20, 0, 0]}>
          <Text
            position={[-20, 5, 0]}           
            fontSize={1.75}
            letterSpacing={-0.05}
            color="white"
      
          >
            {text}
          </Text>
          </mesh>
        </mesh>
      </mesh>
    </>
  );
};

export default PlanetCreator;
