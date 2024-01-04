import { RigidBody, useFixedJoint } from "@react-three/rapier"
import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'

export default function TestBoxAirFoil()
{

    
    const bodyA = useRef()
    const bodyAMesh = useRef()
    const bodyB = useRef()
    const bodyBMesh = useRef()


    const testJoint = useFixedJoint(bodyA, bodyB, [
        [0, 0, 0], //position of joint in bodyA's local space
        [0, 0, 0, 0], //orientation of joint in bodyA's local space
        [0, 1, 0], //position of joint in the bodyB's local space
        [0, 0, 0, 0] //orientation of joint in bodyB's local space
    ])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
    
        const rotation = new THREE.Quaternion()
        rotation.setFromEuler(new THREE.Euler(0., time * 10, 0))
        bodyA?.current?.setNextKinematicRotation(rotation)
      })

    useEffect(() => {

    }, [])

    const testFoce = () => {
        console.log('apply test force')
        bodyB.current.wakeUp()
        bodyB.current.applyImpulse({x: 0, y: 5, z: 0})
        // bodyA.current.applyImpulse({x: 0, y: 0.5, z: 0})
    }

    return  <>
        <RigidBody type="dynamic" colliders="cuboid" ref={bodyA} position={[0, 1.5, 0]}>
            <mesh>
                <boxGeometry args={[1., 0.024, 0.2]} />
                <meshNormalMaterial />
            </mesh>
        </RigidBody>

        <RigidBody type="dynamic" colliders="cuboid" ref={bodyB}>
            <mesh onClick={testFoce}>
                <boxGeometry args={[1]}/>
                <meshNormalMaterial />    
            </mesh> 
        </RigidBody>
            
    </>
}