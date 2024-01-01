import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { useEffect, useRef } from "react"

export default function TestObj()
{
    const box = useRef()
    const sphere = useRef()

    useEffect(() => {
        // box.current.position.y = 5
        // sphere.current.position.y = 5
    }, [])

    

    return(
        <>
            <RigidBody colliders={'cuboid'} restitution={1.5}>
                <mesh ref={box} position-y={5}>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
            </RigidBody>
            <RigidBody colliders={'ball'} restitution={1.5}>
                <mesh ref={sphere} position-y={5}>
                    <sphereGeometry />
                    <meshStandardMaterial />
                </mesh>
            </RigidBody>
        </>
    )
}