import Experience from "../../Experience";
import * as THREE from 'three'
import { sRGBEncoding } from "three";
import vertex from './Portal Shader/vertex.glsl'
import fragment from './Portal Shader/fragment.glsl'
import Time from "../../Utils/Time";

export default class Portal
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.resource = this.resources.items.portalModel
        this.clock = new THREE.Clock()
        
        
        this.setTexture()
        this.setModel()
        this.setPortalShader()
        

    }

    setTexture()
    {
        this.texture = this.resources.items.portalTexture
        this.texture.flipY = false
        this.texture.encoding = sRGBEncoding
        this.bakedMaterial = new THREE.MeshBasicMaterial({ map: this.texture, side: THREE.DoubleSide})
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(4, 4, 4)
        this.scene.add(this.model)
        //console.log(this.model.children)
        this.model.traverse(() => {
            this.bakedMesh = this.model.children.find(child => child.name === 'Cube079')
            this.rightLight = this.model.children.find((child) => {
                return child.name === 'Cube011'
            })
            this.leftLight = this.model.children.find((child) => {
                return child.name === 'Cube015'
            })
            this.portalLight = this.model.children.find((child) => {
                return child.name === 'portal_disc'
            })
        })
        this.poleLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffe5 })
        this.bakedMesh.material = this.bakedMaterial
        this.rightLight.material = this.poleLightMaterial
        this.leftLight.material = this.poleLightMaterial
    }

    setPortalShader()
    {
        this.portalLightMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColorStart: { value: new THREE.Color(0xffff3f) },
                uColorEnd: { value: new THREE.Color(0x004b23) }
            }, 
            vertexShader: vertex,
            fragmentShader: fragment,
            side: THREE.DoubleSide 
        })
        this.portalLight.material = this.portalLightMaterial
    }

    update()
    {
        this.elapsedTime = this.clock.getElapsedTime()
        this.portalLightMaterial.uniforms.uTime.value = this.elapsedTime
        //console.log(this.time.elapsed)
        //console.log(this.portalLightMaterial.uniforms.uTime.value)
    }
}

