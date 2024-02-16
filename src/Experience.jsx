import Shader from "./Shader/Shader"
import { Physics } from "@react-three/rapier"
import About from "./Home/Home"
import { OrbitControls } from "@react-three/drei"
import EnclosedBox from "./Home/EnclosedBox"
import Environment from "./Home/Environment"
import HiddenBall from "./Home/HiddenBall"

export default function Experience()
{
    return <>
        {/* <OrbitControls makeDefault={false}/> */}
        {/* <Shader /> */}
        <Physics>
            {/* <HiddenBall /> */}
            <EnclosedBox />
            <About />
        </Physics>
        <Environment />
    </>
}