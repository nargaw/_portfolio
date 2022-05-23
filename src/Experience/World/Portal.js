import Experience from "../Experience";
import * as THREE from 'three'

export default class Portal
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        //this.resource = this.resources.items.foxModel
    }
}