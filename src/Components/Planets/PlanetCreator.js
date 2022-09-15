import { OrbitControls, Stars } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../Assets/img/PlanetsTexture/earthmap1kcloud.png";
const PlanetCreator = () => {
  const map = useLoader(TextureLoader, texture);
  return (
    <>
      <ambientLight intensity={0.5} />
      <Stars
        radius={300}
        depth={60}
        saturation={0}
        count={2000}
        fade={true}
        factor={7}
      />
      <mesh>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial map={map} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
        />
      </mesh>
    </>
  );
};

export default PlanetCreator;
