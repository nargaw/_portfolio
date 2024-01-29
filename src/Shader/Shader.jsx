import { useRef, useMemo } from "react"
import fragmentShader from './fragment.glsl'
import vertexShader from './vertex.glsl'
import { Vector2 } from "three"

export default function Shader()
{

    const mesh = useRef()
    const uniforms = useMemo(
        () => ({
            u_time: { value: 0.},
            u_mouse: { value: new Vector2()},
            u_resolution: { value: new Vector2(window.innerWidth, window.innerHeight)}
        })
    )

    return <>
        <mesh ref={mesh}>
            <planeGeometry />
            <shaderMaterial 
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    </>
}