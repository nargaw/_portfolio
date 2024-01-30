import { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import fragmentShader from './fragment.glsl'
import vertexShader from './vertex.glsl'
import { Vector2, Color, DoubleSide } from "three"
import { useControls } from "leva"

export default function Shader()
{

    // const planetUniforms = useControls("Planet Variables", {
    //     color1: '#4c6ad9',
    //     color2: '#485096',
    //     planetVal: {
    //         value: 4.11,
    //         min: 2.0,
    //         max: 5.0,
    //         step: 0.01
    //     }
    // })

    const mesh = useRef()
    const uniforms = useMemo(
        () => ({
            u_time: { value: 0.},
            u_mouse: { value: new Vector2()},
            u_resolution: { value: new Vector2(window.innerWidth, window.innerHeight)}
        }), []
    )

    // window.addEventListener('resize', () => {
    //     mesh.current.material.unifroms.u_resolution = new Vector2(window.innerWidth, window.innerHeight)
    // })

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
        <OrbitControls 
                // enablePan = {false}
                // maxAzimuthAngle={Math.PI * 0.5}
                // minAzimuthAngle={-Math.PI * 0.5}
                // maxPolarAngle={Math.PI * 0.5 } 
                // minPolarAngle={-Math.PI * 0.5 }           
            />
        <mesh ref={mesh} position={[0, 0, 0]}>
            <icosahedronGeometry args={[150, 128]} />
            {/* <planeGeometry args={[200, 200]} /> */}
            <shaderMaterial
                side={DoubleSide} 
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    </>
}