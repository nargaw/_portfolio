import Controls from "../../Utils/Controls";
import Experience from "../../Experience";
import * as THREE from 'three'
import * as CANNON from 'cannon-es'

export default class FoxControls extends Controls
{
    constructor()
    {
        super()
        this.experience = new Experience()    
        this.moving = false
        this.rotationVel = 0
        //this.animation.mixer = new THREE.AnimationMixer(this.model)
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

    backward(body, mesh)
    {
        if(this.keyMap['s'] || this.hoverMap['4'] || this.hoverTouch['4'] || this.keyMap['ArrowDown']){
            console.log('backward')
            body.position.z += 0.005
            this.moving = true
        }
    }

    left(body, mesh)
    {
        if(this.keyMap['a'] || this.hoverMap['1'] || this.hoverTouch['1']|| this.keyMap['ArrowLeft']){
            console.log('left')
            mesh.rotation.y -= 0.005
            body.position.z -= 0.001
            body.quaternion.copy(mesh.quaternion)
            this.moving = true
        } 
    }

    right(body, mesh)
    {
        //console.log(body.position)
        if(this.keyMap['d'] || this.hoverMap['2'] || this.hoverTouch['2']|| this.keyMap['ArrowRight']){
            console.log('right')
            mesh.rotation.y += 0.005
            body.position.z -= 0.001
            body.quaternion.copy(mesh.quaternion)
            this.moving = true
        }
    }

    // idle(body)
    // {
    //     if(this.keyMap['']){
    //         this.moving = false
    //         console.log('idle')
    //     }
    // }

}