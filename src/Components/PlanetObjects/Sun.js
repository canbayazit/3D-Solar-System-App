import { OrbitControls, Stars } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { TextureLoader } from 'three';
import sunTexture from "../../Assets/img/PlanetsTexture/sunmap2.png";

const Sun = () => {
  const sunRef = useRef();
  const { stars } = useSelector((store) => store.planets);
  const sunMap = useLoader(TextureLoader, sunTexture);
  useFrame(() => {
    sunRef.current.rotation.y += 0.001;
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
        enableZooms={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={false}
        screenSpacePanning={false} 
        maxDistance={600}
        minDistance={600}
      ></OrbitControls>
      <group>
        <mesh ref={sunRef} position={[0, 0, 0]}>
          <sphereGeometry args={[128, 128, 64]} />
          <meshStandardMaterial map={sunMap} />
          <ambientLight intensity={0.25} />
        </mesh>       
      </group>
    </>
  )
}

export default Sun