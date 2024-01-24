import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

export default function ChaseCamera({object})
{
    const v = new THREE.Vector3()
    const birdsEyeView = new THREE.Vector3(10, 4.5, -15)
    const chaseCam = new THREE.Object3D()
    const chaseCamPivot = new THREE.Object3D()
    chaseCamPivot.position.copy(birdsEyeView)
    let pos = new THREE.Vector3()
    let quat = new THREE.Quaternion()

    useThree((state) => {
        state.scene.add(chaseCam)
        chaseCam.add(chaseCamPivot)
    })

    useFrame((state) => {
        pos = (object.current.getWorldPosition(new THREE.Vector3()))
        quat = (object.current.getWorldQuaternion(new THREE.Quaternion()))
        state.camera.lookAt(chaseCam.position)
        chaseCam.quaternion.copy(quat)
        chaseCam.position.copy(pos)
        chaseCamPivot.getWorldPosition(v)
        if(v.y < 1){
            v.y = 1
        }
        state.camera.position.lerpVectors(state.camera.position, v, 0.05)
    })
}