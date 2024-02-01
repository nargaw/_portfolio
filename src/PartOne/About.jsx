import { CuboidCollider, InstancedRigidBodies, RigidBody, useRapier,  } from "@react-three/rapier"
import { useMemo, useRef, useEffect } from "react"
import { useFrame, useThree, useLoader } from "@react-three/fiber"
import { Vector2, Vector3, Raycaster, MeshBasicMaterial, TextureLoader } from "three"
import { useMatcapTexture } from "@react-three/drei"


export default function About()
{
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

    console.log(cubes.current)
 
    return <>
        <InstancedRigidBodies 
            instances={instances} 
            type="dynamic"
            restitution={0.6}
            // friction={0.5}
            gravityScale={0}
            colliders="cuboid"
            ref={rigidBodies}
            //canSleep={true}
        >
            
            <instancedMesh 
                ref={cubes}
                args={[null, null, cubesCount]}
                dispose={null}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    console.log(e.instanceId);
                    rigidBodies.current[e.instanceId].applyImpulse(
                      {
                        x: Math.random() * 1500,
                        y: Math.random() * 1500,
                        z: Math.random() * 1500,
                      },
                      true
                    );
                  }}
            >
                {/* <sphereGeometry /> */}
                <boxGeometry args={[5, 5, 5]}/>
                <meshNormalMaterial />
                {/* <meshMatcapMaterial matcap={matcap}/> */}
            </instancedMesh>
        </InstancedRigidBodies>
    </>
}