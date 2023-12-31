import { Grid } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";

function CannonFloor(){

    const [ref] = usePlane(
        () => ({rotation: [-Math.PI * 0.5, 0, 0]})
    )

    return (
        <mesh ref={ref}>
            <planeGeometry args={[300, 300]} />
            <meshStandardMaterial color="lightblue" />
        </mesh>
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
        <CannonFloor />
    </>
}