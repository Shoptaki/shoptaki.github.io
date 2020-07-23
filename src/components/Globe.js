import React, { useRef, useMemo } from 'react';
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

import world_png from "../images/world_map.png";

extend({ OrbitControls })

function Sphere({back}) {
  const texture = useMemo(() => new THREE.TextureLoader().load(world_png), [])
  
  return (
    <group>
      <mesh visible position={[0, 0.25, 0]} castShadow >
        <sphereBufferGeometry attach="geometry" args={[2.75, 32, 32]} />
        <meshBasicMaterial attach="material" transparent opacity={back ? 0.4 : 1} depthWrite={false} side={back ? THREE.BackSide : THREE.FrontSide}>
          <primitive attach="map" object={texture} />
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}


const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  useFrame(() => orbitRef.current.update());

  return (
    <orbitControls
      autoRotate
      enableZoom={false}
      enablePan={false}
      maxPolarAngle={1.2 * Math.PI / 3}
      minPolarAngle={1.2 * Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

function Light({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}

const Globe = () => {
  const isBrowser = typeof window !== "undefined";
 
  return (
    <>
      {isBrowser && (
        <Canvas id="canvas" style={{width: window.innerWidth / 2, height: '36rem', position: 'absolute', top: '8rem', left: '50%'}} >
          <Controls />
          
          <Sphere />
          <Sphere back />
          <Light brightness={10} color={"white"} />
        </Canvas>
      )}
    </>
  );
}

export default Globe;

