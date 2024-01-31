import { CuboidCollider, InstancedRigidBodies, RigidBody, useRapier,  } from "@react-three/rapier"
import { useMemo, useRef, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Vector2, Vector3, Raycaster, MeshBasicMaterial, TextureLoader } from "three"


export default function About()
{
    const [map] = useLoader(THREE.TextureLoader, [mapUrl])
    const raycaster = new Raycaster()
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

    let camera
   
    useFrame((state) => {
        camera = state.camera
    })
    

    window.addEventListener('click', () => {
        if(camera){
            raycaster.setFromCamera(pointer, camera)
            console.log(raycaster?.direction)
            const intersect = raycaster.intersectObject(cubes.current)
            console.log(intersect)
            if (intersect.length > 0){
                const instanceId = intersect[0].instanceId
                console.log(instanceId)

            rigidBodies?.current[instanceId]?.applyImpulse({x: Math.random(), y: 2.5, z: Math.random()}, true)
            }
        }
    })

   
  
    return <>
        <InstancedRigidBodies 
            instances={instances} 
            type="dynamic"
            gravityScale={0}
            ref={rigidBodies}
            colliderNodes={[
                <CuboidCollider args={[0.5, 0.5, 0.5]}/>
            ]}
            canSleep={false}
        >
            
            <instancedMesh 
                ref={cubes}
                args={[null, null, cubesCount]}
            >
                <boxGeometry args={[1]}/>
                <meshNormalMaterial />
                {/* <meshMatcapMaterial map={}/> */}
            </instancedMesh>
        </InstancedRigidBodies>
    </>
}