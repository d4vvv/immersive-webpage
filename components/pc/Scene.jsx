import * as THREE from 'three'
import React, { useEffect, useState } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Float } from '@react-three/drei'
import { Doctor } from './Doctor'
import { Patient } from './Patient'
import { Technician } from './Technician'
export function Scene({
  show,
  setShow,
  restore,
  setRestore,
  setTarget,
  setGlass,
  setExclamation,
  setRotation,
  setZoom,
  setFull,
}) {
  //Camera movement
  const { camera } = useThree()
  const duration = 1
  let elapsed = 0
  let elapsedTime = 0
  let elapsedTimeTable = 0
  let elapsedTimeDoc = 0
  let elapsedTimeOverTable = 0
  let elapsedTimeRadiologist = 0
  let elapsedTimeRadiologistRoom = 0

  const animateCameraTable = () => {
    const startPosition = new THREE.Vector3(1, 4.5, -4) // Initial camera position
    const endPosition = new THREE.Vector3(1, 1.8, -0.51) // Final camera position
    elapsedTimeTable += 1 / 60 // Increment time by the frame rate (60 FPS)
    const t = Math.min(elapsedTimeTable / duration, 1) // Clamp the value between 0 and 1
    const newPosition = new THREE.Vector3().lerpVectors(
      startPosition,
      endPosition,
      t
    )
    camera.position.copy(newPosition)

    // Call the animation on the next frame
    if (t < 1) {
      requestAnimationFrame(animateCameraTable)
    } else {
      setFull(true)
      setGlass(1)
      animateCameraDoc()
      setShow(1)
    }
  }

  const animateCameraDoc = () => {
    const startPosition = new THREE.Vector3(1, 1.8, -0.51)
    const endPosition = new THREE.Vector3(1, 1.9, 0.8)
    elapsedTimeDoc += 1 / 60
    const t = Math.min(elapsedTimeDoc / duration, 1)
    const newPosition = new THREE.Vector3().lerpVectors(
      startPosition,
      endPosition,
      t
    )
    camera.position.copy(newPosition)

    if (t < 1) requestAnimationFrame(animateCameraDoc)
    else {
      setTarget([1, 1.8, 0.5])
    }
  }

  const animateCameraStart = () => {
    const startPosition = new THREE.Vector3(-2.25, 4.5, -4.2)
    const endPosition = new THREE.Vector3(1, 4.5, -4)
    elapsedTime += 1 / 60
    const t = Math.min(elapsedTime / duration, 1)
    const newPosition = new THREE.Vector3().lerpVectors(
      startPosition,
      endPosition,
      t
    )
    camera.position.copy(newPosition)

    if (t < 1) {
      requestAnimationFrame(animateCameraStart)
    } else {
      animateCameraTable()
    }
  }

  const animateCameraDefault = () => {
    setGlass(2)
    const startPosition = new THREE.Vector3(1, 1.9, 0.8)
    const endPosition = new THREE.Vector3(-2.25, 4.5, -4.2)
    elapsed += 1 / 60
    const t = Math.min(elapsed / duration, 1)
    const newPosition = new THREE.Vector3().lerpVectors(
      startPosition,
      endPosition,
      t
    )
    camera.position.copy(newPosition)

    if (t < 1) {
      requestAnimationFrame(animateCameraDefault)
    } else {
      setRestore(0)
    }
  }

  const animateCameraOverTable = () => {
    const startPosition = new THREE.Vector3(-2.25, 4.5, -4.2)
    const endPosition = new THREE.Vector3(1, 4.5, -0.71)
    elapsedTimeOverTable += 1 / 60
    const t = Math.min(elapsedTimeOverTable / duration, 1)
    const newPosition = new THREE.Vector3().lerpVectors(
      startPosition,
      endPosition,
      t
    )
    camera.position.copy(newPosition)

    if (t < 1) {
      requestAnimationFrame(animateCameraOverTable)
    } else {
      setRestore(0)
      animateCameraRadiologistRoom()
    }
  }

  const animateCameraRadiologistRoom = () => {
    const startPosition = new THREE.Vector3(1, 4.5, -0.71)
    const endPosition = new THREE.Vector3(-2.25, 1.2, -0.71)
    elapsedTimeRadiologistRoom += 1 / 60
    const t = Math.min(elapsedTimeRadiologistRoom / 3, 1)
    const newPosition = new THREE.Vector3().lerpVectors(
      startPosition,
      endPosition,
      t
    )
    camera.position.copy(newPosition)

    if (t < 1) {
      requestAnimationFrame(animateCameraRadiologistRoom)
    } else {
      setGlass(1)
      setFull(true)
      setShow(2)
      animateCameraRadiologist()
      setTarget([-2, 1.8, -0.71])
    }
  }

  const animateCameraRadiologist = () => {
    const startPosition = new THREE.Vector3(-2.22, 1.2, -0.71)
    const endPosition = new THREE.Vector3(-3.7, 2, -0.71)
    elapsedTimeRadiologist += 1 / 60
    const t = Math.min(elapsedTimeRadiologist / duration, 1)
    const newPosition = new THREE.Vector3().lerpVectors(
      startPosition,
      endPosition,
      t
    )
    camera.position.copy(newPosition)

    if (t < 1) {
      requestAnimationFrame(animateCameraRadiologist)
    } else {
      setTarget([-3.4, 1.9, -0.71])
    }
  }

  if (restore === 1) {
    animateCameraDefault()
  }

  const arrowDoctor = useLoader(GLTFLoader, '/models/arrowDoctor.glb')
  const arrowDoor = useLoader(GLTFLoader, '/models/arrowDoor.glb')
  const arrowRadiologist = useLoader(GLTFLoader, '/models/arrowRadiologist.glb')

  useEffect(() => {
    arrowDoctor.scene.rotation.y = 1.5
  }, [arrowDoctor])

  useEffect(() => {
    arrowDoor.scene.rotation.y = 1.5
    arrowDoor.scene.rotation.y = 1.5
  }, [arrowDoor])

  useEffect(() => {
    arrowRadiologist.scene.rotation.y = 1.5
  }, [arrowRadiologist])

  const exclamationMarkDoctor = useLoader(
    GLTFLoader,
    '/models/exclamationMarkDoctor.glb'
  )
  const exclamationMarkGlass = useLoader(
    GLTFLoader,
    '/models/exclamationMarkGlass.glb'
  )

  useEffect(() => {
    exclamationMarkGlass.scene.rotation.y = 1.5
  }, [exclamationMarkGlass])

  const exclamationMarkDevices = useLoader(
    GLTFLoader,
    '/models/exclamationMarkDevices.glb'
  )

  useEffect(() => {
    exclamationMarkDevices.scene.rotation.y = 1.5
  }, [exclamationMarkDevices])

  const [hover0, setHover0] = useState(false)
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)
  const [hover4, setHover4] = useState(false)
  const [hover5, setHover5] = useState(false)
  const [hover6, setHover6] = useState(false)
  const [preload, setPreload] = useState(0)

  if (preload === 0) {
    setShow(2)
    setPreload(1)
    setShow(0)
  }
  if (show === 0) {
    return (
      <>
        <Doctor
          scale={[115, 115, 115]}
          position={[1, 0.2, 0.6]}
          rotation={[0, 3, 0]}
        />
        <Patient
          scale={[1, 1, 1]}
          position={[1.7, 0.18, -0.6]}
          rotation={[0, -1.6, 0]}
        />
        <Technician
          scale={[0.022, 0.022, 0.022]}
          position={[-3.12, 0.2, -0.8]}
          rotation={[0, 1.6, 0]}
        />

        <Float
          position={[1.15, 3, 0.7]}
          rotation={[0, 1.8, 1.8]}
          rotationIntensity={0.2}
          floatIntensity={0.3}
          speed={0.2}
        >
          <primitive
            object={arrowDoctor.scene}
            scale={hover0 ? 0.03 : 0.02}
            onClick={(event) => {
              setTarget([1, 1.5, -0.6])
              animateCameraStart()
              setRotation(true)
              setZoom(false)
            }}
            onPointerOver={(event) => {
              setHover0(true)
            }}
            onPointerOut={(event) => {
              setHover0(false)
            }}
          />
        </Float>

        <Float
          position={[-3, 3, -1.4]}
          rotation={[0, 1.8, 1.8]}
          rotationIntensity={0.2}
          floatIntensity={0.3}
          speed={0.2}
        >
          <primitive
            object={arrowRadiologist.scene}
            scale={hover5 ? 0.02 : 0.015}
            onClick={(event) => {
              setTarget([-2.2, 1.15, -0.71])
              animateCameraOverTable()
              setRotation(true)
              setZoom(false)
            }}
            onPointerOver={(event) => {
              setHover5(true)
            }}
            onPointerOut={(event) => {
              setHover5(false)
            }}
          />
        </Float>
      </>
    )
  } else if (show === 1) {
    return (
      <>
        <Technician
          scale={[0.022, 0.022, 0.022]}
          position={[-3.12, 0.2, -0.8]}
          rotation={[0, 1.6, 0]}
        />
        <Patient
          scale={[1, 1, 1]}
          position={[1.7, 0.18, -0.6]}
          rotation={[0, -1.6, 0]}
        />
        <Float
          position={[-0.3, 1.4, -4]}
          rotation={[1.5, 0, 3.2]}
          rotationIntensity={0.4}
          floatIntensity={0.2}
          speed={0.4}
        >
          <primitive
            object={arrowDoor.scene}
            scale={hover4 ? 0.03 : 0.02}
            onClick={(event) => {
              setTarget([0, 0.35, 0])
              setHover2(false)
              setHover1(false)
              animateCameraDefault()
              setRotation(false)
              setZoom(false)
              setFull(false)
              setShow(0)
              setHover4(false)
            }}
            onPointerOver={(event) => {
              setHover2(false)
              setHover1(false)
              setExclamation(5)
              setGlass(1)
              setHover4(true)
            }}
            onPointerOut={(event) => {
              setHover4(false)
            }}
          />
        </Float>

        <Float
          position={[1, 1.2, -0.5]}
          speed={0.5}
          rotationIntensity={0.2}
          floatIntensity={0.2}
        >
          <primitive
            object={exclamationMarkDoctor.scene}
            scale={hover1 ? 0.1 : 0.08}
            onPointerOver={(event) => {
              setHover2(false)
              setHover1(true)
              setExclamation(1)
              setGlass(1)
            }}
          />
        </Float>

        <Float
          position={[-1, 1.7, -1]}
          speed={0.5}
          rotationIntensity={0.2}
          floatIntensity={0.2}
        >
          <primitive
            object={exclamationMarkGlass.scene}
            scale={hover2 ? 0.1 : 0.08}
            onPointerOver={(event) => {
              setHover1(false)
              setHover2(true)
              setExclamation(2)
              setGlass(2)
            }}
          />
        </Float>
      </>
    )
  } else {
    return (
      <>
        <Doctor
          scale={[100, 100, 100]}
          position={[1, 0.2, 0.6]}
          rotation={[0, 3, 0]}
        />
        <Patient
          scale={[1, 1, 1]}
          position={[1.7, 0.18, -0.6]}
          rotation={[0, -1.6, 0]}
        />
        <Float
          position={[-3, 1.7, 1.5]}
          rotation={[1.5, 0, 0]}
          rotationIntensity={0.4}
          floatIntensity={0.2}
          speed={0.4}
        >
          <primitive
            object={arrowDoor.scene}
            scale={hover6 ? 0.03 : 0.02}
            onClick={(event) => {
              setTarget([0, 0.35, 0])
              setHover3(false)
              animateCameraDefault()
              setRotation(false)
              setZoom(false)
              setFull(false)
              setShow(0)
              setHover6(false)
              setGlass(2)
            }}
            onPointerOver={(event) => {
              setHover3(false)
              setExclamation(5)
              setGlass(1)
              setHover6(true)
            }}
            onPointerOut={(event) => {
              setHover6(false)
            }}
          />
        </Float>

        <Float
          position={[-2.4, 1.2, -0.8]}
          speed={0.5}
          rotationIntensity={0.2}
          floatIntensity={0.2}
        >
          <primitive
            object={exclamationMarkDevices.scene}
            scale={hover3 ? 0.1 : 0.08}
            onPointerOver={(event) => {
              setHover3(true)
              setExclamation(3)
              setGlass(2)
            }}
          />
        </Float>
      </>
    )
  }
}
