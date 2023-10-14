import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export function SpeechBubbleRadiologist() {
  const cloudRadiologist = useLoader(GLTFLoader, 'models/cloudRadiologist.glb')

  useEffect(() => {
    cloudRadiologist.scene.scale.set(15, 15, 15)
    cloudRadiologist.scene.position.set(-2.7, 1.7, 0.9)
    cloudRadiologist.scene.rotation.y = -2
    cloudRadiologist.scene.rotation.x = 0
    cloudRadiologist.scene.rotation.z = 0
  }, [cloudRadiologist])

  return <primitive object={cloudRadiologist.scene} />
}
