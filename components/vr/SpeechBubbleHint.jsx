import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Text } from '@react-three/drei'
export function SpeechBubbleHint({ hint }) {
  const cloudHint = useLoader(GLTFLoader, 'models/cloudHint.glb')

  useEffect(() => {
    cloudHint.scene.scale.set(2.2, 2.2, 2.2)
    cloudHint.scene.position.set(3.15, 1.13, 0.8)
    cloudHint.scene.rotation.y = 0
    cloudHint.scene.rotation.x = 1.6
    cloudHint.scene.rotation.z = 1.8
  }, [cloudHint])

  if (hint === 1) {
    return (
      <>
        <primitive object={cloudHint.scene} />
        <Text
          fontSize={0.1} // Adjust font size as per your requirement
          position={[2.8, 1.85, 1.8]} // Set the position of the text in 3D space
          color='navy' // Set the text color
          anchorX='center' // Center the text horizontally
          anchorY='middle' // Center the text vertically
          letterSpacing={0.05}
          rotation={[0, -1.8, 0]}
        >
          {`
              Important

Some Vr devices provide limited 
support for web controllers. 
If your device is not displaying
them now, leave the playing area
with your headset on and re-enter
it again to load default models .

            `}
        </Text>
      </>
    )
  } else {
    return null
  }
}
