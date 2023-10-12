import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'
export function SpeechBubbleMri() {
  const cloudMri = useLoader(GLTFLoader, 'models/cloudMri.glb')

  useEffect(() => {
    cloudMri.scene.scale.set(1.5, 1.5, 1.5)
    cloudMri.scene.position.set(2.4, 1.32, -0.36)
    cloudMri.scene.rotation.y = 0
    cloudMri.scene.rotation.x = 1.6
    cloudMri.scene.rotation.z = -3
  }, [cloudMri])

  return <primitive object={cloudMri.scene} />
}
useGLTF.preload('models/cloudMri.glb')
