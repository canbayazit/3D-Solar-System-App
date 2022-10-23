/* eslint-disable no-sequences */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import { OrbitControls, Stars, Text } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import sunTexture from "../../Assets/img/PlanetsTexture/sunmap2.png";
import * as THREE from "three";
import { starTexture, textures } from "../../Constant/planet_image/image";
import { useDispatch, useSelector } from "react-redux";
import { setClick, setImage, setPlanetArray, setPlanetIndex, setPositionX, setPositionZ, setRadius, setTexture } from "../../Store/PlanetSlice";
import { setIsSun } from "../../Store/StarSlice";
const PlanetCreator = () => {
  const [distance, setDistance] = useState();
  const [value, setValue] = useState(50);
  const dispatch = useDispatch();
  const { stars, isSun } = useSelector((store) => store.stars);
  const { planets, click,positionX, positionZ,speedStatus,rad,planetIndex } = useSelector((store) => store.planets);
  const sunMap = useLoader(TextureLoader, sunTexture);
  const planetOrbitRef = useRef([]);
  const targetOrbitRef = useRef([]);
  const targetRef = useRef([]);
  const targetGroupRef = useRef([]);
  const textRef = useRef([]);
  const planetRef = useRef([]);
  const ringRef = useRef([]);
  const ringOuterRef = useRef([]);
  const ringOrbitRef = useRef([]);
  const ringOrbitGeometryRef = useRef([]);
  const textMeshRef = useRef([]);
  const sunTextRef = useRef();
  const sunRef = useRef();
  const orbitControls = useRef();
  const handlePlanetClick = (index, rad,e) => {
    dispatch(setClick(true));
    dispatch(setPlanetIndex(index));
    dispatch(setRadius(rad));
    dispatch(setPlanetArray(planets));
    dispatch(setTexture(textures[index].texture));
    dispatch(setImage(textures[index].image));  
  };
  const handleStarClick = (index) => {
    dispatch(setClick(true));
    dispatch(setIsSun(true));
    dispatch(setPlanetIndex(index));
    dispatch(setPositionX(0));
    dispatch(setPositionZ(0));
    dispatch(setPlanetArray(stars));
    dispatch(setTexture(starTexture[index].texture));
    dispatch(setImage(starTexture[index].image));
  };

  useEffect(() => {
    let angles = planetOrbitRef.current[planetIndex].rotation.y
    dispatch(setPositionX(isSun ? 0 : Math.cos(angles)*rad))
    dispatch(setPositionZ(isSun ? 0 : -1*Math.sin(angles)*rad))
    setValue(50);
    planets.map((item, index) => {
      index === planets.length - 1 && setDistance(2000 * item.distance );
    });
    planets.name === "Neptune"
      ? (ringOuterRef.current.visible = true)
      : (ringOuterRef.current.visible = false);
    planets.name === "Neptune"
      ? (ringRef.current.visible = true)
      : (ringRef.current.visible = false);
    planets.name === "Saturn"
      ? (ringRef.current.visible = true)
      : (ringRef.current.visible = false);
  }, [dispatch, rad, planets, planetIndex, isSun]);

  useFrame(({camera }) => { 
    let speed = speedStatus ? click ? 0 : 0.002 : 0;
    planetRef.current[0].rotation.y +=0.001;
    planetRef.current[1].rotation.y +=0.001;
    planetRef.current[2].rotation.y +=0.001;
    planetRef.current[3].rotation.y +=0.001;
    planetRef.current[4].rotation.y +=0.001;
    planetRef.current[5].rotation.y +=0.001;
    planetRef.current[6].rotation.y +=0.001;
    planetRef.current[7].rotation.y +=0.001;    
    sunTextRef.current.quaternion.copy(camera.quaternion);
    sunTextRef.current.rotation.copy(camera.rotation);
    planetOrbitRef.current[0].rotation.y += speed;
    targetOrbitRef.current[0].rotation.y += speed;
    targetRef.current[0].rotation.y -= speed;
    targetGroupRef.current[0].quaternion.copy(camera.quaternion);
    targetGroupRef.current[0].rotation.copy(camera.rotation);
    planetOrbitRef.current[1].rotation.y += speed / 2;
    targetOrbitRef.current[1].rotation.y += speed / 2;
    targetRef.current[1].rotation.y -= speed / 2;
    targetGroupRef.current[1].quaternion.copy(camera.quaternion);
    targetGroupRef.current[1].rotation.copy(camera.rotation);
    planetOrbitRef.current[2].rotation.y += speed / 3;
    targetOrbitRef.current[2].rotation.y += speed / 3;
    targetRef.current[2].rotation.y -= speed / 3;
    targetGroupRef.current[2].quaternion.copy(camera.quaternion);
    targetGroupRef.current[2].rotation.copy(camera.rotation);
    planetOrbitRef.current[3].rotation.y += speed / 4;
    targetOrbitRef.current[3].rotation.y += speed / 4;
    targetRef.current[3].rotation.y -= speed / 4;
    targetGroupRef.current[3].quaternion.copy(camera.quaternion);
    targetGroupRef.current[3].rotation.copy(camera.rotation);
    planetOrbitRef.current[4].rotation.y += speed / 5;
    targetOrbitRef.current[4].rotation.y += speed / 5;
    targetRef.current[4].rotation.y -= speed / 5;
    targetGroupRef.current[4].quaternion.copy(camera.quaternion);
    targetGroupRef.current[4].rotation.copy(camera.rotation);
    planetOrbitRef.current[5].rotation.y += speed / 6;
    targetOrbitRef.current[5].rotation.y += speed / 6;
    targetRef.current[5].rotation.y -= speed / 6;
    targetGroupRef.current[5].quaternion.copy(camera.quaternion);
    targetGroupRef.current[5].rotation.copy(camera.rotation);
    planetOrbitRef.current[6].rotation.y += speed / 7;
    targetOrbitRef.current[6].rotation.y += speed / 7;
    targetRef.current[6].rotation.y -= speed / 7;
    targetGroupRef.current[6].quaternion.copy(camera.quaternion);
    targetGroupRef.current[6].rotation.copy(camera.rotation);
    planetOrbitRef.current[7].rotation.y += speed / 8;
    targetOrbitRef.current[7].rotation.y += speed / 8;
    targetRef.current[7].rotation.y -= speed / 8;
    targetGroupRef.current[7].quaternion.copy(camera.quaternion);
    targetGroupRef.current[7].rotation.copy(camera.rotation);

    let constant = 40000;
    let distanceSun = Math.sqrt(
      Math.pow(camera.position.x - sunRef.current.position.x, 2) +
        Math.pow(camera.position.y - sunRef.current.position.y, 2) +
        Math.pow(camera.position.z - sunRef.current.position.z, 2)
    );
    let distanceMercury = Math.sqrt(
      Math.pow(camera.position.x - planetRef.current[0].position.x, 2) +
        Math.pow(camera.position.y - planetRef.current[0].position.y, 2) +
        Math.pow(camera.position.z - planetRef.current[0].position.z, 2)
    );
    let distanceVenus = Math.sqrt(
      Math.pow(camera.position.x - planetRef.current[1].position.x, 2) +
        Math.pow(camera.position.y - planetRef.current[1].position.y, 2) +
        Math.pow(camera.position.z - planetRef.current[1].position.z, 2)
    );
    let distanceEarth = Math.sqrt(
      Math.pow(camera.position.x - planetRef.current[2].position.x, 2) +
        Math.pow(camera.position.y - planetRef.current[2].position.y, 2) +
        Math.pow(camera.position.z - planetRef.current[2].position.z, 2)
    );
    let distanceMars = Math.sqrt(
      Math.pow(camera.position.x - planetRef.current[3].position.x, 2) +
        Math.pow(camera.position.y - planetRef.current[3].position.y, 2) +
        Math.pow(camera.position.z - planetRef.current[3].position.z, 2)
    );
    let distanceJupiter = Math.sqrt(
      Math.pow(camera.position.x - planetRef.current[4].position.x, 2) +
        Math.pow(camera.position.y - planetRef.current[4].position.y, 2) +
        Math.pow(camera.position.z - planetRef.current[4].position.z, 2)
    );
    let distanceSaturn = Math.sqrt(
      Math.pow(camera.position.x - planetRef.current[5].position.x, 2) +
        Math.pow(camera.position.y - planetRef.current[5].position.y, 2) +
        Math.pow(camera.position.z - planetRef.current[5].position.z, 2)
    );
    let distanceUranus = Math.sqrt(
      Math.pow(camera.position.x - planetRef.current[6].position.x, 2) +
        Math.pow(camera.position.y - planetRef.current[6].position.y, 2) +
        Math.pow(camera.position.z - planetRef.current[6].position.z, 2)
    );
    let distanceNeptune = Math.sqrt(
      Math.pow(camera.position.x - planetRef.current[7].position.x, 2) +
        Math.pow(camera.position.y - planetRef.current[7].position.y, 2) +
        Math.pow(camera.position.z - planetRef.current[7].position.z, 2)
    );

    sunTextRef.current.fontSize = (1500 * distanceSun) / constant;
    textRef.current[0].fontSize = (1500 * distanceMercury) / constant;
    textRef.current[1].fontSize = (1500 * distanceVenus) / constant;
    textRef.current[2].fontSize = (1500 * distanceEarth) / constant;
    textRef.current[3].fontSize = (1500 * distanceMars) / constant;
    textMeshRef.current[0].opacity =
      distanceMercury > 60000 ? 0 : 1 / ((distanceMercury / constant) * 2);
    textMeshRef.current[1].opacity =
      distanceVenus > 60000 ? 0 : 1 / ((distanceVenus / constant) * 2);
    textMeshRef.current[2].opacity =
      distanceEarth > 60000 ? 0 : 1 / ((distanceVenus / constant) * 2);
    textMeshRef.current[3].opacity =
      distanceMars > 60000 ? 0 : 1 / ((distanceVenus / constant) * 2);

    textRef.current[4].fontSize = (1500 * distanceJupiter) / constant;
    textRef.current[5].fontSize = (1500 * distanceSaturn) / constant;
    textRef.current[6].fontSize = (1500 * distanceUranus) / constant;
    textRef.current[7].fontSize = (1500 * distanceNeptune) / constant;

    700 < distanceMercury
      ? (ringOrbitGeometryRef.current[0].opacity =
          (distanceMercury / constant) * 5)
      : (ringOrbitGeometryRef.current[0].opacity =
          (distanceMercury / constant) * 4);

    700 < distanceVenus
      ? (ringOrbitGeometryRef.current[1].opacity =
          (distanceVenus / constant) * 5)
      : (ringOrbitGeometryRef.current[1].opacity =
          (distanceVenus / constant) * 4);

    700 < distanceEarth
      ? (ringOrbitGeometryRef.current[2].opacity =
          (distanceEarth / constant) * 8)
      : (ringOrbitGeometryRef.current[2].opacity =
          (distanceEarth / constant) * 4);

    700 < distanceMars
      ? (ringOrbitGeometryRef.current[3].opacity =
          (distanceMars / constant) * 11)
      : (ringOrbitGeometryRef.current[3].opacity =
          (distanceMars / constant) * 4);

    700 < distanceJupiter
      ? (ringOrbitGeometryRef.current[4].opacity =
          (distanceJupiter / constant) * 13)
      : (ringOrbitGeometryRef.current[4].opacity =
          (distanceJupiter / constant) * 4);

    700 < distanceSaturn
      ? (ringOrbitGeometryRef.current[5].opacity =
          (distanceSaturn / constant) * 18)
      : (ringOrbitGeometryRef.current[5].opacity =
          (distanceSaturn / constant) * 4);

    700 < distanceUranus
      ? (ringOrbitGeometryRef.current[6].opacity =
          (distanceUranus / constant) * 20)
      : (ringOrbitGeometryRef.current[6].opacity =
          (distanceUranus / constant) * 4);

    700 < distanceNeptune
      ? (ringOrbitGeometryRef.current[7].opacity =
          (distanceNeptune / constant) * 25)
      : (ringOrbitGeometryRef.current[7].opacity =
          (distanceNeptune / constant) * 4);
  });

  return (
    <>
      <OrbitControls
        ref={orbitControls}
        enableZooms={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={false}
        screenSpacePanning={false}
        target={(click ? [positionX, 0, positionZ]: [0, 0, 0] )}
        maxDistance={click ? isSun ? 600 :300 : 120000}
        minDistance={click ? 170 : 450}
      />
      {stars.map((item, index) => (
        <group key={item.id} ref={sunRef} rotation={[0, 0, 0]}>
          <Stars
            radius={distance}
            depth={distance}
            saturation={2000}
            count={distance}
            fade={false}
            factor={200}
          ></Stars>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[150, 150, 150]} />
            <meshBasicMaterial map={sunMap} color={item.color} />
            <ambientLight intensity={0} />
            <pointLight
              castShadow
              position={[0, 40, 0]}
              intensity={0.75}
              distance={distance * 2}
              shadow-mapSize-height={512}
              shadow-mapSize-width={512}
            />
            <Text
              position={[0, 200, 0]}
              fontSize={1000.75}
              letterSpacing={-0.05}
              color="#fff"
              ref={sunTextRef}
              visible={isSun ? false : true}
              onClick={(e) =>(e.stopPropagation(), handleStarClick(index, 2000 * item.distance))}
            >
              {item.name}
            </Text>
          </mesh>
          {planets.map((item, index) => (
            <mesh
              ref={(el) => (ringOrbitRef.current[index] = el)}
              position={[0, 0, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              visible={click ? false : true}
              key={item.id}
            >
              <ringGeometry
                args={
                  click
                    ? [0, 0, 200]
                    : [2000 * item.distance, 2000 * item.distance + value, 200]
                }
              />
              <meshBasicMaterial
                ref={(el) => (ringOrbitGeometryRef.current[index] = el)}
                color={item.color}
                transparent
                opacity={1}
                side={THREE.DoubleSide}
              />
            </mesh>
          ))}
        </group>
      ))}
      {planets.map((item, index) => {
        const planetMap = useLoader(TextureLoader, textures[index].texture);
        const saturnRing =
          item.name === "Saturn" &&
          useLoader(TextureLoader, textures[index].ring);
        return (
          <group key={item.id}>
            <group ref={(el) => (planetOrbitRef.current[index] = el)} >
              <mesh
                ref={(el) => (planetRef.current[index] = el)}
                position={[2000 * item.distance, 0, 0]}
                castShadow                
              >
                <sphereGeometry args={[35, 50, 50]} />
                <meshStandardMaterial map={planetMap} />
              </mesh>
              <mesh
                ref={(el) => (ringRef.current[index] = el)}
                position={[2000 * item.distance, 0, 0]}
                rotation-y={Math.PI / 8}
                rotation-x={Math.PI / 2.5}
                receiveShadow
                visible={item.name === "Saturn" ? true : false}
              >
                <ringGeometry args={[45, 70, 105]} />
                <meshStandardMaterial
                  map={saturnRing}
                  side={THREE.DoubleSide}
                />
              </mesh>
              <mesh
                ref={(el) => (ringOuterRef.current[index] = el)}
                position={[2000 * item.distance, 0, 0]}
                rotation-y={Math.PI / 8}
                rotation-x={Math.PI / 2.5}
                receiveShadow
                visible={item.name === "Neptune" ? true : false}
              >
                <ringGeometry args={[70, 75.9, 200]} />
                <meshBasicMaterial color={"#252525"} side={THREE.DoubleSide} />
              </mesh>
              <mesh
                ref={(el) => (ringOuterRef.current[index] = el)}
                position={[2000 * item.distance, 0, 0]}
                rotation-y={Math.PI / 8}
                rotation-x={Math.PI / 2.5}
                receiveShadow
                visible={item.name === "Neptune" ? true : false}
              >
                <ringGeometry args={[105, 115.5, 200]} />
                <meshBasicMaterial color={"#252525"} side={THREE.DoubleSide} />
              </mesh>
            </group>
            <group
              ref={(el) => (targetOrbitRef.current[index] = el)}
              visible={click ? false : true}
              transparent
              opacity={0}
            >
              <mesh
                ref={(el) => (targetRef.current[index] = el)}
                position={[2000 * item.distance, 0, 0]}
                onPointerOver={(e) => (e.stopPropagation(), setID(item.id))}
                onPointerOut={(e) => (e.stopPropagation(), setID(null))}
             
              >
                <mesh ref={(el) => (targetGroupRef.current[index] = el)}>
                                    <mesh                    
                  onClick={(e) => (
                    e.stopPropagation(),                    
                    handlePlanetClick(index, 2000 * item.distance,e.object.position)
                    )}
                  >
                    <Text
                      position={[0, 100, 0]}
                      letterSpacing={-0.05}
                      color="white"
                      ref={(el) => (textRef.current[index] = el)}
                    >
                      <meshBasicMaterial
                        ref={(el) => (textMeshRef.current[index] = el)}
                        transparent
                        opacity={1}
                      />
                      {item.name}
                    </Text>
                  </mesh>
                </mesh>
              </mesh>
            </group>
          </group>
        );
      })}
    </>
  );
};

export default PlanetCreator;
