import { RigidBody } from "@react-three/rapier";
import { useState, useRef, useEffect } from "react";
import { TextureLoader } from "three";

export default function EnclosedBox()
{

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    const factor = 0.05;

    const leftBeam = useRef()
    const rightBeam = useRef()

    return <>
        <RigidBody type="fixed" friction={0.0} restitution={0.5}>
            <mesh ref={leftBeam}  position={[sizes.width * factor * -1, 0, 0]} rotation-y={Math.PI * 0.5}>
                <boxGeometry args={[200, 100, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh ref={rightBeam} position={[sizes.width * factor, 0, 0]} rotation-y={Math.PI * 0.5}>
                <boxGeometry args={[200, 100, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh  position={[0, -40, 0]} rotation-x={Math.PI * 0.5}>
                <boxGeometry args={[150, 200, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh  position={[0, 40, 0]} rotation-x={Math.PI * 0.5}>
                <boxGeometry args={[150, 200, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh  position={[0, 0, 70]} >
                <boxGeometry args={[150, 100, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh  position={[0, 0, 100]} >
                <boxGeometry args={[150, 100, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />    
            </mesh>              
        </RigidBody>    
    </>
}