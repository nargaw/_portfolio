import { useFrame } from "@react-three/fiber"
import { InstancedRigidBodies} from "@react-three/rapier"
import { useMemo, useRef} from "react"
import { TextureLoader } from "three"

export default function About()
{
    const matcapLight = new TextureLoader().load('./Matcaps/matcapBlackShiny.png')
    const cubes = useRef()
    const rigidBodies = useRef()
    const cubesCount = 50
    
    const instances = useMemo(() => {
        const objects = []
        for(let i = 0; i < cubesCount; i++){
            const angle = Math.random() * Math.PI * 2 - 20
            const radius =  Math.random() * 2 - 5
            const x = Math.cos(angle) * radius * 10
            const z = Math.sin(angle) * radius
            objects.push({
                key: 'instance_' + i,
                position: 
                [
                    x,
                    (Math.random()) * 5,
                    75
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

    let x
    let y

    const handleOrientation = (e) => {
        x = -(e.beta / 180) * 2 
        y = (e.gamma / 90 / 2) * 2 
        // console.log(e)
    }

    window.addEventListener('deviceorientation', handleOrientation, true)

    useFrame(() => {
        
        if(y <= 1 && y >= -1 ){
            // console.log('x: ' + y)
            if(rigidBodies.current){
                rigidBodies.current.forEach((api) => {
                    api.applyImpulse({ x: y * 50 , y: 0, z: 0})
                })
            }
        }

        if(x <= 1 && x >= -1 ){
            // console.log('y: ' + x)
            if(rigidBodies.current){
                rigidBodies.current.forEach((api) => {
                    api.applyImpulse({ x: 0, y: x * 50, z: 0})
                })
            }
        }
    })
 
    return <>
        <InstancedRigidBodies 
            instances={instances} 
            type="dynamic"
            restitution={0.5}
            friction={0.5}
            gravityScale={0}
            colliders="hull"
            ref={rigidBodies}
            canSleep={false}
        >
            <instancedMesh 
                ref={cubes}
                args={[null, null, cubesCount]}
                dispose={null}
                count={instances.length}
                castShadow
            >
                <torusGeometry args={[3,1.5]}/>
                <meshMatcapMaterial matcap={matcapLight} />
            </instancedMesh>
        </InstancedRigidBodies>
    </>
}