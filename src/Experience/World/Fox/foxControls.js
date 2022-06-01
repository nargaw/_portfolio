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
            //this.body.angularVelocity.y -= 0.1
            this.moving = true
        } 
    }

    right(body)
    {
        //console.log(body.position)
        if(this.keyMap['d'] || this.hoverMap['2'] || this.hoverTouch['2']|| this.keyMap['ArrowRight']){
            console.log('right')
            this.rotationVel += 0.1
            this.quaternion = new CANNON.Quaternion()
            this.axisR = new CANNON.Vec3(0, 1, 0)
            this.angle += Math.PI * 0.5
            //this.angle += 0.1 * Math.PI
            console.log(body.position)
            this.quaternion.setFromAxisAngle(this.axisR, this.angle)
            this.quaternion.normalize()
            this.quaternion.vmult(this.rotationVel)
            body.position.z += 0.001
            body.quaternion.copy(this.quaternion)
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