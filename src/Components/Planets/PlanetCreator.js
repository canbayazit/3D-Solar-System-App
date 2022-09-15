/* eslint-disable no-undef */
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../Assets/img/PlanetsTexture/earthmap1kcloud.png";
const PlanetCreator = () => {
  const map = useLoader(TextureLoader, texture);
 

//   const width = window.innerHeight;
//   const height = window.innerHeight;
  //   const camera = new THREE.PerspectiveCamera( // 1'den fazla kamera çeşidi var burda PerspectiveCamera ekledik
  //     // neden ?
  //     45, //?
  //     window.innerWidth / window.innerHeight, //?
  //     0.1, //?
  //     1000 //?
  //   );
const earthRef = useRef();
useFrame(({clock})=>{
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime/6;
});
  /* <OrbitControls
          enableZooms={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          maxPolarAngle={2*Math.PI}
          minPolarAngle={-2*Math.PI}
          screenSpacePanning={true}
        /> */

  return (
    <>
      {/* <OrbitControls
         camera={PerspectiveCamera}
        /> */}
      <ambientLight intensity={0.5} />
      <OrbitControls
          enableZooms={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          maxPolarAngle={2*Math.PI}
          minPolarAngle={-2*Math.PI}
          screenSpacePanning={true}
        />
      {/* <pointLight color="#fff" position={[2,0,2]} intensity={1.5}/> */}
      {/* <PerspectiveCamera fov={45} aspect={width / height} near={1} far={1000}/> */}
      <Stars
        radius={300}
        depth={60}
        saturation={0}
        count={2000}
        fade={true}
        factor={7}
      >
       
      </Stars>

      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial map={map} />      
      </mesh>
      <mesh position={[20,0,0]}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial map={map} />      
      </mesh>
    </>
  );
};

export default PlanetCreator;
