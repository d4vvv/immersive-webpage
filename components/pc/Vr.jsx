import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export function Vr() {
  /**
   * Loading, scaling, positioning and rotating the VR model
   */
  const vr = useLoader(GLTFLoader, 'models/vr.glb')

  useEffect(() => {
    vr.scene.scale.set(0.05, 0.05, 0.05)
    vr.scene.position.set(-2.4, 1.035, 1)
    vr.scene.rotation.y = -3
    vr.scene.rotation.x = 0
  }, [vr])

  return <primitive object={vr.scene} />
}
