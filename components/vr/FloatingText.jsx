import React from 'react'
import { Text } from '@react-three/drei'
import { SpeechBubbleMri } from './SpeechBubbleMri'
import { SpeechBubbleRadiologist } from './SpeechBubbleRadiologist'
export function FloatingText({ exclamation }) {
  if (exclamation === 1) {
    return (
      <>
        <SpeechBubbleMri />
        <Text
          fontSize={0.06} // Adjust font size as per your requirement
          position={[1.8, 1.9, -0.4]} // Set the position of the text in 3D space
          color='blue' // Set the text color
          anchorX='center' // Center the text horizontally
          anchorY='middle' // Center the text vertically
          letterSpacing={0.05}
          rotation={[0, -0.1, 0]}
        >
          {`
            Showcasing medical apparatus

  VR technology can be effectively used to
   present sizable medical equipment in a 
   realistic and immersive way. For instance,
  we can recreate the indoors of a mobile MRI
 unit  within  the  VR environment. This can help
introduce potential patients and medical personnel
to the advantages and disadvantages of mobile MRI.`}
        </Text>
      </>
    )
  } else if (exclamation === 2) {
    return (
      <>
        <SpeechBubbleMri />
        <Text
          fontSize={0.06}
          position={[1.7, 1.89, -0.4]}
          color='blue'
          anchorX='center'
          anchorY='middle'
          letterSpacing={0.05}
          rotation={[0, -0.1, 0]}
        >
          {`
 VR-supported diagnostics and collaboration

  VR technology can be used to support 
  diagnostic processes in  a variety of ways,
 including visualization and analysis of medical
images. This can help radiologists visualize and
analyze complex anatomical structures.`}
        </Text>
      </>
    )
  } else if (exclamation === 3) {
    return (
      <>
        <SpeechBubbleRadiologist />
        <Text
          fontSize={0.08}
          position={[-2.6, 2.2, 0.5]}
          color='blue'
          anchorX='center'
          anchorY='middle'
          letterSpacing={0.05}
          rotation={[0, -2, 0]}
        >
          {`
    Patient's education and information

    VR can be utilized to create simulations
   of radiology procedures to help patients
  understand the medical procedures and be
 better informed about their condition and
treatment options.`}
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
