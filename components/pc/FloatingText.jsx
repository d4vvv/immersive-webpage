import React, { useState } from 'react'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
export function FloatingText({ exclamation }) {
  const [hover, setHover] = useState(false)

  if (exclamation === 1) {
    return (
      <>
        <mesh rotation={[0, -0.1, 0]} position={[1.97, 1.9, -0.5]}>
          <planeGeometry attach='geometry' args={[1.5, 1]} />
          <meshBasicMaterial
            attach='material'
            color='beige'
            transparent
            opacity={0.5}
          />
        </mesh>

        <Text
          fontSize={0.055} // Adjust font size as per your requirement
          position={[1.9, 2, -0.4]} // Set the position of the text in 3D space
          color='blue' // Set the text color
          anchorX='center' // Center the text horizontally
          anchorY='middle' // Center the text vertically
          rotation={[0, -0.1, 0]}
        >
          {`
                  Showcasing medical apparatus

VR technology can be effectively used to present
sizable medical equipment in a realistic
and immersive way. For instance, we can recreate
the indoors of a mobile MRI unit within
the VR environment. This can help introduce
potential patients and medical personnel
to the advantages and disadvantages of mobile MRI.`}
        </Text>
      </>
    )
  } else if (exclamation === 2) {
    return (
      <>
        <mesh rotation={[0, 1.6, 0]} position={[-1.1, 1.92, 0.65]}>
          <planeGeometry attach='geometry' args={[3.3, 2.1]} />
          <meshBasicMaterial
            attach='material'
            color='beige'
            transparent
            opacity={0.5}
          />
        </mesh>
        <Text
          fontSize={0.15}
          position={[-1, 2, 0.9]}
          color='blue'
          anchorX='center'
          anchorY='middle'
          rotation={[0, 1.6, 0]}
        >
          {`
                                  VR-supported diagnostics
                                        and collaboration

              VR technology can be used to support 
              diagnostic processes in a variety of 
              ways, including visualization and analysis
              of medical images. This can help radiologists
              visualize and analyze complex anatomical 
              structures.`}
        </Text>
      </>
    )
  } else if (exclamation === 3) {
    return (
      <>
        <mesh rotation={[0, -2, 0]} position={[-2.58, 2.15, 0.9]}>
          <planeGeometry attach='geometry' args={[1.6, 1.4]} />
          <meshBasicMaterial
            side={THREE.DoubleSide}
            attach='material'
            color='beige'
            transparent
            opacity={0.5}
          />
        </mesh>

        <Text
          fontSize={0.1}
          position={[-2.6, 2.2, 0.5]}
          color='blue'
          anchorX='center'
          anchorY='middle'
          rotation={[0, -2, 0]}
        >
          {`
                       Patient's education
                       and information

                     VR can be utilized to
                     create simulations of
                     radiology procedures 
                     to help patients
                     understand the medical
                     procedures and be better
                     informed about their condition
                     and treatment options.`}
        </Text>
      </>
    )
  } else if (exclamation === 4) {
    return (
      <Text
        fontSize={1}
        position={[1.6, 1.6, -0.5]}
        color='blue'
        anchorX='center'
        anchorY='middle'
        rotation={[0, 0, 0]}
      ></Text>
    )
  } else {
    return null
  }
}
