import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export function Tablet() {
  const tablet = useLoader(GLTFLoader, 'models/tablet.glb')

  useEffect(() => {
    tablet.scene.scale.set(0.01, 0.01, 0.01)
    tablet.scene.position.set(-2.4, 1, -2)
    tablet.scene.rotation.y = 1.57
    tablet.scene.rotation.x = 0.0
  }, [tablet])

  return <primitive object={tablet.scene} />
}
