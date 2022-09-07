/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/calc-test.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['calculator-base'].geometry} material={materials.baseMaterial} />
      <mesh geometry={nodes['calculator-base_1'].geometry} material={materials.buttonsMaterial} />
      <mesh geometry={nodes['calculator-base_2'].geometry} material={materials.buttonsBaseMaterial} />
      <mesh geometry={nodes['calculator-base_3'].geometry} material={materials.displayMaterial} />
      <mesh geometry={nodes['calculator-base_4'].geometry} material={materials.signMaterial} />
      <mesh geometry={nodes['calculator-base_5'].geometry} material={materials.dropMaterial} />
      <mesh geometry={nodes['calculator-base_6'].geometry} material={materials.dropButtonMaterial} />
    </group>
  )
}

useGLTF.preload('/calc-test.gltf')
