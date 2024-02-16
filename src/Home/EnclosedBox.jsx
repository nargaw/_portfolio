import { RigidBody } from "@react-three/rapier";
import { useState, useRef } from "react";
import { TextureLoader } from "three";

export default function EnclosedBox()
{

    window.addEventListener('resize', () => {
        
    })

    return <>
        <RigidBody type="fixed" friction={0.5} restitution={0.5}>
            <mesh  position={[-40, 0, 0]} rotation-y={Math.PI * 0.5}>
                <boxGeometry args={[200, 100, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh  position={[40, 0, 0]} rotation-y={Math.PI * 0.5}>
                <boxGeometry args={[200, 100, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh  position={[0, -35, 0]} rotation-x={Math.PI * 0.5}>
                <boxGeometry args={[150, 200, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh  position={[0, 35, 0]} rotation-x={Math.PI * 0.5}>
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