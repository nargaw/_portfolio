import Experience from "../../Experience";
import * as THREE from 'three'

export default class FoxAnimations{
    constructor(mesh)
    {
        this.experience = new Experience()
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.resource = this.resources.items.foxModel
        this.time = this.experience.time
        console.log(mesh)
        this.model = mesh
        this.setAnimation()
        this.setState()
    }

    setAnimation()
    {
        this.animation = {}
        console.log(this.model)
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

    setState()
    {
        this.currentState = this.animation.actions.current
        console.log(this.currentState)
    }

    update()
    {
        this.animation.mixer.update(this.time.delta * 0.001)
    }
}