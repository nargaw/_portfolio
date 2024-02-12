import { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import fragmentShader from './fragment.glsl'
import vertexShader from './vertex.glsl'
import { Vector2, Color, DoubleSide } from "three"
import { useControls } from "leva"

export default function Shader()
{

    const mesh = useRef()
    const uniforms = useMemo(
        () => ({
            u_time: { value: 0.},
            u_mouse: { value: new Vector2()},
            u_resolution: { value: new Vector2(window.innerWidth, window.innerHeight)}
        }), []
    )

    let currentTime = 0
    useThree((state) => {
        currentTime = state.clock.elapsedTime
    })

    let mouseX
    let mouseY

    useFrame((state) => {
        const { clock } = state
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime() - currentTime
        mesh.current.material.uniforms.u_mouse.value = new Vector2(mouseX, mouseY)
    })

    addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth);
        mouseY = -(e.clientY / window.innerHeight) + 1;
    })

    addEventListener('contextmenu', e => e.preventDefault())

    addEventListener('touchmove', (e) => {
        mouseX = (e.changedTouches[0].clientX / window.innerWidth);
        mouseY = -(e.changedTouches[0].clientY / window.innerHeight) + 1;
    }, {passive: false})

    return <>
    
        <mesh ref={mesh} position={[0, 0, -30]}>
            <planeGeometry args={[500, 500]} />
            <shaderMaterial
                side={DoubleSide} 
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    </>
}