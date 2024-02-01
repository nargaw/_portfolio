import { RigidBody } from "@react-three/rapier";

export default function EnclosedBox()
{
    return <>
        <RigidBody type="fixed">
            <mesh position={[-25, 0, 0]} rotation-y={-Math.PI * 0.5}>
                <boxGeometry args={[50, 50, 1]}/>
                <meshNormalMaterial />    
            </mesh>
            <mesh position={[25, 0, 0]} rotation-y={-Math.PI * 0.5}>
                <boxGeometry args={[50, 50, 1]}/>
                <meshNormalMaterial />    
            </mesh>
            <mesh position={[0, -25, 0]} rotation-x={-Math.PI * 0.5}>
                <boxGeometry args={[50, 50, 1]}/>
                <meshNormalMaterial />    
            </mesh>
            <mesh position={[0, 25, 0]} rotation-x={-Math.PI * 0.5}>
                <boxGeometry args={[50, 50, 1]}/>
                <meshNormalMaterial />    
            </mesh>
            <mesh position={[0, 0, -25]} >
                <boxGeometry args={[50, 50, 1]}/>
                <meshNormalMaterial />    
            </mesh>
            <mesh position={[0, 0, 25]} >
                <boxGeometry args={[50, 50, 1]}/>
                <meshNormalMaterial transparent={true} opacity={0} />    
            </mesh>              
        </RigidBody>    
    </>
}