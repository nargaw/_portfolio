import Controls from "../../Utils/Controls";
import Experience from "../../Experience";
import * as THREE from 'three'

export default class FoxControls extends Controls
{
    constructor(mesh)
    {
        super()
        this.experience = new Experience()
        this.target = mesh
    }

    forward()
    {
        if(this.keyMap['w'] || this.hoverMap['3']  || this.hoverTouch['3']|| this.keyMap['ArrowUp'])
        {
            
        }
    }

    backward()
    {
        if(this.keyMap['s'] || this.hoverMap['4'] || this.hoverTouch['4'] || this.keyMap['ArrowDown'])
        {

        }
    }

    left()
    {
        if(this.keyMap['a'] || this.hoverMap['1'] || this.hoverTouch['1']|| this.keyMap['ArrowLeft'])
        {
            
        } 
    }

    right()
    {
        //console.log(body.position)
        if(this.keyMap['d'] || this.hoverMap['2'] || this.hoverTouch['2']|| this.keyMap['ArrowRight'])
        {
            
        }
    }

    idle()
    {
        if(this.keyMap[''])
        {
            
        }
    }

}