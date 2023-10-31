import React from 'react'
import { useProgress, Html } from '@react-three/drei'
import ClipLoader from 'react-spinners/ClipLoader'

export function LoadingScreen() {
  /**
   * Loading screen displayed before the website is ready
   * <Cliploader> is responsible for the selection of loading screen type
   */
  const { progress } = useProgress()

  return (
    <Html center>
      <div>
        <ClipLoader color={'#eedecb'} size={80} />
        <br />
        <br />
        LOADING
        <br />
        {Math.round(progress)}%
      </div>
    </Html>
  )
}
