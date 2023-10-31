import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export function Rooms({ full }) {
  /**
   * loading of MRI room dependent from the 'full' hook
   */
  const rooflessMriRoom = useLoader(GLTFLoader, 'models/roofless_mri.glb')
  const fullMriRoom = useLoader(GLTFLoader, 'models/full_mri.glb')

  useEffect(() => {
    rooflessMriRoom.scene.scale.set(1, 1, 1)
    rooflessMriRoom.scene.position.set(3, 0.2, -0.5)
  }, [rooflessMriRoom])

  useEffect(() => {
    fullMriRoom.scene.scale.set(1, 1, 1)
    fullMriRoom.scene.position.set(3, 0.2, -0.5)
  }, [fullMriRoom])

  if (full === true) {
    return <primitive object={fullMriRoom.scene} />
  } else {
    return <primitive object={rooflessMriRoom.scene} />
  }
}
