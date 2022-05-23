import * as THREE from 'three'
import Experience from '../Experience.js'
import * as CANNON from 'cannon-es'

export default class Floor
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.physics = this.experience.physics
        this.world = this.physics.world
        this.resources = this.experience.resources

        this.setPhysics()
        // this.setGeometry()
        // this.setTextures()
        // this.setMaterial()
        // this.setMesh()
    }

    setPhysics()
    {
        this.groundShape = new CANNON.Plane()
        this.groundBody = new CANNON.Body(
            {
                mass: 0,
                material: this.physics.defaultMaterial
            }
        )
        this.groundBody.addShape(this.groundShape)
        this.groundBody.quaternion.setFromEuler(Math.PI * 0.5, 0, 0)
        this.world.addBody(this.groundBody)
    }

    setGeometry()
    {
        this.geometry = new THREE.CircleGeometry(5, 64)
    }

    setTextures()
    {
        this.textures = {}

        this.textures.color = this.resources.items.grassColorTexture
        this.textures.color.encoding = THREE.sRGBEncoding
        this.textures.color.repeat.set(1.5, 1.5)
        this.textures.color.wrapS = THREE.RepeatWrapping
        this.textures.color.wrapT = THREE.RepeatWrapping

        this.textures.normal = this.resources.items.grassNormalTexture
        this.textures.normal.repeat.set(1.5, 1.5)
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping
    }

    setMaterial()
    {
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.color,
            normalMap: this.textures.normal
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.rotation.x = - Math.PI * 0.5
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }
}