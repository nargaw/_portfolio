import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

export default function ChaseCamera(object)
{
    const birdsEyeView = new THREE.Vector3(0, 4.5, 15)
    const chaseCam = new THREE.Object3D()
    const chaseCamPivot = new THREE.Object3D()
    chaseCamPivot.position.copy(birdsEyeView)
    let pos = new THREE.Vector3()

    useThree((state) => {
        state.scene.add(chaseCam)
        chaseCam.add(chaseCamPivot)
    })

    useFrame((state) => {
        pos = (object.current.getWorldPosition(new THREE.Vector3()))
        state.camera.lookAt(pos)
        chaseCam.position.copy(pos)
        chaseCam.quaternion.copy(object.current.quaternion)
        chaseCamPivot.getWorldPosition(v)
        if(v.y < 1){
            v.y = 1
        }
        state.camera.position.lerpVectors(state.camera.position, v, 0.01)
    })
}