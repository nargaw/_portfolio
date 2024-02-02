import Shader from "./Shader/Shader"
import { Physics } from "@react-three/rapier"
import About from "./PartOne/About"
import { OrbitControls } from "@react-three/drei"
import EnclosedBox from "./PartOne/EnclosedBox"

export default function Experience()
{
    return <>
        {/* <OrbitControls makeDefault={false}/> */}
        {/* <Shader /> */}
        <Physics debug>
            <EnclosedBox />
            <About />
        </Physics>
    </>
}