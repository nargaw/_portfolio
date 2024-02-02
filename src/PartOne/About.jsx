import { CuboidCollider, InstancedRigidBodies, RigidBody, useRapier,  } from "@react-three/rapier"
import { useMemo, useRef, useEffect } from "react"
import { useFrame, useThree, useLoader } from "@react-three/fiber"
import { Vector2, Vector3, Raycaster, MeshBasicMaterial, TextureLoader, DoubleSide } from "three"
import { useMatcapTexture } from "@react-three/drei"


export default function About()
{
    const matcap = new TextureLoader().load('./Matcaps/matcapice.png')
    const cubes = useRef()
    const rigidBodies = useRef()
    const cubesCount = 30
    const instances = useMemo(() => {
        const objects = []
        for(let i = 0; i < cubesCount; i++){
            const angle = Math.random() * Math.PI * 2
            const radius = 2 + Math.random() * 20
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
    }, [])

    const handleClickInstance = (event) => {
        // console.log(cubes.current)
        // console.log(rigidBodies.current)
        console.log(event.instanceId)
        event.stopPropagation()
        if(rigidBodies.current){
            rigidBodies.current.at(event.instanceId).applyImpulse({
                x: 0,
                y: 0,
                z: Math.random() - 0.5 * 20000,
            }, true)
        }
    }
 
    return <>
        <InstancedRigidBodies 
            instances={instances} 
            type="dynamic"
            restitution={0.6}
            // friction={0.5}
            gravityScale={0}
            colliders="cuboid"
            ref={rigidBodies}
            canSleep={false}
        >
            
            <instancedMesh 
                ref={cubes}
                args={[null, null, cubesCount]}
                dispose={null}
                onClick={handleClickInstance}
            >
                <boxGeometry args={[5, 5, 5]} />
                {/* <sphereGeometry args={[10, 64]}/> */}
                {/* <meshStandardMaterial side={DoubleSide}/> */}
                <meshMatcapMaterial matcap={matcap} flatShading={true}/>
            </instancedMesh>
        </InstancedRigidBodies>
    </>
}