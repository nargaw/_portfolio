import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { useBox, useSphere } from '@react-three/cannon'
import { useEffect, useRef } from "react"
import { Quaternion, Vector3 } from "three"


export default function TestObj()
{
    // const [box] = useBox(() => ({ mass: 1, position: [0, 5, 0]}))
    // const [sphere] = useSphere(() => ({ mass: 1, position: [2, 5, 0]}))
    const box = useRef()
    const sphere = useRef()

    useEffect(() => {
        // box.current.position.y = 5
        // sphere.current.position.y = 5
    }, [])

    return(
        <>
            <RigidBody colliders={'cuboid'}>
                <mesh ref={box} position-y={5}>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
            </RigidBody>
            <RigidBody colliders={'ball'}>
                <mesh ref={sphere} position-y={5}>
                    <sphereGeometry />
                    <meshStandardMaterial />
                </mesh>
            </RigidBody>
        </>
    )
}