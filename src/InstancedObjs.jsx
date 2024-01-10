import { useRef, useMemo } from 'react'
import {RoundCuboidCollider, BallCollider, CuboidCollider, InstancedRigidBodies, RigidBody } from '@react-three/rapier'
import * as THREE from 'three'

export default function InstancedObjs()
{
    const xGeometry = new THREE.BoxGeometry(2, 0.5, 0.5)
    const material = new THREE.MeshStandardMaterial({color: 0x00ffff})

    return <>

        {[...Array(20)].map((value, index) =>
            <RigidBody
                key={index}
                restitution={0.825}
                friction={0.1}
                colliders="cuboid"
                position={[
                    (Math.random() - 0.5) * 1,
                    15 * index + 5,
                    (Math.random() - 0.5) +1
                ]}
            >
                <group>
                    <mesh 
                        geometry={xGeometry}
                        material={material}
                        rotation-z={-Math.PI * 0.25}
                    />
                    <mesh
                        geometry={xGeometry}
                        material={material}
                        rotation-z={Math.PI * 0.25}
                    />
                </group>
            </RigidBody>  
        )}
    </>
}