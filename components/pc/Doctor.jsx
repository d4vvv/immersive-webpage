import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
/**
 *import of doctor via gltfjsx
 */

export function Doctor(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    'models/animowany_doktorek.glb'
  )
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.idle.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='Armature' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name='Beard'
            geometry={nodes.Beard.geometry}
            material={materials['Material.002']}
            skeleton={nodes.Beard.skeleton}
          />
          <skinnedMesh
            name='belt'
            geometry={nodes.belt.geometry}
            material={materials['Material.021']}
            skeleton={nodes.belt.skeleton}
          />
          <skinnedMesh
            name='Body'
            geometry={nodes.Body.geometry}
            material={materials['Material.001']}
            skeleton={nodes.Body.skeleton}
          />
          <skinnedMesh
            name='button'
            geometry={nodes.button.geometry}
            material={materials['Material.012']}
            skeleton={nodes.button.skeleton}
          />
          <skinnedMesh
            name='button1'
            geometry={nodes.button1.geometry}
            material={materials['Material.013']}
            skeleton={nodes.button1.skeleton}
          />
          <skinnedMesh
            name='button2'
            geometry={nodes.button2.geometry}
            material={materials['Material.014']}
            skeleton={nodes.button2.skeleton}
          />
          <skinnedMesh
            name='button3'
            geometry={nodes.button3.geometry}
            material={materials['Material.015']}
            skeleton={nodes.button3.skeleton}
          />
          <skinnedMesh
            name='button4'
            geometry={nodes.button4.geometry}
            material={materials['Material.016']}
            skeleton={nodes.button4.skeleton}
          />
          <skinnedMesh
            name='button5'
            geometry={nodes.button5.geometry}
            material={materials['Material.017']}
            skeleton={nodes.button5.skeleton}
          />
          <skinnedMesh
            name='button6'
            geometry={nodes.button6.geometry}
            material={materials['Material.018']}
            skeleton={nodes.button6.skeleton}
          />
          <skinnedMesh
            name='button7'
            geometry={nodes.button7.geometry}
            material={materials['Material.019']}
            skeleton={nodes.button7.skeleton}
          />
          <skinnedMesh
            name='button8'
            geometry={nodes.button8.geometry}
            material={materials['Material.020']}
            skeleton={nodes.button8.skeleton}
          />
          <skinnedMesh
            name='coat'
            geometry={nodes.coat.geometry}
            material={materials['Material.007']}
            skeleton={nodes.coat.skeleton}
          />
          <skinnedMesh
            name='Eye'
            geometry={nodes.Eye.geometry}
            material={materials['Material.004']}
            skeleton={nodes.Eye.skeleton}
          />
          <skinnedMesh
            name='Head_hair'
            geometry={nodes.Head_hair.geometry}
            material={materials['Material.003']}
            skeleton={nodes.Head_hair.skeleton}
          />
          <skinnedMesh
            name='loafer_l'
            geometry={nodes.loafer_l.geometry}
            material={materials['Material.009']}
            skeleton={nodes.loafer_l.skeleton}
          />
          <skinnedMesh
            name='loafer_r'
            geometry={nodes.loafer_r.geometry}
            material={materials['Material.010']}
            skeleton={nodes.loafer_r.skeleton}
          />
          <skinnedMesh
            name='Shirt'
            geometry={nodes.Shirt.geometry}
            material={materials['Material.006']}
            skeleton={nodes.Shirt.skeleton}
          />
          <skinnedMesh
            name='stethescope'
            geometry={nodes.stethescope.geometry}
            material={materials['Material.011']}
            skeleton={nodes.stethescope.skeleton}
          />
          <skinnedMesh
            name='tie'
            geometry={nodes.tie.geometry}
            material={materials['Material.008']}
            skeleton={nodes.tie.skeleton}
          />
          <skinnedMesh
            name='trouser'
            geometry={nodes.trouser.geometry}
            material={materials['Material.005']}
            skeleton={nodes.trouser.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/animowany_doktorek.glb')
