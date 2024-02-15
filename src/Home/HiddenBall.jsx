import { RigidBody } from "@react-three/rapier"
import { MeshBasicMaterial } from "three"
import { useEffect, useRef } from 'react'
import { useFrame } from "@react-three/fiber"

export default function HiddenBall()
{
    const rigidBodyRef = useRef()
    const meshRef = useRef()

    let mouseX;
    let mouseY;

    addEventListener('mousemove', (e) => {
        mouseX = (mouseX, (e.clientX / window.innerWidth)) - 0.5
        mouseY = (mouseY, (-(e.clientY / window.innerHeight) + 1)) - 0.5
    })

    addEventListener('contextmenu', e => e.preventDefault())

    addEventListener('touchmove', (e) => {
        mouseX = ((e.changedTouches[0].clientX / window.innerWidth) - 0.5);
        mouseY = (-(e.changedTouches[0].clientY / window.innerHeight) + 1) - 0.5;
    }, {passive: false})

    useFrame((state) => {
        const y = mouseY * 50
        const x = mouseX * 100
        rigidBodyRef?.current?.setNextKinematicTranslation({x: x, y: y, z: 85})
    })
    

    return <>
        <RigidBody ref={rigidBodyRef} position={[0, 0, 85]} type="kinematicPosition" colliders="ball">
            <mesh ref={meshRef}>
                <sphereGeometry args={[10, 128]} />
                <meshBasicMaterial visible={'false'} transparent={true} opacity={0}/>
            </mesh>
        </RigidBody>
    </>
}