import { Light } from "three"
import Environment from "./Environment"
import Lights from "./Lights"
import TestObj from "./TestObj"
// import { Physics, Debug } from "@react-three/cannon"
import { Physics } from "@react-three/rapier"
import Heli from "./Heli/Heli"
import InstancedObjs from "./InstancedObjs"

export default function Experience()
{
    return <>
        <Physics debug>
            {/* <TestObj /> */}
            <InstancedObjs />
            <Environment /> 
            <Heli />       
        </Physics>
        <Lights />
        
    </>
}