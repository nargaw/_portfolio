import { useFrame } from "@react-three/fiber"
import { InstancedRigidBodies} from "@react-three/rapier"
import { useMemo, useRef} from "react"
import { TextureLoader } from "three"

export default function About()
{
    const matcapLight = new TextureLoader().load('./Matcaps/matcapBlackShiny.png')
    const cubes = useRef()
    const rigidBodies = useRef()
    const cubesCount = 25
    
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
        x = (e.beta / 180) 
        y = (e.gamma / 90 / 2) 
        // console.log(e)
    }

    window.addEventListener('deviceorientation', handleOrientation, true)

    useFrame(() => {
        
        if(y <= 0.5 && y >= -0.5 ){
            console.log('x: ' + y)
            if(rigidBodies.current){
                rigidBodies.current.forEach((api) => {
                    api.applyImpulse({ x: y * 10 , y: 0, z: 0})
                })
            }
        }
        // if(y <= 1. && y >= 0.){
        //     console.log('y: ' + y)
        // }

        

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