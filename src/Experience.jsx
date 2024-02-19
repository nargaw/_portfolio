import { Physics } from "@react-three/rapier"
import Objects from "./Home/Home"
import { OrbitControls } from "@react-three/drei"
import EnclosedBox from "./Home/EnclosedBox"

export default function Experience()
{
    return <>
        {/* <OrbitControls makeDefault={false}/> */}
        {/* <Shader /> */}
        <Physics>
            <EnclosedBox />
            <Objects />
        </Physics>
    </>
}