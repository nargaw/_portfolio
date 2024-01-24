import { InstancedRigidBodies } from "@react-three/rapier";
import { useRef, useEffect, useMemo} from 'react'

export default function Buildings()
{

    const cubes = useRef()
    const cubesCount = 100
    const instances = useMemo(() => {
        const instances = []
        for(let i = 0; i < cubesCount; i++){
            const angle = Math.random() * Math.PI * 2
            const radius = 50 + Math.random() * 500
            const x = Math.cos(angle) * radius
            const z = Math.sin(angle) * radius
            instances.push({
                key: 'instance_' + i,
                position: 
                [
                    x, 
                    -(Math.random() -0.5) * 50, 
                    z 
                ],
                rotation: [0, 0, 0]
            })
        }

        return instances
    }, [])

    return <>
        <InstancedRigidBodies instances={instances} type="fixed">
            <instancedMesh ref={cubes} castShadow receiveShadow args={[null, null, cubesCount]}>
                <boxGeometry args={[20, 200, 20]} />
                <meshNormalMaterial />
            </instancedMesh>
        </InstancedRigidBodies>
    
    </>
}