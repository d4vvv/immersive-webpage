import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export function Glass({ glass, setGlass }) {
  const window = useLoader(GLTFLoader, 'models/glass.glb')

  useEffect(() => {
    window.scene.scale.set(1, 1, 1)
    window.scene.position.set(3, 0.2, -0.5)
  }, [window])

  if (glass === 0) {
    setGlass(2)
    return <primitive object={window.scene} />
  } else if (glass === 1) {
    return <primitive object={window.scene} />
  } else {
    return null
  }
}
