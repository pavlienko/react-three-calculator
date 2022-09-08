/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/calc-button.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["calc-button"].geometry}
        material={materials.buttonsMaterial}
      />
    </group>
  );
}

useGLTF.preload("/calc-button.gltf");
