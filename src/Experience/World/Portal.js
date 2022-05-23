import Experience from "../Experience";
import * as THREE from 'three'
import { sRGBEncoding } from "three";

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
        
        this.setTexture()
        this.setModel()
        

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
        console.log(this.model.children)
        this.model.traverse((child) => {
            this.bakedMesh = this.model.children.find(child => child.name === 'Cube079')
            //child.material = this.bakedMaterial
        } )
        this.bakedMesh.material = this.bakedMaterial
    }
}

// gltfLoader.load(
//     'portalMerged.glb',
//     (gltf) => {
//         // gltf.scene.traverse((child) => {
//         //     console.log(child)
//         //     child.material = bakedMaterial
//         // })
//         const bakedMesh = gltf.scene.children.find(child => child.name === 'Cube079')
//         const rightPoleLightMesh = gltf.scene.children.find((child) => {
//             return child.name === 'Cube011'
//         })
//         const leftPoleLightMesh = gltf.scene.children.find((child) => {
//             return child.name === 'Cube015'
//         })
//         const portalLightMesh = gltf.scene.children.find((child) => {
//             return child.name === 'portal_disc'
//         })
//         bakedMesh.material = bakedMaterial
//         rightPoleLightMesh.material = poleLightMaterial
//         leftPoleLightMesh.material = poleLightMaterial
//         portalLightMesh.material = portalLightMaterial

//         scene.add(gltf.scene)
//     }
// )