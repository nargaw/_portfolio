import { useFrame, useThree } from "@react-three/fiber"
import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { useEffect, useRef } from "react"
import * as THREE from 'three'
import { useControls } from "leva"

export default function TestObj()
{
    const box = useRef()
    const sphere = useRef()
    const boxPhysicsRef = useRef()
    const spherePhysicsRef = useRef()

    const {position_X, position_Y, position_Z } = useControls({
        position_X: {
            value: 0,
            min: -50,
            max: 50,
            step: 0.1
        },
        position_Y: {
            value: 4.5,
            min: 1,
            max: 50,
            step: 0.1
        },
        position_Z: {
            value: 15,
            min: 5,
            max: 50,
            step: 0.1
        }
    })

    const v = new THREE.Vector3()
    const birdsEyeView = new THREE.Vector3(0, 4.5, 15)
    const chaseCam = new THREE.Object3D()
    // chaseCam.position.set(0, 0, 0)
    const chaseCamPivot = new THREE.Object3D()
    chaseCamPivot.position.copy(birdsEyeView)

    let pos = new THREE.Vector3()
    let quat = new THREE.Quaternion()

    useThree((state) => {
        state.scene.add(chaseCam)
        chaseCam.add(chaseCamPivot)
        chaseCamPivot.position.set(position_X, position_Y, position_Z)
    })

    useFrame((state) => {
        
        chaseCam.quaternion.copy(box.current.quaternion)
        chaseCamPivot.getWorldPosition(v)
        if(v.y < 1){
            v.y = 1
        }
        state.camera.position.lerpVectors(state.camera.position, v, 0.005)
        pos = (box.current.getWorldPosition(new THREE.Vector3()))
        chaseCam.position.copy(pos)
        // quat = box.current.getWorldQuaternion(new THREE.Quaternion())
        // chaseCam.quaternion.copy(quat)
        state.camera.lookAt(pos)
    })

    const applyForceSphere = () => {
        spherePhysicsRef.current.applyImpulse({x: 0, y: 5, z: -5})
    }

    const applyForceBox = () => {
        boxPhysicsRef.current.wakeUp()
        boxPhysicsRef.current.applyImpulse({x: 0, y: 50, z: -60})
    }
    

    return(
        <>
            <RigidBody colliders={'cuboid'} restitution={1.5} ref={boxPhysicsRef}>
                <mesh onClick={applyForceBox} ref={box} position-y={5}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial />
                </mesh>
            </RigidBody>
        </>
    )
}