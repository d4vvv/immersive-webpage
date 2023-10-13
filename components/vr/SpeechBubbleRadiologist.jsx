import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export function SpeechBubbleRadiologist() {
  const cloudRadiologist = useLoader(GLTFLoader, 'models/cloudRadiologist.glb')

  useEffect(() => {
    cloudRadiologist.scene.scale.set(2, 2, 2)
    cloudRadiologist.scene.position.set(-2.9, 1.45, 1.5)
    cloudRadiologist.scene.rotation.y = 0
    cloudRadiologist.scene.rotation.x = 1.6
    cloudRadiologist.scene.rotation.z = -1.2
  }, [cloudRadiologist])

  return <primitive object={cloudRadiologist.scene} />
}
