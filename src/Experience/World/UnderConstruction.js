import Experience from '../Experience'
import * as THREE from 'three'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry'


export default class UnderConstruction
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.fontLoader = new FontLoader()
        this.textGeometry = new TextGeometry()
        this.setText()
    }

    setText()
    {
        this.fontLoader.load(
            './Font/ptsans.json',
            (font) => {
                this.word1 = 'Under'
                this.word2 = 'Construction'
                this.parameters = 
                {
                    font: font,
                    size: 0.5,
                    height: 0.2,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.03,
                    bevelSize: 0.02,
                    bevelOffset: 0,
                    bevelSegments: 5
                }
                this.textGeometry1 = new TextGeometry(
                    this.word1,
                    this.parameters
                )
                this.textGeometry2 = new TextGeometry(
                    this.word2,
                    this.parameters
                )
                this.textMaterial = new THREE.MeshStandardMaterial()
                this.text1 = new THREE.Mesh(this.textGeometry1, this.textMaterial)
                this.text2 = new THREE.Mesh(this.textGeometry2, this.textMaterial)
                this.scene.add(this.text1, this.text2)
                this.text1.castShadow = true
                this.text2.castShadow = true
                this.text1.position.set(0, 3, -1)
                this.text2.position.set(0, 2.5, -1)
                this.textGeometry1.computeBoundingBox()
                this.textGeometry1.center()
                this.textGeometry2.computeBoundingBox()
                this.textGeometry2.center()
            }
        )
    }
}