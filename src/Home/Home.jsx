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

    const handleOrientation = (event) => {
        
        const x = event.beta / 180
        const y = event.gamma / 90
        console.log(x, y)
    }

    window.addEventListener('deviceorientation', handleOrientation, true)
 
    return <>
        <InstancedRigidBodies 
            instances={instances} 
            type="dynamic"
            restitution={0.5}
            friction={0.0}
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