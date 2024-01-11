import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function ChaseCamera(object)
{

    const position = new THREE.Vector3()
    const target = new THREE.Vector3(0, 0, 0)

    useFrame((state) => {
        target.lerp(object.getWorldPosition(position), 0.02)
        state.camera.lookAt(target)
    })

    return <>

    </>
}