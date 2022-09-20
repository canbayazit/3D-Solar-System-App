/* eslint-disable no-undef */
import { OrbitControls, Shadow, Stars, Text, useBounds } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import earthTexture from "../../Assets/img/PlanetsTexture/earthmap1kcloud.png";
import saturnTexture from "../../Assets/img/PlanetsTexture/saturnmap.jpg";
import saturnRingTexture from "../../Assets/img/PlanetsTexture/saturnRing.png";
import sunTexture from "../../Assets/img/PlanetsTexture/sunmap2.png";
import * as THREE from "three";
// import CameraControls from 'camera-controls';
const PlanetCreator = () => {
  const [isClicked,setClicked]=useState(null);
  const [focus,setFocus]=useState({});
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
  const opacityRef = useRef();
  const merkurRef = useRef();
  const targetOrbitRef = useRef();
  const denemeRef = useRef();
  const abcRef = useRef();
  const deneme2Ref = useRef();
  const obliquity = 37;
  const api = useBounds();

  const q = new THREE.Quaternion();
  const p = new THREE.Vector3()
  const distance = 150;
  let opacityValue = 0;
  const GOLDENRATIO = 1.61803398875
  useEffect(() => {
   
   
  })

  useFrame(({ clock, camera, state , delta}) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;

    // pos.set(focus.x+1.2, focus.y, focus.z); 
    // look.set(focus.x- 1.2, focus.y, focus.z);
    // camera.position.lerp(pos,0.5);
    // camera.updateProjectionMatrix();
    // camera.lookAt([look.x, look.y, look.z])
    // camera.update(delta);
    // earthOrbitRef.current.rotation.y += 0.002;
    // targetOrbitRef.current.rotation.y += 0.002;
    // targetRef.current.rotation.y -= 0.002;

    // targetRef.current.rotation.z = camera.quaternion._z;
    // targetRef.current.rotation.x = camera.quaternion._x;
    // if (isClicked) {
    //   // camera.position.set();

    //   camera.lookAt([105,0,0]); 
    // }

    // targetRef.current.rotation.y+=0.1
    // merkurRef.current.rotation.y += 0.0005;
    // targetRef.current.rotation.y -= 0.001;
    // targetRef.current.position.setFromMatrixPosition( targetRef.matrixWorld )
    // targetRef.current.position.copy(camera.position);
    // textRef.current.quaternion.copy(camera.quaternion);
    // textRef.current.rotation.copy(camera.rotation);
    
    deneme2Ref.current.quaternion.copy(camera.quaternion);
    deneme2Ref.current.rotation.copy(camera.rotation);

    // targetRef.current.quaternion.copy(camera.quaternion);
    // targetRef.current.rotation.copy(camera.rotation);
    // console.log("target",targetRef.current.quaternion);
    // console.log("camera",camera.quaternion);
    // console.log("target",abcRef.current.rotation);
    // console.log("camera",camera.rotation);
    // targetRef.current.rotation.x=0;
    // targetRef.current.rotation.y=0;
    // targetRef.current.rotation.z=0;
    // targetRef.current.quaternion._x.copy(camera.quaternion._x);

    // opacityRef.current.opacity = Math.abs(camera.position.x) / 100 + 0.1;
    // opacityRef.current.opacity = Math.abs(camera.position.y) / 100 + 0.1;
    // opacityRef.current.opacity = Math.abs(camera.position.z) / 100 + 0.1;
    // opacityRef.current.opacity <= 0.60 ? opacityRef.current.opacity=0 :  opacityRef.current.opacity = Math.abs(camera.position.x) / 100 + 0.1;
    let newDistance = Math.sqrt(
      Math.pow(camera.position.x - earthRef.current.position.x, 2) +
        Math.pow(camera.position.y - earthRef.current.position.y, 2) +
        Math.pow(camera.position.z - earthRef.current.position.z, 2)
    );
    // distance > newDistance
    //   ? (opacityRef.current.opacity = 0)
    //   : (opacityRef.current.opacity += newDistance);
    // console.log("newDistance",newDistance);
    // console.log("target",opacityRef.current.opacity);

    // x >= camera.quaternion._x ? opacityValue + 0.2 : opacityValue - 0.2;

    // console.log("quaternion",camera.quaternion._x);
    // console.log("opacity", opacityRef.current.opacity);
    // console.log("position",camera.position.x);

    // textRef.current.position.copy(camera.position);
    // textRef.current.rotation.copy(camera.rotation);

    // textRef.current.quaternion.copy(camera.quaternion);
    // textRef.current.translateX(20);
    // textRef.current.translateY(5);
    // sunhRef.current.rotation.y += 0.001;
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

      <mesh  ref={sunhRef} rotation={[0, 0, obliquity]}>
        <sphereGeometry args={[16, 32, 16]} />
        <meshBasicMaterial map={sunMap}  color="#fff53d"/>
        <ambientLight intensity={0} position={[0, 0, 0]} />
        <pointLight 
        castShadow position={[0, 0, 0]} 
        intensity={0.5} 
        distance={1000} 
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
       
        />
        <Text
          position={[5, 0, 0]}
          fontSize={1.75}
          letterSpacing={-0.05}
          color="white"
        >
          {text}
        </Text>
      </mesh>
      <group  onPointerMissed={(e) => (e.button === 0 && api.refresh().fit(), setClicked(false))} >
        <group    ref={earthOrbitRef}>
          <mesh  
            castShadow
            onDoubleClick={(e)=>(e.stopPropagation(), e.delta <= 2 && api.refresh(earthRef.current).fit())}  ref={earthRef} position={[200, 0, 0]}>
            <sphereGeometry args={[5, 32, 16]} />
            <meshStandardMaterial map={saturnMap} />

          </mesh>
          <mesh
            ref={ringRef}
            position={[200, 0, 0]}
            rotation-y={Math.PI /8}
            rotation-x={Math.PI/2.5}
            receiveShadow
          >
            <ringGeometry args={[5, 10, 55]} />
            <meshLambertMaterial  map={saturnRing} side={THREE.DoubleSide} />
          </mesh>
        </group>
        <group  ref={targetOrbitRef}>
          <mesh  position={[200, 0, 0]} ref={targetRef}>
            <mesh ref={deneme2Ref}>
              <mesh ref={denemeRef}>
                <ringGeometry args={[13.2, 14.5, 55]}></ringGeometry>
                <meshBasicMaterial
                  ref={opacityRef}
                  color="#fff"
                  opacity={1}
                  transparent
                  side={THREE.DoubleSide}
                ></meshBasicMaterial>
              </mesh>
              <mesh position={[20, 14, 0]}>
                <Text
                  position={[-20, 8, 0]}
                  fontSize={8.75}
                  letterSpacing={-0.05}
                  color="white"
                  ref={textRef}
                >
                  {text}
                </Text>
              </mesh>
            </mesh>
          </mesh>
        </group>
      </group>
    </>
  );
};

export default PlanetCreator;
