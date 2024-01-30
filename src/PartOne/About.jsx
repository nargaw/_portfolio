import { InstancedRigidBodies, RigidBody, useRapier } from "@react-three/rapier"
import { useMemo, useRef, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Vector2, Vector3, Raycaster, MeshBasicMaterial } from "three"

export default function About()
{

    const raycaster = new Raycaster()
    const { rapier, world } = useRapier()
    // console.log(world)

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
    })
    
    // let current 

    // useEffect(() => {
    //     if(!rigidBodies.current){
    //         return
    //     }
    //         rigidBodies.current[current].applyImpulse({
    //             x: Math.random(),
    //             y: Math.random(),
    //             z: Math.random()
    //         })
    // }, []);



    // useFrame((state) => {
    //     // console.log(state.camera.position)
    //     raycaster.setFromCamera(pointer, state.camera)
    //     const intersection = raycaster.intersectObject(cubes.current)
    //     // console.log(intersection)
    //     if (intersection.length > 1){
    //         const instanceId = intersection[0].instanceId
    //         console.log(instanceId)
    //         current = instanceId
    //     }
    // })
    // window.addEventListener('click', (e) =>{
        
    //     const ray = raycaster.setFromCamera(pointer, camera)
    //     console.log(ray)
    //     console.log(camera)
    // })
  
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