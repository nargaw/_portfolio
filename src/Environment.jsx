import { Grid } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { RigidBody } from "@react-three/rapier";

function Ground(){
    const ground = useRef()

    useEffect(() => {
        console.log(ground.current)
        // ground.current.rotation.z = -Math.PI * 0.5
        // ground.current.rotation.x = -Math.PI * 0.5
        // ground.current.position.y = -0.5
    }, [])

    return (
        <RigidBody type={'fixed'}>
            <mesh ref={ground} position-y={-0.5} >
                <boxGeometry args={[300, 1., 300]} />
                <meshStandardMaterial color="lightblue" />
            </mesh>
        </RigidBody>
        
    )
}

export default function Environment(){
    return <>
        <Grid 
            args={[300, 300]}
            sectionColor={"gray"}
            cellColor={"gray"}
            position={[0, 0.005, 0]}
        />
        <Ground />
    </>
}