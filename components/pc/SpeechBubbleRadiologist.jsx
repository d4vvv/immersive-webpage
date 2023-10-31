import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MeshBasicMaterial } from 'three'
export function SpeechBubbleRadiologist() {
  /**
   * Loading, scaling, positioning and rotating the speech bubble model
   */
  const cloudRadiologist = useLoader(GLTFLoader, 'models/cloudRadiologist.glb')

  useEffect(() => {
    cloudRadiologist.scene.scale.set(15, 15, 15)
    cloudRadiologist.scene.position.set(-2.7, 1.7, 0.9)
    cloudRadiologist.scene.rotation.y = -2
    cloudRadiologist.scene.rotation.x = 0
    cloudRadiologist.scene.rotation.z = 0
    /**
     * Making the object semi-transparent
     */
    cloudRadiologist.scene.traverse((child) => {
      if (child.isMesh) {
        const transparentMaterial = new MeshBasicMaterial({
          transparent: true,
          opacity: 0.8,
        })
        child.material = transparentMaterial
      }
    })
  }, [cloudRadiologist])

  return <primitive object={cloudRadiologist.scene} />
}
