import { Light } from "three"
import Environment from "./Environment"
import Lights from "./Lights"
import TestObj from "./TestObj"
import { Physics, Debug } from "@react-three/cannon"

export default function Experience()
{
    return <>
        <Physics>
            {/* <Debug color="black" scale={1.1}> */}
                <TestObj />
                <Environment />        
            {/* </Debug> */}
        </Physics>
        <Lights />
        
    </>
}