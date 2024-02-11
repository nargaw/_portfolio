import { RigidBody } from "@react-three/rapier";
import { TextureLoader } from "three";

export default function EnclosedBox()
{
    const matcap = new TextureLoader().load('./Matcaps/matcapBlue.png')
    return <>
        <RigidBody type="fixed" friction={0} restitution={0.9}>
            <mesh receiveShadow position={[-70, 0, 0]} rotation-y={Math.PI * 0.5}>
                <boxGeometry args={[200, 100, 5]}/>
                {/* <meshStandardMaterial />     */}
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh receiveShadow position={[70, 0, 0]} rotation-y={Math.PI * 0.5}>
                <boxGeometry args={[200, 100, 5]}/>
                {/* <meshStandardMaterial />     */}
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh receiveShadow position={[0, -50, 0]} rotation-x={Math.PI * 0.5}>
                <boxGeometry args={[150, 200, 5]}/>
                {/* <meshStandardMaterial />     */}
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh receiveShadow position={[0, 50, 0]} rotation-x={Math.PI * 0.5}>
                <boxGeometry args={[150, 200, 5]}/>
                {/* <meshStandardMaterial />     */}
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh receiveShadow position={[0, 0, 20]} >
                <boxGeometry args={[150, 100, 5]}/>
                {/* <meshStandardMaterial />     */}
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />
            </mesh>
            <mesh receiveShadow position={[0, 0, 100]} >
                <boxGeometry args={[150, 100, 5]}/>
                <meshStandardMaterial transparent={true} opacity={0} visible={false} />    
            </mesh>              
        </RigidBody>    
    </>
}