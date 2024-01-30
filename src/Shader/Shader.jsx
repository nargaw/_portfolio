import { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import fragmentShader from './fragment.glsl'
import vertexShader from './vertex.glsl'
import { Vector2, Color } from "three"
import { useControls } from "leva"

export default function Shader()
{

    const planetUniforms = useControls("Planet Variables", {
        color1: '#56ff00',
        color2: '#026689',
        planetVal: {
            value: 4.5,
            min: 2.0,
            max: 5.0,
            step: 0.01
        }
    })

    const mesh = useRef()
    const uniforms = useMemo(
        () => ({
            u_time: { value: 0.},
            u_mouse: { value: new Vector2()},
            u_resolution: { value: new Vector2(window.innerWidth, window.innerHeight)},
            u_color1: { value: new Color(planetUniforms.color1)},
            u_color2: { value: new Color(planetUniforms.color2)},
            u_planetVal: { value: planetUniforms.planetVal}
        })
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
                enablePan = {false}
                maxAzimuthAngle={Math.PI * 0.5}
                minAzimuthAngle={-Math.PI * 0.5}
                maxPolarAngle={Math.PI * 0.5 } 
                minPolarAngle={-Math.PI * 0.5 }           
            />
        <mesh ref={mesh}>
            {/* <icosahedronGeometry args={[1, 128]} /> */}
            <planeGeometry args={[2, 2]} />
            <shaderMaterial 
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    </>
}