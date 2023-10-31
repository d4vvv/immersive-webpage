import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import React, { useState, Suspense } from 'react'
import { Rooms } from './Rooms'
import { Scene } from './Scene'
import { FloatingText } from './FloatingText'
import { Tablet } from './Tablet'
import { Glass } from './Glass'
import { Vr } from './Vr'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { LoadingScreen } from './LoadingScreen'
import { Ground } from './Ground'
function App() {
  /**
   * Main file containing the initialization of entire scene.
   * Hooks below are used to initialize and track the values of components
   * In case a re-render is needed
   */
  const [defaultCameraPosition, setDefaultCameraPosition] = useState([
    -2.25, 4.5, -4.2,
  ])
  const [fov, setFov] = useState(90)
  const [target, setTarget] = useState([0, 0.35, 0])
  const [rotation, setRotation] = useState(false)
  const [zoom, setZoom] = useState(false)
  const [exclamation, setExclamation] = useState(4)
  const [glass, setGlass] = useState(0)
  const [full, setFull] = useState(false)
  const [keys, setKeys] = useState(false)
  const [pan, setPan] = useState(false)
  const [restore, setRestore] = useState(0)
  const [show, setShow] = useState(0)
  return (
    /**
     * <main> - responsible for making the Canvas element full-screen
     * <Canvas> - responsible for setting up the camera
     * <Suspense> - responsible for display of loading screen untill the website is loaded
     * <OrbitControls> - responsible for controll of the movement of camera
     * <PerspectiveCamera> - responsible for setting up the camera for the scene
     * <color> - tag used to create beige background
     * <Environment> - responsible for setting up the lights for the scene according to the hdr texture
     * <ambientLight> - provides omnidirectional light
     * <Rooms> - responsible for display of MRI building textures, passed hook determines the roofless or full building
     * <Tablet> - responsible for display of tablet on the radiologist table
     * <Vr> - responsible for the display of VR on the radiologist table
     * <Glass> - responsible for display of black window, passed hooks determine whether it should be displayed or not
     * <Ground> - responsible for reflective ground
     * <Scene> - respponsible for animations of camera and environment, along with display of interactive elements.
     * passed hooks provide for the functionality of changing the look of the scene, the hooks are as follows:
     * show = responsible for current set of animated people and objects on the scene
     * restore = resets the camera to default position
     * defaultCameraPosition = specifies the camera position to move back to
     * setExclamation = responsible for display of exclamation marks
     * setGlass = responsible for display of black glass element
     * setFull = responsible for type of display of MRI room
     * <FloatingText> - responsible for the text visible in the scene
     */
    <main className={'scroll-smooth h-screen'}>
      <Canvas shadows>
        <Suspense fallback={<LoadingScreen />}>
          <OrbitControls
            maxPolarAngle={Math.PI * 0.5}
            target={target}
            enableRotate={rotation}
            enableZoom={zoom}
            enableKeys={keys}
            enablePan={pan}
          />
          <PerspectiveCamera
            makeDefault
            fov={fov}
            position={defaultCameraPosition}
          />
          <color attach='background' args={['#f5efe6']} />

          <Environment background={false} files={'textures/belfast.hdr'} />
          <ambientLight color='wheat' intensity={1} />
          <Rooms full={full} />

          <Tablet />
          <Vr />
          <Glass glass={glass} setGlass={setGlass} />
          <Ground />
          <Scene
            show={show}
            restore={restore}
            defaultCameraPosition={defaultCameraPosition}
            setShow={setShow}
            setRestore={setRestore}
            setTarget={setTarget}
            setRotation={setRotation}
            setExclamation={setExclamation}
            setZoom={setZoom}
            setGlass={setGlass}
            setDefaultCameraPosition={setDefaultCameraPosition}
            setFull={setFull}
          />
          <FloatingText
            exclamation={exclamation}
            setExclamation={setExclamation}
          />
        </Suspense>
      </Canvas>
    </main>
  )
}

export default App
