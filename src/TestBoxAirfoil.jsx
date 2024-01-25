import { RigidBody, useFixedJoint } from "@react-three/rapier"
import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import ChaseCamera from "./ChaseCamera"
import { useKeyboardControls, Float } from "@react-three/drei"
import { lerp } from "three/src/math/MathUtils"

export default function TestBoxAirFoil()
{

    //controls
     const [ subscribeKeys, getKeys ] = useKeyboardControls()

    const bodyA = useRef()
    const bodyAMesh = useRef()
    const bodyB = useRef()
    const bodyBMesh = useRef()


    // const testJoint = useFixedJoint(bodyA, bodyB, [
    //     [0, 0, 0], //position of joint in bodyA's local space
    //     [0, 0, 0, 0], //orientation of joint in bodyA's local space
    //     [0, 1, 0], //position of joint in the bodyB's local space
    //     [0, 0, 0, 0] //orientation of joint in bodyB's local space
    // ])
    let turnVal = 0
    let elevationVal = 0
    let forwardVal = 0
    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        
        const rotation = new THREE.Quaternion()
        rotation.setFromEuler(new THREE.Euler(0., lerp(0, turnVal * Math.PI, 0.25 ), 0))
        
        const y = Math.sin(time) + 1.
        bodyB.current.setNextKinematicTranslation({x: 0, y: lerp(bodyBMesh.current.position.y, bodyBMesh.current.position.y + elevationVal, 0.25 ), z: 0})

        const { forward, backward, leftward, rightward, upward, downward } = getKeys()
        // if(!leftward && !rightward){
        //     if(turnVal > 0) lerp(turnVal, 0, 0.1)
        //     if(turnVal < 0) lerp(turnVal, 0, 0.1)
        // }
        console.log('turnval: ' + turnVal)
        console.log('elevationVal: ' + elevationVal)

        if(upward){
            console.log('up')
            elevationVal += 0.1
            // console.log(elevationVal)
        }
        if(downward){
            console.log('down')
            elevationVal -= 0.1
            // console.log(elevationVal)
        }
        if(forward){
            console.log('forward')
            forwardVal += 0.1
            // console.log(forwardVal)
        }
        if(rightward){
            console.log('right')
            turnVal += 0.1
            // console.log(turnVal)
        }
        if(leftward){
            console.log('left')
            turnVal -= 0.1
            // console.log(turnVal)
        }
        if(backward){
            console.log('back')
            forwardVal -= 0.1
            // console.log(forwardVal)
        }

      })

    useEffect(() => {

    }, [])

    const testForce = () => {
        console.log('apply test force')
        bodyB.current.wakeUp()
        bodyB.current.applyImpulse({x: 0, y: 5, z: 0})
        // bodyA.current.applyImpulse({x: 0, y: 0.5, z: 0})
    }

    return  <>
        {/* <RigidBody type="dynamic" colliders="cuboid" ref={bodyA} position={[0, 1.5, 0]}>
            <mesh ref={bodyAMesh}>
                <boxGeometry args={[1., 0.024, 0.2]} />
                <meshNormalMaterial />
            </mesh>
        </RigidBody> */}
        <Float
                speed={5}
                floatingRange={[0.0, 0.25]}
            >
        <RigidBody type="kinematicPosition" colliders="cuboid" ref={bodyB}>
            
                <mesh onClick={testForce} ref={bodyBMesh} position={[0, 1, 0]}>
                    <boxGeometry args={[3, 0.4, 3]}/>
                    <meshNormalMaterial />    
                </mesh> 
           
        </RigidBody>
        </Float>
        <ChaseCamera object={bodyBMesh} offsetView={new THREE.Vector3(0, 1, 12)} />    
    </>
}