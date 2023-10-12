import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Technician(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/technician.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.typing.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='Armature' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name='Body'
            geometry={nodes.Body.geometry}
            material={materials.Body}
            skeleton={nodes.Body.skeleton}
          />
          <skinnedMesh
            name='Bottoms'
            geometry={nodes.Bottoms.geometry}
            material={materials.Bottom}
            skeleton={nodes.Bottoms.skeleton}
          />
          <skinnedMesh
            name='Eyelashes'
            geometry={nodes.Eyelashes.geometry}
            material={materials.Body}
            skeleton={nodes.Eyelashes.skeleton}
          />
          <skinnedMesh
            name='Eyes'
            geometry={nodes.Eyes.geometry}
            material={materials.Body}
            skeleton={nodes.Eyes.skeleton}
          />
          <skinnedMesh
            name='Hair'
            geometry={nodes.Hair.geometry}
            material={materials.Hair}
            skeleton={nodes.Hair.skeleton}
          />
          <skinnedMesh
            name='Shoes'
            geometry={nodes.Shoes.geometry}
            material={materials.Shoes}
            skeleton={nodes.Shoes.skeleton}
          />
          <skinnedMesh
            name='Tops'
            geometry={nodes.Tops.geometry}
            material={materials.Top}
            skeleton={nodes.Tops.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/technician.glb')
