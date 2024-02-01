import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { OrbitControls } from '@react-three/drei'
import { Leva } from 'leva'
import { KeyboardControls } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))
// console.log(root)
root.render(
    <>
        <Leva />
        <Canvas  camera={{fov: 50, position:[0, 0, 100]}}>
            <Experience />
        </Canvas>
    </>
)