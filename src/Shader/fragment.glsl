precision highp float;

varying vec2 vUv;
#define PI 3.14159265359
#define TWO_PI 6.28318530718
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform vec3 u_color1;
uniform vec3 u_color2;
uniform float u_planetVal;

 float inverseLerp(float v, float minValue, float maxValue) {
        return (v - minValue) / (maxValue - minValue);
    }
        
    float remap(float v, float inMin, float inMax, float outMin, float outMax) {
        float t = inverseLerp(v, inMin, inMax);
        return mix(outMin, outMax, t);
    }

    vec3 saturate3(vec3 x){
        return clamp(x, vec3(0.0), vec3(1.0));
    }

    float saturate1(float x){
        return clamp(x, 0., 1.);
    }

     // The MIT License
    // Copyright © 2013 Inigo Quilez
    // Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    // https://www.youtube.com/c/InigoQuilez
    // https://iquilezles.org/
    //
    // https://www.shadertoy.com/view/Xsl3Dl
    vec3 hash3( vec3 p ) // replace this by something better
    {
        p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
                dot(p,vec3(269.5,183.3,246.1)),
                dot(p,vec3(113.5,271.9,124.6)));

        return -1.0 + 2.0*fract(sin(p)*43758.5453123);
    }

    float noise( in vec3 p )
    {
    vec3 i = floor( p );
    vec3 f = fract( p );
        
        vec3 u = f*f*(3.0-2.0*f);

    return mix( mix( mix( dot( hash3( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ), 
                            dot( hash3( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                    mix( dot( hash3( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ), 
                            dot( hash3( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
                mix( mix( dot( hash3( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ), 
                            dot( hash3( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                    mix( dot( hash3( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ), 
                            dot( hash3( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
    }

    vec3 GenerateGridStars(vec2 pixelCoords, float starRadius, float cellWidth, float seed, bool twinkle ){
        
        vec2 cellCoords = (fract(pixelCoords / cellWidth) - 0.5) * cellWidth;

        vec2 cellID = floor(pixelCoords / cellWidth) + seed / 100.;
        vec3 cellHashValue = hash3(vec3(cellID, 0.0));
        // return cellHashValue;

        float starBrightness = saturate1(cellHashValue.z);
        vec2 starPosition = vec2(0.);
        starPosition += cellHashValue.xy * (cellWidth * 0.5 - starRadius * 4.);
        float distToStar = length(cellCoords - starPosition);
        // float glow = smoothstep(starRadius  + 1.0, starRadius, distToStar);

        float glow = exp(-2. * distToStar/starRadius);

        if(twinkle){
            float noiseSample = noise(vec3(cellID, u_time * 1.5));
            float twinkleSize =(remap(noiseSample, -1., 1., 0., 1.) * starRadius * 6.0);
            vec2 absDist = abs(cellCoords - starPosition);
            float twinkleValue = smoothstep(starRadius * 0.25, 0., absDist.y) * smoothstep(twinkleSize, 0., absDist.x);
            twinkleValue += smoothstep(starRadius * 0.25, 0., absDist.x) * smoothstep(twinkleSize, 0., absDist.y);
            glow += twinkleValue;
        }

        return vec3(glow * starBrightness);
    }

    vec3 GenerateStars(vec2 pixelCoords){
        vec3 stars = vec3(0.);
        float size = 4.;
        float cellWidth = 500.;
        for (float i = 0.; i <= 2.; i++){
            stars += GenerateGridStars(pixelCoords, size, cellWidth, i, true);
            size *= 0.5;
            cellWidth *= 0.35;
        }

        for (float i = 3.; i < 5.; i++){
            stars += GenerateGridStars(pixelCoords, size, cellWidth, i, false);
            size *= 0.5;
            cellWidth *= 0.35;
        }
        return stars;
    }

void main(){
    vec2 pixelCoords = (vUv - 0.5) * u_resolution;
    vec3 color = vec3(0.);
    color = GenerateStars(pixelCoords);
    color = pow(color, vec3(1.0 /2.2));
    gl_FragColor = vec4(color, 1.);
}