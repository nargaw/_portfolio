import Environment from "./Environment"
import Lights from "./Lights"
import TestObj from "./TestObj"
import { Physics } from "@react-three/rapier"
import Heli from "./Heli/Heli"
import InstancedObjs from "./InstancedObjs"
import TestBoxAirFoil from "./TestBoxAirfoil"
import Buildings from "./Buildings"

export default function Experience()
{
    return <>
        <Physics debug >
            {/* <TestObj /> */}
            {/* <InstancedObjs /> */}
            <Environment /> 
            {/* <TestBoxAirFoil /> */}
            <Heli />       
            <Buildings />
        </Physics>
        <Lights />
        
    </>
}