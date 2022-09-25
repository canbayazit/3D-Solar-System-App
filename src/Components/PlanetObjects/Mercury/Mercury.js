import { OrbitControls, Stars } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { textures } from "../../../Constant/planet_image/image";
const Mercury = (planets) => {
  const mercuryMap = useLoader(TextureLoader, textures[0].texture);
  const mercuryRef = useRef();
  useFrame(() => {
    mercuryRef.current.rotation.y += 0.001;
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
          enablePan={true}
          enableRotate={true}
          autoRotate={false}
          screenSpacePanning={false}
        >

</OrbitControls>
       
    <mesh ref={mercuryRef} rotation={[0, 0, planets.planets[0].axialTilt]}>
 
      <sphereGeometry args={[160, 128, 64]} >
    
      </sphereGeometry>
      <meshStandardMaterial map={mercuryMap}  />
      <ambientLight intensity={0.25} position={[0, 0, 0]} />
      {/* <pointLight 
        castShadow 
        position={[5, 0, 0]} 
        intensity={0.1} 
        distance={1000} 
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
       
        /> */}
    </mesh>

    </>
  );
};

export default Mercury;
