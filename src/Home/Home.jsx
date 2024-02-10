import { CuboidCollider, InstancedRigidBodies, RigidBody, useRapier,  } from "@react-three/rapier"
import { useMemo, useRef, useEffect, useState } from "react"
import { useFrame, useThree, useLoader } from "@react-three/fiber"
import { Vector2, Vector3, Raycaster, MeshBasicMaterial, TextureLoader, DoubleSide } from "three"
import { useMatcapTexture } from "@react-three/drei"


export default function About()
{
    const matcap = new TextureLoader().load('./Matcaps/matcapBlue.png')
    const cubes = useRef()
    const rigidBodies = useRef()
    const cubesCount = 100
    const maxCount = 150
    const angle = Math.random() * Math.PI * 2
    const radius = 2 + Math.random() * 5
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius 
    const createBody = () => ({
        key: Math.random(),
        position: 
        [
            x,
            (Math.random()) * 5,
            z
        ],
        rotation: 
                [
                    Math.random(),
                    Math.random(),
                    Math.random()
                ]
    })

    const instances = useMemo(() => {
        const objects = []
        for(let i = 0; i < cubesCount; i++){
            const angle = Math.random() * Math.PI * 2 - 20
            const radius =  Math.random() * 2 - 5
            const x = Math.cos(angle) * radius
            const z = Math.sin(angle) * radius 
            objects.push({
                key: 'instance_' + i,
                position: 
                [
                    x,
                    (Math.random()) * 5,
                    z
                ],
                rotation: 
                [
                    Math.random(),
                    Math.random(),
                    Math.random()
                ]
            })
        }

        return objects
    })

    const handleClickInstance = (event) => {
        // event.stopPropagation()
        console.log(event)
        if(rigidBodies.current){
            rigidBodies.current.at(event.instanceId).applyImpulse({
                x: 0,
                y: 0,
                z: Math.random() - 0.5 * 5000,
            }, true)
        }
    }
 
    return <>
        <InstancedRigidBodies 
            instances={instances} 
            type="dynamic"
            restitution={0.9}
            friction={0.0}
            gravityScale={0}
            colliders="hull"
            ref={rigidBodies}
            canSleep={false}
        >
            
            <instancedMesh 
                ref={cubes}
                args={[null, null, maxCount]}
                dispose={null}
                onPointerDown={handleClickInstance}
                count={instances.length}
                castShadow
            >
                {/* <sphereGeometry args={[3, 128]} /> */}
                <torusGeometry args={[3,1.5]}/>
                {/* <sphereGeometry args={[10, 64]}/> */}
                {/* <meshStandardMaterial  metalness={0.5} roughness={0.5} transparent={true} opacity={1} color={0xffaaaa}/> */}
                <meshMatcapMaterial matcap={matcap} />
                {/* <meshBasicMaterial /> */}
            </instancedMesh>
        </InstancedRigidBodies>
    </>
}