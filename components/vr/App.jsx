import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import React, { useState, Suspense } from 'react'
import { Rooms } from './Rooms'
import { Scene } from './Scene'
import { FloatingText } from './FloatingText'
import { Tablet } from './Tablet'
import { Glass } from './Glass'
import { Vr } from './Vr'
import { VRButton, XR, Controllers, Hands } from '@react-three/xr'
import { Player } from './Player'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { LoadingScreen } from './LoadingScreen'
function App() {
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
  const [vrMode, setVrMode] = useState(0)
  const [restore, setRestore] = useState(0)
  const [show, setShow] = useState(0)
  const [reset, setReset] = useState(0)
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)
  return (
    <main className={'scroll-smooth h-screen'}>
      <VRButton />
      <Canvas shadows>
        <Suspense fallback={<LoadingScreen />}>
          <XR
            onSessionStart={(event) => {
              setGlass(1)
              setVrMode(1)
              setFull(true)
              setShow(1)
            }}
            onSessionEnd={(event) => {
              setZoom(false)
              setRotation(false)
              setFull(false)
              setShow(0)
              setHover1(false)
              setHover2(false)
              setHover3(false)
              setVrMode(0)
              setGlass(2)
              setRestore(1)
            }}
          >
            <OrbitControls
              maxPolarAngle={Math.PI * 0.5}
              target={target}
              enableRotate={rotation}
              enableZoom={zoom}
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

            <Scene
              hover1={hover1}
              hover2={hover2}
              hover3={hover3}
              setHover1={setHover1}
              setHover2={setHover2}
              setHover3={setHover3}
              reset={reset}
              show={show}
              restore={restore}
              defaultCameraPosition={defaultCameraPosition}
              setReset={setReset}
              setVrMode={setVrMode}
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
            <FloatingText exclamation={exclamation} />
            <Player vrMode={vrMode} setVrMode={setVrMode} />
            <Controllers />
            <Hands />
          </XR>
        </Suspense>
      </Canvas>
    </main>
  )
}

export default App
