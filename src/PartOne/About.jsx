import { InstancedRigidBodies, RigidBody, useRapier } from "@react-three/rapier"
import { useMemo, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Vector2, Vector3, Raycaster, MeshBasicMaterial } from "three"

export default function About()
{

    const raycaster = new Raycaster()
    const { rapier, world } = useRapier()
    console.log(world)

    const cubes = useRef()
    const rigidBodies = useRef()
    const cubesCount = 300
    const instances = useMemo(() => {
        const instances = []
        for(let i = 0; i < cubesCount; i++){
            const angle = Math.random() * Math.PI * 2
            const radius = 2 + Math.random() * 50
            const x = Math.cos(angle) * radius
            const z = Math.sin(angle) * radius
            instances.push({
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

        return instances
    }, [])

    const pointer = new Vector2()
    window.addEventListener('pointermove', (e) => {
        pointer.x = (e.clientX / window.innerWidth) * 2 - 1
        pointer.y = -(e.clientY / window.innerHeight) * 2 + 1
        // console.log(pointer)
    })

    let cameraPosition = new Vector3()
    let cameraDirection = new Vector3() 
    const ray = new rapier.Ray()
    useFrame((state) => {
        
         
    })

    // const origin = cameraPosition
    // const direction = cameraDirection
   
    // const hit = world.castRay(ray)

    


    return <>
        <InstancedRigidBodies 
            instances={instances} 
            type="dynamic"
            gravityScale={0}
            ref={rigidBodies}
        >
            <instancedMesh 
                ref={cubes}
                args={[null, null, cubesCount]}
            >
                <boxGeometry />
                <meshNormalMaterial />
            </instancedMesh>
        </InstancedRigidBodies>
    </>
}