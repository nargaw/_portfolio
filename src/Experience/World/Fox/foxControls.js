import Controls from "../../Utils/Controls";
import Experience from "../../Experience";
import * as THREE from 'three'

export default class FoxControls extends Controls
{
    constructor()
    {
        super()
        this.experience = new Experience()    
        this.moving = false
    }

    forward(body)
    {
        if(this.keyMap['w'] || this.hoverMap['3']  || this.hoverTouch['3']|| this.keyMap['ArrowUp']){
            console.log('forward')
            body.position.z -= 0.005
            // animation.play('walking')
            this.moving = true
        }
    }

    backward(body)
    {
        if(this.keyMap['s'] || this.hoverMap['4'] || this.hoverTouch['4'] || this.keyMap['ArrowDown']){
            console.log('backward')
            body.position.z += 0.005
            this.moving = true
        }
    }

    left(body)
    {
        if(this.keyMap['a'] || this.hoverMap['1'] || this.hoverTouch['1']|| this.keyMap['ArrowLeft']){
            console.log('left')
            this.moving = true
        } 
    }

    right(body)
    {
        if(this.keyMap['d'] || this.hoverMap['2'] || this.hoverTouch['2']|| this.keyMap['ArrowRight']){
            console.log('right')
            this.moving = true
        }
    }

    idle(body)
    {
        if(this.keyMap['']){
            this.moving = false
            console.log('idle')
        }
    }

}