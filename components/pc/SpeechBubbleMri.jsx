import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MeshBasicMaterial } from 'three'
export function SpeechBubbleMri() {
  /**
   * Loading, scaling, positioning and rotating the speech bubble model
   */
  const cloudMri = useLoader(GLTFLoader, 'models/cloudMri.glb')

  useEffect(() => {
    cloudMri.scene.scale.set(13, 13, 13)
    cloudMri.scene.position.set(2.2, 1.6, -0.45)
    cloudMri.scene.rotation.y = -0.1
    cloudMri.scene.rotation.x = 0
    cloudMri.scene.rotation.z = 0
    /**
     * Making the object semi-transparent
     */
    cloudMri.scene.traverse((child) => {
      if (child.isMesh) {
        const transparentMaterial = new MeshBasicMaterial({
          transparent: true,
          opacity: 0.8,
        })
        child.material = transparentMaterial
      }
    })
  }, [cloudMri])

  return <primitive object={cloudMri.scene} />
}
