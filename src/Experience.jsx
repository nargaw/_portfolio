import Shader from "./Shader/Shader"
import { Physics } from "@react-three/rapier"
import About from "./Home/Home"
import { OrbitControls } from "@react-three/drei"
import EnclosedBox from "./Home/EnclosedBox"
import Environment from "./Home/Environment"
import HiddenBall from "./Home/HiddenBall"
import { useState } from "react"
import { useFrame } from "@react-three/fiber"

export default function Experience()
{

    const [gravity, setGravity] = useState([0, 0, 0])

    let upDown
    let leftRight

    const handleOrientation = (e) => {
        upDown = -(e.beta / 180) * 2 
        leftRight = (e.gamma / 90 / 2) * 2 
    }

    window.addEventListener('deviceorientation', handleOrientation, true)

    if(leftRight <= 1 && leftRight >= -1 && upDown <= 1 && upDown >= -1 ){
        setGravity([leftRight * 10, upDown * 10, 0])
    }

    return <>
        {/* <OrbitControls makeDefault={false}/> */}
        {/* <Shader /> */}
        <Physics gravity={gravity}>
            <HiddenBall />
            <EnclosedBox />
            <About />
        </Physics>
        <Environment />
    </>
}