import { useFrame, useThree } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import * as THREE from 'three'
import { useControls } from "leva"

export default function TestObj()
{
    const box = useRef()
    const boxPhysicsRef = useRef()

    const v = new THREE.Vector3()
    const birdsEyeView = new THREE.Vector3(0, 4.5, 15)
    const chaseCam = new THREE.Object3D()
    const chaseCamPivot = new THREE.Object3D()
    chaseCamPivot.position.copy(birdsEyeView)
    let pos = new THREE.Vector3()
    let quat = new THREE.Quaternion()


    useThree((state) => {
        state.scene.add(chaseCam)
        chaseCam.add(chaseCamPivot)
    })

    useFrame((state) => {
        pos = (box.current.getWorldPosition(new THREE.Vector3()))
        quat = box.current.getWorldQuaternion(new THREE.Quaternion())
        state.camera.lookAt(pos)
        chaseCam.position.copy(pos)
        // chaseCam.position.copy(quat)
        chaseCamPivot.getWorldPosition(v)
        if(v.y < 1){
            v.y = 1
        }
        state.camera.position.lerpVectors(state.camera.position, v, 0.01)    
    })

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