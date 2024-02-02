varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 localSpacePosition = position;
  // localSpacePosition.z -= 40.;
  // gl_Position = vec4(localSpacePosition, 1.);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(localSpacePosition, 1.);
}