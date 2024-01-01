import { Light } from "three"
import Environment from "./Environment"
import Lights from "./Lights"
import TestObj from "./TestObj"
// import { Physics, Debug } from "@react-three/cannon"
import { Physics } from "@react-three/rapier"
import Heli from "./Heli/Heli"

export default function Experience()
{
    return <>
        <Physics debug>
            <TestObj />
            <Environment /> 
            <Heli />       
        </Physics>
        <Lights />
        
    </>
}