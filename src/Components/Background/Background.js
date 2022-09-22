import { useLoader } from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../Assets/img/stars.jpg";
import React from 'react'

const Background = () => {
    const map = useLoader(TextureLoader, texture);
    let x =5;
    console.log(x);
    // const [cubeMap] = useLoader(CubeTextureLoader, [['px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr']])
  return (
  x
  )
}

export default Background