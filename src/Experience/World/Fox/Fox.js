import * as THREE from 'three'
import Experience from '../../Experience.js'
import * as CANNON from 'cannon-es'
import FoxControls from './foxControls.js'
import FoxAnimations from './FoxAnimation.js'

export default class Fox
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.physics = this.experience.physics
        this.world = this.physics.world
        this.resources = this.experience.resources
        
        this.time = this.experience.time
        this.debug = this.experience.debug

        this.objectsToUpdate= []

        

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('fox')
        }

        // Resource
        this.resource = this.resources.items.foxModel

        this.setModel()
        //this.setAnimation()
        this.setPhysics()
        this.foxControls = new FoxControls(this.model)
        //console.log(this.foxControls)
    }

    setModel()
    {
        this.model = this.resource.scene
        this.animations = new FoxAnimations(this.model)
        this.model.scale.set(0.02, 0.02, 0.02)
        this.model.rotation.set(0, Math.PI, 0)
        this.model.position.set(0, 0, 5)
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }

    setState()
    {
        //this.currentState = state.walking
        this.state = {
            idle: this.animation.play('idle'),
            walking: this.animation.play('walking'),
            running: this.animiation.play('running')
        }
    }

    setPhysics()
    {
        this.foxShape = new CANNON.Box(new CANNON.Vec3(0.4, 0.5, 1.4))
        this.foxBody = new CANNON.Body({
            mass: 0,
            material: this.physics.defaultMaterial
        })
        this.foxBody.addShape(this.foxShape, new CANNON.Vec3(0, 0.75, 0))
        this.foxBody.position.copy(this.model.position)
        this.foxBody.quaternion.copy(this.model.quaternion)
        this.world.addBody(this.foxBody)

        this.objectsToUpdate.push({
            mesh: this.model,
            body: this.foxBody
        })
    }

    updatePosition(){
        for(this.obj of this.objectsToUpdate){
            this.obj.mesh.position.copy(this.obj.body.position)
            this.obj.mesh.quaternion.copy(this.obj.body.quaternion)
        }
    }

    controls()
    {
        this.foxControls.forward()
        this.foxControls.right()
        this.foxControls.left()
        this.foxControls.idle()
        this.foxControls.updateFox()
    }

    update()
    {
        if(this.model){
            this.updatePosition()
            this.animations.update()
            this.controls()
        }
    }
}