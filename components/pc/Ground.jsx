import React, { useEffect } from 'react'
import { MeshReflectorMaterial } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { LinearEncoding, RepeatWrapping, TextureLoader } from 'three'

export function Ground() {
  const normal = useLoader(TextureLoader, 'textures/terrain-normal.jpg')

  useEffect(() => {
    ;[normal].forEach((t) => {
      // horizontal endless wrapping of texture
      t.wrapS = RepeatWrapping
      // vertical endless wrapping of texture
      t.wrapT = RepeatWrapping
      // tiling the texture
      t.repeat.set(5, 5)
    })

    normal.encoding = LinearEncoding
  }, [normal])

  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[300, 300]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={normal}
        normalScale={[0.15, 0.15]}
        dithering={true}
        color={'wheat'}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        debug={0}
        reflectorOffset={0.2}
      />
    </mesh>
  )
}
