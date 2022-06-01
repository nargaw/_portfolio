import * as THREE from 'three'
import Experience from '../../Experience.js'
import * as CANNON from 'cannon-es'
import FoxControls from './foxControls.js'

export default class Fox
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.physics = this.experience.physics
        this.world = this.physics.world
        this.resources = this.experience.resources
        this.foxControls = new FoxControls()
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
        this.setAnimation()
        this.setPhysics()
    }

    setModel()
    {
        this.model = this.resource.scene
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

    setAnimation()
    {
        this.animation = {}
        
        // Mixer
        this.animation.mixer = new THREE.AnimationMixer(this.model)
        
        // Actions
        this.animation.actions = {}
        
        this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.animations[0])
        this.animation.actions.walking = this.animation.mixer.clipAction(this.resource.animations[1])
        this.animation.actions.running = this.animation.mixer.clipAction(this.resource.animations[2])
        
        this.animation.actions.current = this.animation.actions.idle
        this.animation.actions.current.play()

        // Play the action
        this.animation.play = (name) =>
        {
            const newAction = this.animation.actions[name]
            const oldAction = this.animation.actions.current

            newAction.reset()
            newAction.play()
            newAction.crossFadeFrom(oldAction, 1)

            this.animation.actions.current = newAction
        }

        // Debug
        if(this.debug.active)
        {
            const debugObject = {
                playIdle: () => { this.animation.play('idle') },
                playWalking: () => { this.animation.play('walking') },
                playRunning: () => { this.animation.play('running') }
            }
            this.debugFolder.add(debugObject, 'playIdle')
            this.debugFolder.add(debugObject, 'playWalking')
            this.debugFolder.add(debugObject, 'playRunning')
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

    update()
    {
        this.foxControls.forward(this.foxBody, this.animation)
        this.foxControls.backward(this.foxBody)
        this.foxControls.left(this.foxBody)
        this.foxControls.right(this.foxBody)
        this.foxControls.idle(this.foxBody)
        if(this.model){
            this.updatePosition()
        }
        // //console.log(this.animation.actions.current)
        // this.animation.mixer.update(this.time.delta * 0.001)
        // this.foxControls.movement(this.foxBody, this.animation)
        // //console.log(this.foxControls.keyMap)
        // // if(this.foxControls.keyMap === true){
        // //     console.log('true')
        // // }
        // if(this.foxControls.keyMap.w === true){
        //     //this.animation.actions.current.stop()
        //     //this.animation.play('walking')
        //     this.animation.actions.current = this.animation.actions.walking
        //     this.animation.actions.current.play()
        // } 

        // if(this.foxControls.keyMap.w === false){
        //     console.log('here')
        //     //this.animation.mixer.clipAction(this.resource.animations[0]).play()
        //     // this.animation.actions.current.stop()
        //     this.animation.actions.current = this.animation.actions.idle
        //     this.animation.actions.current.play()
        // }
        
        // if (this.foxControls.movement(this.foxBody, this.animation)){
        //     //this.animation.actions.current.stop()
        //     console.log('stopped')
            
        // }
    }
}