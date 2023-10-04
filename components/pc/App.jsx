import './index.css'
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
  const [restore, setRestore] = useState(0)
  const [show, setShow] = useState(0)
  return (
    <>
      <Canvas shadows>
        <Suspense fallback={<LoadingScreen />}>
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

          <Environment
            background={false}
            files={process.env.PUBLIC_URL + '/textures/belfast.hdr'}
          />
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
          <FloatingText exclamation={exclamation} />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
