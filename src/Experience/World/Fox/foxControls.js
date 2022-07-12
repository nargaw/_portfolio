import Controls from "../../Utils/Controls";
import Experience from "../../Experience";
import * as THREE from 'three'

export default class FoxControls extends Controls
{
    constructor(mesh)
    {
        super()
        this.experience = new Experience()
        this.time = this.experience.time
        this.elapsedTime = this.time.elapsed
        this.target = mesh
        this.movement = 'idle'
        this.decceleration = new THREE.Vector3(0, 0, -0.25)
        this.acceleration = new THREE.Vector3(0, 0, 1)
        this.velocity = new THREE.Vector3(0, 0, 0)
        this.target = mesh
        this.q = new THREE.Quaternion()
        this.a = new THREE.Vector3()
        this.r = this.target.quaternion.clone()
        this.oldPosition = new THREE.Vector3()
        this.forwardMovement = new THREE.Vector3(0, 0, 1)
        this.sidewaysMovement = new THREE.Vector3(1, 0, 0)
        console.log(this.target)
    }

    forward()
    {
        //console.log(this.target)
        if(this.keyMap['w'] || this.hoverMap['3']  || this.hoverTouch['3']|| this.keyMap['ArrowUp'])
        {
            console.log('moving forward')
            this.velocity.z += this.acceleration.z * this.time.elapsed * 0.01 
            
            this.forwardMovement.applyQuaternion(this.target.quaternion)
            this.forwardMovement.normalize()
            this.forwardMovement.multiplyScalar(this.velocity.z)
        }
    }

    backward()
    {
        if(this.keyMap['s'] || this.hoverMap['4'] || this.hoverTouch['4'] || this.keyMap['ArrowDown'])
        {
            console.log('moving backward')
        }
    }

    left()
    {
        if(this.keyMap['a'] || this.hoverMap['1'] || this.hoverTouch['1']|| this.keyMap['ArrowLeft'])
        {
            console.log('moving left')
        } 
    }

    right()
    {
        //console.log(body.position)
        if(this.keyMap['d'] || this.hoverMap['2'] || this.hoverTouch['2']|| this.keyMap['ArrowRight'])
        {
            console.log('moving right')
        }
    }

    idle()
    {
        if(this.keyMap[''])
        {
            console.log('not moving')
        }
    }

    updateFox()
    {
        this.target.quaternion.copy(this.r)
        this.oldPosition.copy(this.target.position)
        this.target.position.add(this.forwardMovement)
        this.target.position.add(this.sidewaysMovement)
        this.oldPosition.copy(this.target.position)
    }

}