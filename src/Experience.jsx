import { Physics } from "@react-three/rapier"
import Objects from "./Experience/Objects"
import { OrbitControls, Sparkles } from "@react-three/drei"
import EnclosedBox from "./Experience/EnclosedBox"

export default function Experience()
{
    return <>
        {/* <OrbitControls makeDefault={false}/> */}
        <Sparkles scale={[100, 100, 50]} position={[0, 0, 120]} size={20} speed={2}/>
        <Physics>
            <EnclosedBox />
            <Objects />
        </Physics>
    </>
}