import Shader from "./Shader/Shader"
import { Physics } from "@react-three/rapier"
import About from "./PartOne/About"
import { OrbitControls } from "@react-three/drei"
import EnclosedBox from "./PartOne/EnclosedBox"
import Environment from "./PartOne/Environment"

export default function Experience()
{
    return <>
        {/* <OrbitControls makeDefault={false}/> */}
        {/* <Shader /> */}
        <Physics >
            <EnclosedBox />
            <About />
        </Physics>
        <Environment />
    </>
}