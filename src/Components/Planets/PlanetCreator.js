/* eslint-disable no-undef */
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../Assets/img/PlanetsTexture/earthmap1kcloud.png";
import * as THREE from "three";
import { Object3D } from "three";
const PlanetCreator = () => {
  const map = useLoader(TextureLoader, texture);
  //   const renderer = new THREE.WebGLRenderer(); //?

  // //   renderer.setSize(window.innerWidth, window.innerHeight); // renderlanacak sayfanın ekran boyutunu ayarlıyoruz
  // //   // kullanıcının ekranının(window) boyutlarını girdik

  //   document.body.appendChild(renderer.domElement);

  // //   const width = window.innerHeight;
  // //   const height = window.innerHeight;
  //     const camera = new THREE.PerspectiveCamera( // 1'den fazla kamera çeşidi var burda PerspectiveCamera ekledik
  //       // neden ?
  //       45, //?
  //       window.innerWidth / window.innerHeight, //?
  //       0.1, //?
  //       1000 //?
  //     );
  var axis = new THREE.Vector3(2, 2, 2);
  const RadiansX = (90 * Math.PI) / 180;
  const RadiansY = (45 * Math.PI) / 180;
  const RadiansZ = (180 * Math.PI) / 180;
  const earthRef = useRef();
  const sunhRef = useRef();
  // const Ref = UseUpdate(group => {
  //     Group.rotateX(props.angle)
  //   }, [])
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    // earthRef.current.position.z= elapsedTime;

    sunhRef.current.rotation.y += 0.001;
  });
  /*  */

  return (
    <>
      {/* <OrbitControls
         camera={PerspectiveCamera}
        /> */}
      <ambientLight intensity={0.5} />
      <OrbitControls
        enableZooms={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={false}
        maxPolarAngle={Math.PI * 2}
        minPolarAngle={-2 * Math.PI}
        screenSpacePanning={false}
      />
      {/* <pointLight color="#fff" position={[2,0,2]} intensity={1.5}/> */}
      {/* <PerspectiveCamera fov={45} aspect={width / height} near={1} far={1000}/> */}
      <Stars
        radius={300}
        depth={60}
        saturation={0}
        count={1500}
        fade={true}
        factor={7}
      ></Stars>

      <mesh ref={sunhRef}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial map={map} />
        <PerspectiveCamera />
        <group
          ref={earthRef}
          position={[20, 0, 0]}
          object={Object3D}
          rotateY={500}
        >
          <mesh>
            <sphereGeometry args={[1, 32, 16]} />
            <meshStandardMaterial map={map} />
            <PerspectiveCamera />
          </mesh>
        </group>
      </mesh>
    </>
  );
};

export default PlanetCreator;
