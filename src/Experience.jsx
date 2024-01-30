import Shader from "./Shader/Shader"
import { Physics } from "@react-three/rapier"
import About from "./PartOne/About"
import { OrbitControls } from "@react-three/drei"

export default function Experience()
{
    return <>
        <OrbitControls />
        <Shader />
        <Physics debug>
            <About />
        </Physics>
    </>
}