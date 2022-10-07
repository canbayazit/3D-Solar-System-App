/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import { OrbitControls, Stars, Text, useBounds } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import sunTexture from "../../Assets/img/PlanetsTexture/sunmap2.png";
import * as THREE from "three";
import { textures } from "../../Constant/planet_image/image";
import { useDispatch, useSelector } from "react-redux";
import { setClick, setPlanetIndex, setPosition } from "../../Store/PlanetSlice";
import { setIsSun } from "../../Store/StarSlice";
const PlanetCreator = () => {
  const [id, setID] = useState(null);
  const [distance, setDistance] = useState();
  const [value, setValue] = useState(50);

  const sunMap = useLoader(TextureLoader, sunTexture);
  const vec = new THREE.Vector3();

  const opacityRef = useRef();

  const dispatch = useDispatch();
  const { planets, click, position } = useSelector((store) => store.planets);
  const { stars, isSun } = useSelector((store) => store.stars);

  const api = useBounds();
  const planetOrbitRef = useRef([]);
  const targetOrbitRef = useRef([]);
  const targetRef = useRef([]);
  const targetGroupRef = useRef([]);
  const textRef = useRef([]);
  const planetRef = useRef([]);
  const targetRingRef = useRef([]);
  const targetRing2Ref = useRef([]);
  const ringRef = useRef([]);
  const ringOuterRef = useRef([]);
  const ringOrbitRef = useRef([]);
  const ringOrbitGeometryRef = useRef([]);
  const textMeshRef = useRef([]);
  const sunTextRef = useRef();
  const sunRef = useRef();

  const handlePlanetClick = (index, position) => {
    dispatch(setClick(true));
    dispatch(setPlanetIndex(index));
    dispatch(setPosition(position));
  };

  const handleStarClick = (index, position) => {
    dispatch(setClick(true));
    dispatch(setIsSun(true));
    dispatch(setPlanetIndex(index));
    dispatch(setPosition(position));
  };

  useFrame((state) => {
    if (click === false) {
      // console.log("click içinde planet Index",planetIndex)
      // console.log("click içinde planet Index",planetRef.current[planetIndex].position)
      // state.camera.lookAt(-11292.054273159407,11470.923208638555,-399.3228425757357);
      // state.camera.position.lerp(vec.set(planetRef.current[planetIndex].position.x,planetRef.current[planetIndex].position.y,planetRef.current[planetIndex].position.z-450),0.5);
      // state.camera.updateProjectionMatrix();
    }
  });

  useEffect(() => {
    setValue(50);
    planets.map((item, index) => {
      index === planets.length - 1 && setDistance(500 * item.distance * 2);
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
  });
  // console.log("position", position);
  // console.log("position/500", position / 500);
  // useFrame(state=>{
  //   if (click) {
  //     // console.log("click içinde planet Index",planetIndex)
  //     // console.log("click içinde planet Index",planetRef.current[planetIndex].position)
  //     state.camera.lookAt(planetRef.current[planetIndex].position);
  //     state.camera.position.lerp(vec.set(planetRef.current[planetIndex].position.x,planetRef.current[planetIndex].position.y,planetRef.current[planetIndex].position.z-450),0.5);
  //     state.camera.updateProjectionMatrix();
  //   }
  // })

  useFrame(({ clock, camera, state, delta }) => {
    // const elapsedTime = clock.getElapsedTime();
    // earthRef.current.rotation.y = elapsedTime / 6;
    let speed = 0.002;
    sunTextRef.current.quaternion.copy(camera.quaternion);
    sunTextRef.current.rotation.copy(camera.rotation);
    // planetOrbitRef.current[0].rotation.y += speed;
    // targetOrbitRef.current[0].rotation.y += speed;
    // targetRef.current[0].rotation.y -= speed;
    targetGroupRef.current[0].quaternion.copy(camera.quaternion);
    targetGroupRef.current[0].rotation.copy(camera.rotation);
    // planetOrbitRef.current[1].rotation.y += speed / 2;
    // targetOrbitRef.current[1].rotation.y += speed / 2;
    // targetRef.current[1].rotation.y -= speed / 2;
    targetGroupRef.current[1].quaternion.copy(camera.quaternion);
    targetGroupRef.current[1].rotation.copy(camera.rotation);
    // planetOrbitRef.current[2].rotation.y += speed / 3;
    // targetOrbitRef.current[2].rotation.y += speed / 3;
    // targetRef.current[2].rotation.y -= speed / 3;
    targetGroupRef.current[2].quaternion.copy(camera.quaternion);
    targetGroupRef.current[2].rotation.copy(camera.rotation);
    // planetOrbitRef.current[3].rotation.y += speed / 4;
    // targetOrbitRef.current[3].rotation.y += speed / 4;
    // targetRef.current[3].rotation.y -= speed / 4;
    targetGroupRef.current[3].quaternion.copy(camera.quaternion);
    targetGroupRef.current[3].rotation.copy(camera.rotation);
    // planetOrbitRef.current[4].rotation.y += speed / 10;
    // targetOrbitRef.current[4].rotation.y += speed / 10;
    // targetRef.current[4].rotation.y -= speed / 10;
    targetGroupRef.current[4].quaternion.copy(camera.quaternion);
    targetGroupRef.current[4].rotation.copy(camera.rotation);
    // planetOrbitRef.current[5].rotation.y += speed / 20;
    // targetOrbitRef.current[5].rotation.y += speed / 20;
    // targetRef.current[5].rotation.y -= speed / 20;
    targetGroupRef.current[5].quaternion.copy(camera.quaternion);
    targetGroupRef.current[5].rotation.copy(camera.rotation);
    // planetOrbitRef.current[6].rotation.y += speed / 30;
    // targetOrbitRef.current[6].rotation.y += speed / 30;
    // targetRef.current[6].rotation.y -= speed / 30;
    targetGroupRef.current[6].quaternion.copy(camera.quaternion);
    targetGroupRef.current[6].rotation.copy(camera.rotation);
    // planetOrbitRef.current[7].rotation.y += speed / 50;
    // targetOrbitRef.current[7].rotation.y += speed / 50;
    // targetRef.current[7].rotation.y -= speed / 50;
    targetGroupRef.current[7].quaternion.copy(camera.quaternion);
    targetGroupRef.current[7].rotation.copy(camera.rotation);

    // ringOrbitRef.current[0].quaternion.copy(camera.quaternion);
    // ringOrbitRef.current[0].rotation.copy(camera.rotation);

    // planetOrbitRef.current[5].rotation.y += index===0 ? 0 :  0.0001;
    // targetOrbitRef.current[5].rotation.y +=  index===0 ? 0 :  0.0001;
    // targetRef.current[5].rotation.y -= index===0 ? 0 :  0.0001;
    // targetGroupRef.current[5].quaternion.copy(camera.quaternion);
    // targetGroupRef.current[5].rotation.copy(camera.rotation);
    // planetOrbitRef.current[3].rotation.y += 0.001;
    // targetOrbitRef.current[3].rotation.y += 0.001;
    // targetRef.current[3].rotation.y -= 0.001;
    // targetGroupRef.current[3].quaternion.copy(camera.quaternion);
    // targetGroupRef.current[3].rotation.copy(camera.rotation);
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
    // console.log("merkür",1500*distanceMercury/constant)
    // console.log("venus",1500*distanceVenus/constant)
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

    // console.log()
    // console.log("merkür",distanceMercury)
    // console.log("venus",distanceVenus)
    // console.log("earth ",distanceEarth)
    // console.log("juppiter",distanceJupiter)
    // console.log("merkür",ringOrbitGeometryRef.current[0].opacity)
    // console.log("venus",ringOrbitGeometryRef.current[1].opacity)
    // console.log("earth ",ringOrbitGeometryRef.current[2].opacity)
    // console.log("mars",ringOrbitGeometryRef.current[3].opacity)
    // console.log(ringOrbitRef.current[0].opacity)

    // value = value - 40
    // ringOrbitGeometryRef.current[7].__r3f.memoizedProps.args[1]-=1
    // ringOrbitRef.ringOrbitGeometryRef.current[7].parameters.outerRadius=15150
    //  ringOrbitRef.current[7].geometry.parameters.outerRadius=15550;
    // console.log((distance/constant)*10)
    // console.log(ringOrbitGeometryRef.current[7].boundingSphere.radius)
    // console.log(ringOrbitGeometryRef.current[7].__r3f.memoizedProps.args[1])
    // console.log(planetOrbitRef.current[7].rotation)
    // ringOrbitGeometryRef.current[7].parameters.outerRadius -=1000
    // console.log(ringOrbitRef.current[7])

    // ringOrbitGeometryRef.current[7].parameters.outerRadius = 0
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
      <OrbitControls
        enableZooms={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={false}
        screenSpacePanning={false}
        target={click ? [position, 0, 0] : [0, 0, 0]}
        maxDistance={click ? 600 : 80000}
        minDistance={click ? 500 : 450}
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
            <sphereGeometry args={[128, 128, 128]} />
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
              onClick={(e) =>(e.stopPropagation(), handleStarClick(index, 1000 * item.distance))}
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
                    : [1000 * item.distance, 1000 * item.distance + value, 200]
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
            <group ref={(el) => (planetOrbitRef.current[index] = el)}>
              <mesh
                ref={(el) => (planetRef.current[index] = el)}
                position={[1000 * item.distance, 0, 0]}
                castShadow
              >
                <sphereGeometry args={[35, 50, 50]} />
                <meshStandardMaterial map={planetMap} />
              </mesh>
              <mesh
                ref={(el) => (ringRef.current[index] = el)}
                position={[1000 * item.distance, 0, 0]}
                rotation-y={Math.PI / 8}
                rotation-x={Math.PI / 2.5}
                receiveShadow
                visible={item.name === "Saturn" ? true : false}
              >
                <ringGeometry args={[35, 70, 55]} />
                <meshStandardMaterial
                  map={saturnRing}
                  side={THREE.DoubleSide}
                />
              </mesh>
              <mesh
                ref={(el) => (ringOuterRef.current[index] = el)}
                position={[1000 * item.distance, 0, 0]}
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
                position={[1000 * item.distance, 0, 0]}
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
                position={[1000 * item.distance, 0, 0]}
                onPointerOver={(e) => (e.stopPropagation(), setID(item.id))}
                onPointerOut={(e) => (e.stopPropagation(), setID(null))}
              >
                <mesh ref={(el) => (targetGroupRef.current[index] = el)}>
                  <mesh ref={(el) => (targetRingRef.current[index] = el)}>
                    <ringGeometry args={[16.2, 16.5, 500]} />
                    <meshStandardMaterial
                      ref={opacityRef}
                      color={item.color}
                      opacity={id === index + 1 ? 1 : 0.8}
                      transparent
                      side={THREE.DoubleSide}
                    />
                  </mesh>
                  {/* <mesh
                    ref={(el) => (targetRing2Ref.current[index] = el)}
                    onClick={(e) => (
                      e.stopPropagation(),
                      e.button === 0 &&
                        api.refresh(targetRing2Ref.current[index]).fit(),
                      setPosition(1000 * item.distance),
                      setClicked(true),
                      setIndex(index)
                    )}
                  >
                    <ringGeometry args={click ? [0, 0, 0]: [0, 4.5, 55]}></ringGeometry>
                    <meshStandardMaterial
                      ref={opacityRef}
                      opacity={0}
                      transparent
                      side={THREE.DoubleSide}
                    />
                  </mesh> */}
                  <mesh
                    position={[20, 14, 0]}
                    onClick={(e) => (
                      e.stopPropagation(),
                      // e.delta <= 2 &&
                      //   api.refresh(planetRef.current[planetIndex]).fit(),
                      handlePlanetClick(index, 1000 * item.distance)
                    )}
                  >
                    <Text
                      position={[-20, 50, 0]}
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
