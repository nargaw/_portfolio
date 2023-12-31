import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { useBox, useRaycastVehicle } from '@react-three/cannon'
import { useEffect, useRef } from "react"
import { Quaternion, Vector3 } from "three"


export default function TestObj()
{
    const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0]}))

    return(
        <>
            <mesh ref={ref}>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
            {/* <RigidBody colliders={'cuboid'} restitution={2}>
                <mesh castShadow>
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh>
            </RigidBody> */}
            
        </>
    )
}