import Shader from "./Shader/Shader"
import { Physics } from "@react-three/rapier"
import About from "./Home/Home"
import { OrbitControls } from "@react-three/drei"
import EnclosedBox from "./Home/EnclosedBox"
import HiddenBall from "./Home/HiddenBall"

export default function Experience()
{
    return <>
        {/* <OrbitControls makeDefault={false}/> */}
        {/* <Shader /> */}
        <Physics>
            <EnclosedBox />
            <About />
        </Physics>
    </>
}