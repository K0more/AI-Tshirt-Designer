import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
    ref={shadows}
    temporal
    frames={60}
    alphaTest={0.85}
    rotation={[Math.PI / 2, 0, 0]}
    position={[0, 0, -0.14]}>
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={1}
        ambient={.40}
        position={[5, 5, -10]}
      />
       <RandomizedLight 
        amount={2}
        radius={5}
        intensity={0.77}
        ambient={1}
        position={[-5, 5, -9]}
      />
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={0.8}
        ambient={0.4}
        position={[10, 2, -10]}
      />
    </AccumulativeShadows> 
  )
}

export default Backdrop