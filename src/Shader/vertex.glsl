varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 localSpacePosition = position;
  // gl_Position = vec4(localSpacePosition, 1.);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(localSpacePosition, 1.);
}