import { Grid } from "@react-three/drei";
import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";

function Ground(){
    const ground = useRef()

    return (
        <RigidBody type={'fixed'}>
            <mesh ref={ground} position-y={-0.5} >
                <boxGeometry args={[1000, 1., 1000]} />
                <meshStandardMaterial color="lightblue" />
            </mesh>
        </RigidBody>
        
    )
}

export default function Environment(){
    return <>
        <Grid 
            args={[1000, 1000]}
            sectionColor={"gray"}
            cellColor={"gray"}
            position={[0, 0.005, 0]}
        />
        <Ground />
    </>
}