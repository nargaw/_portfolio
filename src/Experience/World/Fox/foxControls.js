import Controls from "../../Utils/Controls";
import Experience from "../../Experience";
import * as THREE from 'three'
import * as CANNON from 'cannon-es'

export default class FoxControls extends Controls
{
    constructor(mesh)
    {
        super()
        this.experience = new Experience()
        this.target = mesh

        this.acceleration = new THREE.Vector3(1, 0.25, 50.0)
        this.decceleration = new THREE.Vector3(-0.0005, -0.0001, -5.0)
        this.velocity = new THREE.Vector3(0, 0, 0)

        this.quaternion = new THREE.Quaternion()
        this.axisAngle = new THREE.Vector3()
        this.rotation = this.target.quaternion.clone()
        this.acc = this.acceleration.clone()
        this.moving = false

        this.forward = new THREE.Vector3(0, 0, 1)
        this.oldPosition = new THREE.Vector3(0, 0, 1)
        
        //this.animation.mixer = new THREE.AnimationMixer(this.model)
    }

    forward()
    {
        if(this.keyMap['w'] || this.hoverMap['3']  || this.hoverTouch['3']|| this.keyMap['ArrowUp']){
            this.velocity.z += this.acc.z
            this.oldPosition.copy(this.target.position)
            this.forward.applyQuaternion(this.target.quaternion)
            this.forward.normalize()
            this.forward.multiplyScalar(this.velocity.z)
            this.target.position.add(this.forward)
            //console.log(mesh.position)
            // animation.play('walking')
            this.moving = true
        }
    }

    backward(body, mesh)
    {
        if(this.keyMap['s'] || this.hoverMap['4'] || this.hoverTouch['4'] || this.keyMap['ArrowDown']){
            //console.log('backward')
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