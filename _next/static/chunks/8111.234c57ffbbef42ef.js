"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8111],{23:(e,t,r)=>{r.d(t,{q:()=>s});var a=r(7768),i=r(5805),n=r(8860),o=r(4930);let s=i.forwardRef(({envMap:e,resolution:t=256,frames:r=1/0,children:s,makeDefault:l,...u},c)=>{let h=(0,n.D)(({set:e})=>e),d=(0,n.D)(({camera:e})=>e),f=(0,n.D)(({size:e})=>e),p=i.useRef(null);i.useImperativeHandle(c,()=>p.current,[]);let m=i.useRef(null),v=function(e){let t=(0,n.D)(e=>e.size),r=(0,n.D)(e=>e.viewport),a="number"==typeof e?e:t.width*r.dpr,s=t.height*r.dpr,l=("number"==typeof e?void 0:e)||{},{samples:u=0,depth:c,...h}=l,d=null!=c?c:l.depthBuffer,f=i.useMemo(()=>{let e=new o.nWS(a,s,{minFilter:o.k6q,magFilter:o.k6q,type:o.ix0,...h});return d&&(e.depthTexture=new o.VCu(a,s,o.RQf)),e.samples=u,e},[]);return i.useLayoutEffect(()=>{f.setSize(a,s),u&&(f.samples=u)},[u,f,a,s]),i.useEffect(()=>()=>f.dispose(),[]),f}(t);i.useLayoutEffect(()=>{u.manual||p.current.updateProjectionMatrix()},[f,u]),i.useLayoutEffect(()=>{p.current.updateProjectionMatrix()}),i.useLayoutEffect(()=>{if(l)return h(()=>({camera:p.current})),()=>h(()=>({camera:d}))},[p,l,h]);let g=0,w=null,y="function"==typeof s;return(0,n.F)(t=>{y&&(r===1/0||g<r)&&(m.current.visible=!1,t.gl.setRenderTarget(v),w=t.scene.background,e&&(t.scene.background=e),t.gl.render(t.scene,p.current),t.scene.background=w,t.gl.setRenderTarget(null),m.current.visible=!0,g++)}),i.createElement(i.Fragment,null,i.createElement("orthographicCamera",(0,a.A)({left:-(f.width/2),right:f.width/2,top:f.height/2,bottom:-(f.height/2),ref:p},u),!y&&s),i.createElement("group",{ref:m},y&&s(v.texture)))})},3527:(e,t,r)=>{r.d(t,{r:()=>a});let a=parseInt(r(4930).sPf.replace(/\D+/g,""))},3632:(e,t,r)=>{r.d(t,{w:()=>l});var a=r(5805),i=r(425),n=r(4930),o=r(8860);function s(e,t,r){t.traverse(t=>{t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(t=>{e.properties.remove(t),null==t.dispose||t.dispose(),t.needsUpdate=!0})}),e.info.programs.length=0,e.compile(t,r)}function l({focus:e=0,samples:t=10,size:r=25}){let u=(0,o.D)(e=>e.gl),c=(0,o.D)(e=>e.scene),h=(0,o.D)(e=>e.camera);return a.useEffect(()=>{let a=i.ShaderChunk.shadowmap_pars_fragment,o=!a.includes("sampler2DShadow"),l=a.lastIndexOf("float getShadow( sampler2D shadowMap"),d=a.indexOf("if ( frustumTest ) {",l)+20;if(l<0||d<20)return void console.warn("[SoftShadows] Could not find injection point in shadow shader");let f=u.shadowMap.type;o||(u.shadowMap.type=n.bTm);let p=a.slice(l,d).includes("shadowIntensity"),m=(a.slice(0,d)+"\n"+(p?"return mix( 1.0, PCSS( shadowMap, shadowCoord ), shadowIntensity );":"return PCSS( shadowMap, shadowCoord );")+a.slice(d)).replace("#ifdef USE_SHADOWMAP","#ifdef USE_SHADOWMAP\n"+(({focus:e=0,size:t=25,samples:r=10},a)=>{let i=a?"unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) )":"texture2D( shadowMap, uv + offset ).r";return`
#define PENUMBRA_FILTER_SIZE float(${t})
#define RGB_NOISE_FUNCTION(uv) (randRGB(uv))
vec3 randRGB(vec2 uv) {
  return vec3(
    fract(sin(dot(uv, vec2(12.75613, 38.12123))) * 13234.76575),
    fract(sin(dot(uv, vec2(19.45531, 58.46547))) * 43678.23431),
    fract(sin(dot(uv, vec2(23.67817, 78.23121))) * 93567.23423)
  );
}

vec3 lowPassRandRGB(vec2 uv) {
  // 3x3 convolution (average)
  // can be implemented as separable with an extra buffer for a total of 6 samples instead of 9
  vec3 result = vec3(0);
  result += RGB_NOISE_FUNCTION(uv + vec2(-1.0, -1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(-1.0,  0.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(-1.0, +1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2( 0.0, -1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2( 0.0,  0.0));
  result += RGB_NOISE_FUNCTION(uv + vec2( 0.0, +1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(+1.0, -1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(+1.0,  0.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(+1.0, +1.0));
  result *= 0.111111111; // 1.0 / 9.0
  return result;
}
vec3 highPassRandRGB(vec2 uv) {
  // by subtracting the low-pass signal from the original signal, we're being left with the high-pass signal
  // hp(x) = x - lp(x)
  return RGB_NOISE_FUNCTION(uv) - lowPassRandRGB(uv) + 0.5;
}


vec2 pcssVogelDiskSample(int sampleIndex, int sampleCount, float angle) {
  const float goldenAngle = 2.399963f; // radians
  float r = sqrt(float(sampleIndex) + 0.5f) / sqrt(float(sampleCount));
  float theta = float(sampleIndex) * goldenAngle + angle;
  float sine = sin(theta);
  float cosine = cos(theta);
  return vec2(cosine, sine) * r;
}
float penumbraSize( const in float zReceiver, const in float zBlocker ) { // Parallel plane estimation
  return (zReceiver - zBlocker) / zBlocker;
}
float findBlocker(sampler2D shadowMap, vec2 uv, float compare, float angle) {
  float texelSize = 1.0 / float(textureSize(shadowMap, 0).x);
  float blockerDepthSum = float(${e});
  float blockers = 0.0;

  int j = 0;
  vec2 offset = vec2(0.);
  float depth = 0.;

  #pragma unroll_loop_start
  for(int i = 0; i < ${r}; i ++) {
    offset = (pcssVogelDiskSample(j, ${r}, angle) * texelSize) * 2.0 * PENUMBRA_FILTER_SIZE;
    depth = ${i};
    if (depth < compare) {
      blockerDepthSum += depth;
      blockers++;
    }
    j++;
  }
  #pragma unroll_loop_end

  if (blockers > 0.0) {
    return blockerDepthSum / blockers;
  }
  return -1.0;
}

        
float vogelFilter(sampler2D shadowMap, vec2 uv, float zReceiver, float filterRadius, float angle) {
  float texelSize = 1.0 / float(textureSize(shadowMap, 0).x);
  float shadow = 0.0f;
  int j = 0;
  vec2 vogelSample = vec2(0.0);
  vec2 offset = vec2(0.0);
  #pragma unroll_loop_start
  for (int i = 0; i < ${r}; i++) {
    vogelSample = pcssVogelDiskSample(j, ${r}, angle) * texelSize;
    offset = vogelSample * (1.0 + filterRadius * float(${t}));
    shadow += step( zReceiver, ${i} );
    j++;
  }
  #pragma unroll_loop_end
  return shadow * 1.0 / ${r}.0;
}

float PCSS (sampler2D shadowMap, vec4 coords) {
  vec2 uv = coords.xy;
  float zReceiver = coords.z; // Assumed to be eye-space z in this code
  float angle = highPassRandRGB(gl_FragCoord.xy).r * PI2;
  float avgBlockerDepth = findBlocker(shadowMap, uv, zReceiver, angle);
  if (avgBlockerDepth == -1.0) {
    return 1.0;
  }
  float penumbraRatio = penumbraSize(zReceiver, avgBlockerDepth);
  return vogelFilter(shadowMap, uv, zReceiver, 1.25 * penumbraRatio, angle);
}`})({size:r,samples:t,focus:e},o));return i.ShaderChunk.shadowmap_pars_fragment=m,s(u,c,h),()=>{i.ShaderChunk.shadowmap_pars_fragment=a,u.shadowMap.type=f,s(u,c,h)}},[e,r,t]),null}},6003:(e,t,r)=>{r.d(t,{O:()=>s});var a=r(7768),i=r(8860),n=r(5805),o=r(4930);let s=n.forwardRef(({light:e,args:t,map:r,toneMapped:s=!1,color:l="white",form:u="rect",intensity:c=1,scale:h=1,target:d=[0,0,0],children:f,...p},m)=>{let v=n.useRef(null);return n.useImperativeHandle(m,()=>v.current,[]),n.useLayoutEffect(()=>{f||p.material||((0,i.v)(v.current.material,{color:l}),v.current.material.color.multiplyScalar(c))},[l,c,f,p.material]),n.useLayoutEffect(()=>{p.rotation||v.current.quaternion.identity(),d&&!p.rotation&&("boolean"==typeof d?v.current.lookAt(0,0,0):v.current.lookAt(Array.isArray(d)?new o.Pq0(...d):d))},[d,p.rotation]),h=Array.isArray(h)&&2===h.length?[h[0],h[1],1]:h,n.createElement("mesh",(0,a.A)({ref:v,scale:h},p),"circle"===u?n.createElement("ringGeometry",{args:t||[0,.5,64]}):"ring"===u?n.createElement("ringGeometry",{args:t||[.25,.5,64]}):"rect"===u||"plane"===u?n.createElement("planeGeometry",{args:t||[1,1]}):"box"===u?n.createElement("boxGeometry",{args:t||[1,1,1]}):n.createElement(u,{args:t}),f||n.createElement("meshBasicMaterial",{toneMapped:s,map:r,side:o.$EB}),e&&n.createElement("pointLight",(0,a.A)({castShadow:!0},e)))})},8508:(e,t,r)=>{r.d(t,{C:()=>p});var a=r(4930);class i{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let n=new a.qUd(-1,1,1,-1,0,1);class o extends a.LoY{constructor(){super(),this.setAttribute("position",new a.qtW([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new a.qtW([0,2,0,0,2,0],2))}}let s=new o;class l{constructor(e){this._mesh=new a.eaF(s,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,n)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class u{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(256*e.random());this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[255&e];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let r,a,i,n,o,s=.5*(Math.sqrt(3)-1)*(e+t),l=Math.floor(e+s),u=Math.floor(t+s),c=(3-Math.sqrt(3))/6,h=(l+u)*c,d=e-(l-h),f=t-(u-h);d>f?(n=1,o=0):(n=0,o=1);let p=d-n+c,m=f-o+c,v=d-1+2*c,g=f-1+2*c,w=255&l,y=255&u,M=this.perm[w+this.perm[y]]%12,x=this.perm[w+n+this.perm[y+o]]%12,_=this.perm[w+1+this.perm[y+1]]%12,b=.5-d*d-f*f;b<0?r=0:(b*=b,r=b*b*this._dot(this.grad3[M],d,f));let S=.5-p*p-m*m;S<0?a=0:(S*=S,a=S*S*this._dot(this.grad3[x],p,m));let E=.5-v*v-g*g;return E<0?i=0:(E*=E,i=E*E*this._dot(this.grad3[_],v,g)),70*(r+a+i)}noise3d(e,t,r){let a,i,n,o,s,l,u,c,h,d,f=1/3*(e+t+r),p=Math.floor(e+f),m=Math.floor(t+f),v=Math.floor(r+f),g=1/6*(p+m+v),w=e-(p-g),y=t-(m-g),M=r-(v-g);w>=y?y>=M?(s=1,l=0,u=0,c=1,h=1,d=0):(w>=M?(s=1,l=0,u=0):(s=0,l=0,u=1),c=1,h=0,d=1):y<M?(s=0,l=0,u=1,c=0,h=1,d=1):w<M?(s=0,l=1,u=0,c=0,h=1,d=1):(s=0,l=1,u=0,c=1,h=1,d=0);let x=w-s+1/6,_=y-l+1/6,b=M-u+1/6,S=w-c+1/6*2,E=y-h+1/6*2,R=M-d+1/6*2,C=w-1+1/6*3,T=y-1+1/6*3,U=M-1+1/6*3,P=255&p,A=255&m,D=255&v,k=this.perm[P+this.perm[A+this.perm[D]]]%12,I=this.perm[P+s+this.perm[A+l+this.perm[D+u]]]%12,O=this.perm[P+c+this.perm[A+h+this.perm[D+d]]]%12,F=this.perm[P+1+this.perm[A+1+this.perm[D+1]]]%12,N=.6-w*w-y*y-M*M;N<0?a=0:(N*=N,a=N*N*this._dot3(this.grad3[k],w,y,M));let B=.6-x*x-_*_-b*b;B<0?i=0:(B*=B,i=B*B*this._dot3(this.grad3[I],x,_,b));let z=.6-S*S-E*E-R*R;z<0?n=0:(z*=z,n=z*z*this._dot3(this.grad3[O],S,E,R));let L=.6-C*C-T*T-U*U;return L<0?o=0:(L*=L,o=L*L*this._dot3(this.grad3[F],C,T,U)),32*(a+i+n+o)}noise4d(e,t,r,a){let i,n,o,s,l,u=this.grad4,c=this.simplex,h=this.perm,d=(5-Math.sqrt(5))/20,f=(Math.sqrt(5)-1)/4*(e+t+r+a),p=Math.floor(e+f),m=Math.floor(t+f),v=Math.floor(r+f),g=Math.floor(a+f),w=(p+m+v+g)*d,y=e-(p-w),M=t-(m-w),x=r-(v-w),_=a-(g-w),b=32*(y>M)+16*(y>x)+8*(M>x)+4*(y>_)+2*(M>_)+ +(x>_),S=+(c[b][0]>=3),E=+(c[b][1]>=3),R=+(c[b][2]>=3),C=+(c[b][3]>=3),T=+(c[b][0]>=2),U=+(c[b][1]>=2),P=+(c[b][2]>=2),A=+(c[b][3]>=2),D=+(c[b][0]>=1),k=+(c[b][1]>=1),I=+(c[b][2]>=1),O=+(c[b][3]>=1),F=y-S+d,N=M-E+d,B=x-R+d,z=_-C+d,L=y-T+2*d,j=M-U+2*d,H=x-P+2*d,G=_-A+2*d,q=y-D+3*d,V=M-k+3*d,W=x-I+3*d,Z=_-O+3*d,$=y-1+4*d,X=M-1+4*d,Y=x-1+4*d,Q=_-1+4*d,K=255&p,J=255&m,ee=255&v,et=255&g,er=h[K+h[J+h[ee+h[et]]]]%32,ea=h[K+S+h[J+E+h[ee+R+h[et+C]]]]%32,ei=h[K+T+h[J+U+h[ee+P+h[et+A]]]]%32,en=h[K+D+h[J+k+h[ee+I+h[et+O]]]]%32,eo=h[K+1+h[J+1+h[ee+1+h[et+1]]]]%32,es=.6-y*y-M*M-x*x-_*_;es<0?i=0:(es*=es,i=es*es*this._dot4(u[er],y,M,x,_));let el=.6-F*F-N*N-B*B-z*z;el<0?n=0:(el*=el,n=el*el*this._dot4(u[ea],F,N,B,z));let eu=.6-L*L-j*j-H*H-G*G;eu<0?o=0:(eu*=eu,o=eu*eu*this._dot4(u[ei],L,j,H,G));let ec=.6-q*q-V*V-W*W-Z*Z;ec<0?s=0:(ec*=ec,s=ec*ec*this._dot4(u[en],q,V,W,Z));let eh=.6-$*$-X*X-Y*Y-Q*Q;return eh<0?l=0:(eh*=eh,l=eh*eh*this._dot4(u[eo],$,X,Y,Q)),27*(i+n+o+s+l)}_dot(e,t,r){return e[0]*t+e[1]*r}_dot3(e,t,r,a){return e[0]*t+e[1]*r+e[2]*a}_dot4(e,t,r,a,i){return e[0]*t+e[1]*r+e[2]*a+e[3]*i}}let c={name:"SSAOShader",defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new a.I9Y},cameraProjectionMatrix:{value:new a.kn4},cameraInverseProjectionMatrix:{value:new a.kn4},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},h={name:"SSAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},d={name:"SSAOBlurShader",uniforms:{tDiffuse:{value:null},resolution:{value:new a.I9Y}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`},f={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class p extends i{constructor(e,t,r=512,i=512,n=32){super(),this.width=r,this.height=i,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(n),this._generateRandomKernelRotations();const o=new a.VCu;o.format=a.dcC,o.type=a.V3x,this.normalRenderTarget=new a.nWS(this.width,this.height,{minFilter:a.hxR,magFilter:a.hxR,type:a.ix0,depthTexture:o}),this.ssaoRenderTarget=new a.nWS(this.width,this.height,{type:a.ix0}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new a.BKk({defines:Object.assign({},c.defines),uniforms:a.LlO.clone(c.uniforms),vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:a.XIg}),this.ssaoMaterial.defines.KERNEL_SIZE=n,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new a.qBx,this.normalMaterial.blending=a.XIg,this.blurMaterial=new a.BKk({defines:Object.assign({},d.defines),uniforms:a.LlO.clone(d.uniforms),vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new a.BKk({defines:Object.assign({},h.defines),uniforms:a.LlO.clone(h.uniforms),vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:a.XIg}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new a.BKk({uniforms:a.LlO.clone(f.uniforms),vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:a.wn6,blendDst:a.ojh,blendEquation:a.gO9,blendSrcAlpha:a.hdd,blendDstAlpha:a.ojh,blendEquationAlpha:a.gO9}),this._fsQuad=new l(null),this._originalClearColor=new a.Q1f}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,r){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case p.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=a.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:r);break;case p.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=a.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:r);break;case p.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:r);break;case p.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=a.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:r);break;case p.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=a.bCz,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:r);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,r,a,i){e.getClearColor(this._originalClearColor);let n=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(r),e.autoClear=!1,null!=a&&(e.setClearColor(a),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(n)}_renderOverride(e,t,r,a,i){e.getClearColor(this._originalClearColor);let n=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(r),e.autoClear=!1,a=t.clearColor||a,i=t.clearAlpha||i,null!=a&&(e.setClearColor(a),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(n)}_generateSampleKernel(e){let t=this.kernel;for(let r=0;r<e;r++){let i=new a.Pq0;i.x=2*Math.random()-1,i.y=2*Math.random()-1,i.z=Math.random(),i.normalize();let n=r/e;n=a.cj9.lerp(.1,1,n*n),i.multiplyScalar(n),t.push(i)}}_generateRandomKernelRotations(){let e=new u,t=new Float32Array(16);for(let r=0;r<16;r++){let a=2*Math.random()-1,i=2*Math.random()-1;t[r]=e.noise3d(a,i,0)}this.noiseTexture=new a.GYF(t,4,4,a.VT0,a.RQf),this.noiseTexture.wrapS=a.GJx,this.noiseTexture.wrapT=a.GJx,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}}p.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4}},8904:(e,t,r)=>{let a;r.d(t,{OH:()=>ew});var i=r(7768),n=r(5805),o=r(8860),s=r(4930),l=r(3527);class u extends s.eaF{constructor(e,t){var r,a;const i=(e=>e&&e.isCubeTexture)(e),n=Math.floor(Math.log2((null!=(a=i?null==(r=e.image[0])?void 0:r.width:e.image.width)?a:1024)/4)),o=Math.pow(2,n),u=3*Math.max(o,112),c=`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,h=[i?"#define ENVMAP_TYPE_CUBE":"",`#define CUBEUV_TEXEL_WIDTH ${1/u}`,`#define CUBEUV_TEXEL_HEIGHT ${1/(4*o)}`,`#define CUBEUV_MAX_MIP ${n}.0`].join("\n")+`
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${l.r>=154?"colorspace_fragment":"encodings_fragment"}>
        }
        `,d={map:{value:e},height:{value:(null==t?void 0:t.height)||15},radius:{value:(null==t?void 0:t.radius)||100}};super(new s.WBB(1,16),new s.BKk({uniforms:d,fragmentShader:h,vertexShader:c,side:s.$EB}))}set radius(e){this.material.uniforms.radius.value=e}get radius(){return this.material.uniforms.radius.value}set height(e){this.material.uniforms.height.value=e}get height(){return this.material.uniforms.height.value}}class c extends s.BRH{constructor(e){super(e),this.type=s.ix0}parse(e){let t,r,a,i=function(e,t){switch(e){case 1:throw Error("THREE.RGBELoader: Read Error: "+(t||""));case 2:throw Error("THREE.RGBELoader: Write Error: "+(t||""));case 3:throw Error("THREE.RGBELoader: Bad File Format: "+(t||""));default:throw Error("THREE.RGBELoader: Memory Error: "+(t||""))}},n=function(e,t,r){t=t||1024;let a=e.pos,i=-1,n=0,o="",s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));for(;0>(i=s.indexOf("\n"))&&n<t&&a<e.byteLength;)o+=s,n+=s.length,a+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));return -1<i&&(!1!==r&&(e.pos+=n+i+1),o+s.slice(0,i))},o=new Uint8Array(e);o.pos=0;let l=function(e){let t,r,a=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,s=/^\s*FORMAT=(\S+)\s*$/,l=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,u={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};for(!(e.pos>=e.byteLength)&&(t=n(e))||i(1,"no header found"),(r=t.match(/^#\?(\S+)/))||i(3,"bad initial token"),u.valid|=1,u.programtype=r[1],u.string+=t+"\n";!1!==(t=n(e));){if(u.string+=t+"\n","#"===t.charAt(0)){u.comments+=t+"\n";continue}if((r=t.match(a))&&(u.gamma=parseFloat(r[1])),(r=t.match(o))&&(u.exposure=parseFloat(r[1])),(r=t.match(s))&&(u.valid|=2,u.format=r[1]),(r=t.match(l))&&(u.valid|=4,u.height=parseInt(r[1],10),u.width=parseInt(r[2],10)),2&u.valid&&4&u.valid)break}return 2&u.valid||i(3,"missing format specifier"),4&u.valid||i(3,"missing image size specifier"),u}(o),u=l.width,c=l.height,h=function(e,t,r){if(t<8||t>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);t!==(e[2]<<8|e[3])&&i(3,"wrong scanline width");let a=new Uint8Array(4*t*r);a.length||i(4,"unable to allocate buffer space");let n=0,o=0,s=4*t,l=new Uint8Array(4),u=new Uint8Array(s),c=r;for(;c>0&&o<e.byteLength;){o+4>e.byteLength&&i(1),l[0]=e[o++],l[1]=e[o++],l[2]=e[o++],l[3]=e[o++],(2!=l[0]||2!=l[1]||(l[2]<<8|l[3])!=t)&&i(3,"bad rgbe scanline format");let r=0,h;for(;r<s&&o<e.byteLength;){let t=(h=e[o++])>128;if(t&&(h-=128),(0===h||r+h>s)&&i(3,"bad scanline data"),t){let t=e[o++];for(let e=0;e<h;e++)u[r++]=t}else u.set(e.subarray(o,o+h),r),r+=h,o+=h}for(let e=0;e<t;e++){let r=0;a[n]=u[e+r],r+=t,a[n+1]=u[e+r],r+=t,a[n+2]=u[e+r],r+=t,a[n+3]=u[e+r],n+=4}c--}return a}(o.subarray(o.pos),u,c);switch(this.type){case s.RQf:let d=new Float32Array(4*(a=h.length/4));for(let e=0;e<a;e++)!function(e,t,r,a){let i=Math.pow(2,e[t+3]-128)/255;r[a+0]=e[t+0]*i,r[a+1]=e[t+1]*i,r[a+2]=e[t+2]*i,r[a+3]=1}(h,4*e,d,4*e);t=d,r=s.RQf;break;case s.ix0:let f=new Uint16Array(4*(a=h.length/4));for(let e=0;e<a;e++)!function(e,t,r,a){let i=Math.pow(2,e[t+3]-128)/255;r[a+0]=s.GxU.toHalfFloat(Math.min(e[t+0]*i,65504)),r[a+1]=s.GxU.toHalfFloat(Math.min(e[t+1]*i,65504)),r[a+2]=s.GxU.toHalfFloat(Math.min(e[t+2]*i,65504)),r[a+3]=s.GxU.toHalfFloat(1)}(h,4*e,f,4*e);t=f,r=s.ix0;break;default:throw Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:u,height:c,data:t,header:l.string,gamma:l.gamma,exposure:l.exposure,type:r}}setDataType(e){return this.type=e,this}load(e,t,r,a){return super.load(e,function(e,r){switch(e.type){case s.RQf:case s.ix0:"colorSpace"in e?e.colorSpace="srgb-linear":e.encoding=3e3,e.minFilter=s.k6q,e.magFilter=s.k6q,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,r)},r,a)}}var h=Uint8Array,d=Uint16Array,f=Uint32Array,p=new h([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),m=new h([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),v=new h([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),g=function(e,t){for(var r=new d(31),a=0;a<31;++a)r[a]=t+=1<<e[a-1];for(var i=new f(r[30]),a=1;a<30;++a)for(var n=r[a];n<r[a+1];++n)i[n]=n-r[a]<<5|a;return[r,i]},w=g(p,2),y=w[0],M=w[1];y[28]=258,M[258]=28;var x=g(m,0),_=x[0];x[1];for(var b=new d(32768),S=0;S<32768;++S){var E=(43690&S)>>>1|(21845&S)<<1;E=(61680&(E=(52428&E)>>>2|(13107&E)<<2))>>>4|(3855&E)<<4,b[S]=((65280&E)>>>8|(255&E)<<8)>>>1}for(var R=function(e,t,r){for(var a,i=e.length,n=0,o=new d(t);n<i;++n)++o[e[n]-1];var s=new d(t);for(n=0;n<t;++n)s[n]=s[n-1]+o[n-1]<<1;if(r){a=new d(1<<t);var l=15-t;for(n=0;n<i;++n)if(e[n])for(var u=n<<4|e[n],c=t-e[n],h=s[e[n]-1]++<<c,f=h|(1<<c)-1;h<=f;++h)a[b[h]>>>l]=u}else for(a=new d(i),n=0;n<i;++n)e[n]&&(a[n]=b[s[e[n]-1]++]>>>15-e[n]);return a},C=new h(288),S=0;S<144;++S)C[S]=8;for(var S=144;S<256;++S)C[S]=9;for(var S=256;S<280;++S)C[S]=7;for(var S=280;S<288;++S)C[S]=8;for(var T=new h(32),S=0;S<32;++S)T[S]=5;var U=R(C,9,1),P=R(T,5,1),A=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},D=function(e,t,r){var a=t/8|0;return(e[a]|e[a+1]<<8)>>(7&t)&r},k=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(7&t)},I=function(e,t,r){(null==t||t<0)&&(t=0),(null==r||r>e.length)&&(r=e.length);var a=new(e instanceof d?d:e instanceof f?f:h)(r-t);return a.set(e.subarray(t,r)),a},O=function(e,t,r){var a=e.length;if(!a||r&&!r.l&&a<5)return t||new h(0);var i=!t||r,n=!r||r.i;r||(r={}),t||(t=new h(3*a));var o=function(e){var r=t.length;if(e>r){var a=new h(Math.max(2*r,e));a.set(t),t=a}},s=r.f||0,l=r.p||0,u=r.b||0,c=r.l,d=r.d,f=r.m,g=r.n,w=8*a;do{if(!c){r.f=s=D(e,l,1);var M=D(e,l+1,3);if(l+=3,M)if(1==M)c=U,d=P,f=9,g=5;else if(2==M){var x=D(e,l,31)+257,b=D(e,l+10,15)+4,S=x+D(e,l+5,31)+1;l+=14;for(var E=new h(S),C=new h(19),T=0;T<b;++T)C[v[T]]=D(e,l+3*T,7);l+=3*b;for(var O=A(C),F=(1<<O)-1,N=R(C,O,1),T=0;T<S;){var B=N[D(e,l,F)];l+=15&B;var z=B>>>4;if(z<16)E[T++]=z;else{var L=0,j=0;for(16==z?(j=3+D(e,l,3),l+=2,L=E[T-1]):17==z?(j=3+D(e,l,7),l+=3):18==z&&(j=11+D(e,l,127),l+=7);j--;)E[T++]=L}}var H=E.subarray(0,x),G=E.subarray(x);f=A(H),g=A(G),c=R(H,f,1),d=R(G,g,1)}else throw"invalid block type";else{var q,z=((q=l)/8|0)+(7&q&&1)+4,V=e[z-4]|e[z-3]<<8,W=z+V;if(W>a){if(n)throw"unexpected EOF";break}i&&o(u+V),t.set(e.subarray(z,W),u),r.b=u+=V,r.p=l=8*W;continue}if(l>w){if(n)throw"unexpected EOF";break}}i&&o(u+131072);for(var Z=(1<<f)-1,$=(1<<g)-1,X=l;;X=l){var L=c[k(e,l)&Z],Y=L>>>4;if((l+=15&L)>w){if(n)throw"unexpected EOF";break}if(!L)throw"invalid length/literal";if(Y<256)t[u++]=Y;else if(256==Y){X=l,c=null;break}else{var Q=Y-254;if(Y>264){var T=Y-257,K=p[T];Q=D(e,l,(1<<K)-1)+y[T],l+=K}var J=d[k(e,l)&$],ee=J>>>4;if(!J)throw"invalid distance";l+=15&J;var G=_[ee];if(ee>3){var K=m[ee];G+=k(e,l)&(1<<K)-1,l+=K}if(l>w){if(n)throw"unexpected EOF";break}i&&o(u+131072);for(var et=u+Q;u<et;u+=4)t[u]=t[u-G],t[u+1]=t[u+1-G],t[u+2]=t[u+2-G],t[u+3]=t[u+3-G];u=et}}r.l=c,r.p=X,r.b=u,c&&(s=1,r.m=f,r.d=d,r.n=g)}while(!s);return u==t.length?t:I(t,0,u)},F=new h(0),N=function(e){if((15&e[0])!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)throw"invalid zlib data";if(32&e[1])throw"invalid zlib data: preset dictionaries not supported"};function B(e,t){return O((N(e),e.subarray(2,-4)),t)}var z="u">typeof TextDecoder&&new TextDecoder;try{z.decode(F,{stream:!0})}catch(e){}let L=l.r>=152;class j extends s.BRH{constructor(e){super(e),this.type=s.ix0}parse(e){let t={l:0,c:0,lc:0};function r(e,r,a,i,n){for(;a<e;)r=r<<8|R(i,n),a+=8;t.l=r>>(a-=e)&(1<<e)-1,t.c=r,t.lc=a}let a=Array(59),i={c:0,lc:0};function n(e,t,r,a){e=e<<8|R(r,a),t+=8,i.c=e,i.lc=t}let o={c:0,lc:0};function l(e,t,r,a,s,l,u,c,h,d){if(e==t){a<8&&(n(r,a,s,u),r=i.c,a=i.lc);var f=r>>(a-=8),f=new Uint8Array([f])[0];if(h.value+f>d)return!1;for(var p=c[h.value-1];f-- >0;)c[h.value++]=p}else{if(!(h.value<d))return!1;c[h.value++]=e}o.c=r,o.lc=a}function u(e){var t=65535&e;return t>32767?t-65536:t}let c={a:0,b:0};function h(e,t){var r=u(e),a=u(t),i=r+(1&a)+(a>>1),n=i-a;c.a=i,c.b=n}function d(e,t){var r=65535&t,a=(65535&e)-(r>>1)&65535;c.a=r+a-32768&65535,c.b=a}function f(e,s,u,c,h,d){var f=u.value,p=E(s,u),m=E(s,u);u.value+=4;var v=E(s,u);if(u.value+=4,p<0||p>=65537||m<0||m>=65537)throw"Something wrong with HUF_ENCSIZE";for(var g=Array(65537),w=Array(16384),y=0;y<16384;y++)w[y]={},w[y].len=0,w[y].lit=0,w[y].p=null;var M=c-(u.value-f);if(!function(e,i,n,o,s,l){for(var u=0,c=0;o<=s;o++){if(i.value-i.value>n)return!1;r(6,u,c,e,i);var h=t.l;if(u=t.c,c=t.lc,l[o]=h,63==h){if(i.value-i.value>n)throw"Something wrong with hufUnpackEncTable";r(8,u,c,e,i);var d=t.l+6;if(u=t.c,c=t.lc,o+d>s+1)throw"Something wrong with hufUnpackEncTable";for(;d--;)l[o++]=0;o--}else if(h>=59){var d=h-59+2;if(o+d>s+1)throw"Something wrong with hufUnpackEncTable";for(;d--;)l[o++]=0;o--}}!function(e){for(var t=0;t<=58;++t)a[t]=0;for(var t=0;t<65537;++t)a[e[t]]+=1;for(var r=0,t=58;t>0;--t){var i=r+a[t]>>1;a[t]=r,r=i}for(var t=0;t<65537;++t){var n=e[t];n>0&&(e[t]=n|a[n]++<<6)}}(l)}(e,u,M,p,m,g),v>8*(c-(u.value-f)))throw"Something wrong with hufUncompress";!function(e,t,r,a){for(;t<=r;t++){var i=e[t]>>6,n=63&e[t];if(i>>n)throw"Invalid table entry";if(n>14){var o=a[i>>n-14];if(o.len)throw"Invalid table entry";if(o.lit++,o.p){var s=o.p;o.p=Array(o.lit);for(var l=0;l<o.lit-1;++l)o.p[l]=s[l]}else o.p=[,];o.p[o.lit-1]=t}else if(n)for(var u=0,l=1<<14-n;l>0;l--){var o=a[(i<<14-n)+u];if(o.len||o.p)throw"Invalid table entry";o.len=n,o.lit=t,u++}}}(g,p,m,w),function(e,t,r,a,s,u,c,h,d,f){for(var p=0,m=0,v=Math.trunc(s.value+(u+7)/8);s.value<v;)for(n(p,m,r,s),p=i.c,m=i.lc;m>=14;){var g=t[p>>m-14&16383];if(g.len)m-=g.len,l(g.lit,c,p,m,r,a,s,d,f,h),p=o.c,m=o.lc;else{if(!g.p)throw"hufDecode issues";for(w=0;w<g.lit;w++){for(var w,y=63&e[g.p[w]];m<y&&s.value<v;)n(p,m,r,s),p=i.c,m=i.lc;if(m>=y&&e[g.p[w]]>>6==(p>>m-y&(1<<y)-1)){m-=y,l(g.p[w],c,p,m,r,a,s,d,f,h),p=o.c,m=o.lc;break}}if(w==g.lit)throw"hufDecode issues"}}var M=8-u&7;for(p>>=M,m-=M;m>0;){var g=t[p<<14-m&16383];if(g.len)m-=g.len,l(g.lit,c,p,m,r,a,s,d,f,h),p=o.c,m=o.lc;else throw"hufDecode issues"}}(g,w,e,s,u,v,m,d,h,{value:0})}function p(e){for(var t=1;t<e.length;t++){var r=e[t-1]+e[t]-128;e[t]=r}}function m(e,t){for(var r=0,a=Math.floor((e.length+1)/2),i=0,n=e.length-1;!(i>n)&&(t[i++]=e[r++],!(i>n));){;t[i++]=e[a++]}}function v(e){for(var t=e.byteLength,r=[],a=0,i=new DataView(e);t>0;){var n=i.getInt8(a++);if(n<0){var o=-n;t-=o+1;for(var s=0;s<o;s++)r.push(i.getUint8(a++))}else{var o=n;t-=2;for(var l=i.getUint8(a++),s=0;s<o+1;s++)r.push(l)}}return r}function g(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function w(e){var t=new Uint8Array(v(e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size))),r=new Uint8Array(t.length);return p(t),m(t,r),new DataView(r.buffer)}function y(e){var t=B(e.array.slice(e.offset.value,e.offset.value+e.size)),r=new Uint8Array(t.length);return p(t),m(t,r),new DataView(r.buffer)}function M(e){for(var t=e.viewer,r={value:e.offset.value},a=new Uint16Array(e.width*e.scanlineBlockSize*(e.channels*e.type)),i=new Uint8Array(8192),n=0,o=Array(e.channels),s=0;s<e.channels;s++)o[s]={},o[s].start=n,o[s].end=o[s].start,o[s].nx=e.width,o[s].ny=e.lines,o[s].size=e.type,n+=o[s].nx*o[s].ny*o[s].size;var l=D(t,r),u=D(t,r);if(u>=8192)throw"Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";if(l<=u)for(var s=0;s<u-l+1;s++)i[s+l]=C(t,r);var p=new Uint16Array(65536),m=function(e,t){for(var r=0,a=0;a<65536;++a)(0==a||e[a>>3]&1<<(7&a))&&(t[r++]=a);for(var i=r-1;r<65536;)t[r++]=0;return i}(i,p),v=E(t,r);f(e.array,t,r,v,a,n);for(var s=0;s<e.channels;++s)for(var g=o[s],w=0;w<o[s].size;++w)!function(e,t,r,a,i,n,o){for(var s=o<16384,l=r>i?i:r,u=1;u<=l;)u<<=1;for(u>>=1,f=u,u>>=1;u>=1;){for(var f,p,m,v,g,w=0,y=0+n*(i-f),M=n*u,x=n*f,_=a*u,b=a*f;w<=y;w+=x){for(var S=w,E=w+a*(r-f);S<=E;S+=b){var R=S+_,C=S+M,T=C+_;s?(h(e[S+t],e[C+t]),p=c.a,v=c.b,h(e[R+t],e[T+t]),m=c.a,g=c.b,h(p,m),e[S+t]=c.a,e[R+t]=c.b,h(v,g)):(d(e[S+t],e[C+t]),p=c.a,v=c.b,d(e[R+t],e[T+t]),m=c.a,g=c.b,d(p,m),e[S+t]=c.a,e[R+t]=c.b,d(v,g)),e[C+t]=c.a,e[T+t]=c.b}if(r&u){var C=S+M;s?h(e[S+t],e[C+t]):d(e[S+t],e[C+t]),p=c.a,e[C+t]=c.b,e[S+t]=p}}if(i&u)for(var S=w,E=w+a*(r-f);S<=E;S+=b){var R=S+_;s?h(e[S+t],e[R+t]):d(e[S+t],e[R+t]),p=c.a,e[R+t]=c.b,e[S+t]=p}f=u,u>>=1}}(a,g.start+w,g.nx,g.size,g.ny,g.nx*g.size,m);for(var y=n,M=0;M<y;++M)a[M]=p[a[M]];for(var x=0,_=new Uint8Array(a.buffer.byteLength),b=0;b<e.lines;b++)for(var S=0;S<e.channels;S++){var g=o[S],R=g.nx*g.size,T=new Uint8Array(a.buffer,2*g.end,2*R);_.set(T,x),x+=2*R,g.end+=R}return new DataView(_.buffer)}function x(e){var t=B(e.array.slice(e.offset.value,e.offset.value+e.size));let r=e.lines*e.channels*e.width,a=1==e.type?new Uint16Array(r):new Uint32Array(r),i=0,n=0,o=[,,,,];for(let r=0;r<e.lines;r++)for(let r=0;r<e.channels;r++){let r=0;switch(e.type){case 1:o[0]=i,o[1]=o[0]+e.width,i=o[1]+e.width;for(let i=0;i<e.width;++i)r+=t[o[0]++]<<8|t[o[1]++],a[n]=r,n++;break;case 2:o[0]=i,o[1]=o[0]+e.width,o[2]=o[1]+e.width,i=o[2]+e.width;for(let i=0;i<e.width;++i)r+=t[o[0]++]<<24|t[o[1]++]<<16|t[o[2]++]<<8,a[n]=r,n++}}return new DataView(a.buffer)}function _(e){var t=e.viewer,r={value:e.offset.value},a=new Uint8Array(e.width*e.lines*(e.channels*e.type*2)),i={version:T(t,r),unknownUncompressedSize:T(t,r),unknownCompressedSize:T(t,r),acCompressedSize:T(t,r),dcCompressedSize:T(t,r),rleCompressedSize:T(t,r),rleUncompressedSize:T(t,r),rleRawSize:T(t,r),totalAcUncompressedCount:T(t,r),totalDcUncompressedCount:T(t,r),acCompression:T(t,r)};if(i.version<2)throw"EXRLoader.parse: "+N.compression+" version "+i.version+" is unsupported";for(var n=[],o=D(t,r)-2;o>0;){var l=b(t.buffer,r),u=C(t,r),c=u>>2&3,h=new Int8Array([(u>>4)-1])[0],d=C(t,r);n.push({name:l,index:h,type:d,compression:c}),o-=l.length+3}for(var p=N.channels,m=Array(e.channels),g=0;g<e.channels;++g){var w=m[g]={},M=p[g];w.name=M.name,w.compression=0,w.decoded=!1,w.type=M.pixelType,w.pLinear=M.pLinear,w.width=e.width,w.height=e.lines}for(var x={idx:[,,,]},_=0;_<e.channels;++_)for(var w=m[_],g=0;g<n.length;++g){var S=n[g];w.name==S.name&&(w.compression=S.compression,S.index>=0&&(x.idx[S.index]=_),w.offset=_)}if(i.acCompressedSize>0)switch(i.acCompression){case 0:var E=new Uint16Array(i.totalAcUncompressedCount);f(e.array,t,r,i.acCompressedSize,E,i.totalAcUncompressedCount);break;case 1:var R=e.array.slice(r.value,r.value+i.totalAcUncompressedCount),U=B(R),E=new Uint16Array(U.buffer);r.value+=i.totalAcUncompressedCount}if(i.dcCompressedSize>0){var P=new Uint16Array(y({array:e.array,offset:r,size:i.dcCompressedSize}).buffer);r.value+=i.dcCompressedSize}if(i.rleRawSize>0){var R=e.array.slice(r.value,r.value+i.rleCompressedSize),U=B(R),k=v(U.buffer);r.value+=i.rleCompressedSize}for(var I=0,O=Array(m.length),g=0;g<O.length;++g)O[g]=[];for(var F=0;F<e.lines;++F)for(var z=0;z<m.length;++z)O[z].push(I),I+=m[z].width*e.type*2;!function(e,t,r,a,i,n){var o=new DataView(n.buffer),l=r[e.idx[0]].width,u=r[e.idx[0]].height,c=Math.floor(l/8),h=Math.ceil(l/8),d=Math.ceil(u/8),f=l-(h-1)*8,p=u-(d-1)*8,m={value:0},v=[,,,],g=[,,,],w=[,,,],y=[,,,],M=[,,,];for(let r=0;r<3;++r)M[r]=t[e.idx[r]],v[r]=r<1?0:v[r-1]+h*d,g[r]=new Float32Array(64),w[r]=new Uint16Array(64),y[r]=new Uint16Array(64*h);for(let t=0;t<d;++t){var x,_,b=8;t==d-1&&(b=p);var S=8;for(let e=0;e<h;++e){e==h-1&&(S=f);for(let e=0;e<3;++e){w[e].fill(0),w[e][0]=i[v[e]++],function(e,t,r){for(var a,i=1;i<64;)65280==(a=t[e.value])?i=64:a>>8==255?i+=255&a:(r[i]=a,i++),e.value++}(m,a,w[e]),x=w[e],(_=g[e])[0]=A(x[0]),_[1]=A(x[1]),_[2]=A(x[5]),_[3]=A(x[6]),_[4]=A(x[14]),_[5]=A(x[15]),_[6]=A(x[27]),_[7]=A(x[28]),_[8]=A(x[2]),_[9]=A(x[4]),_[10]=A(x[7]),_[11]=A(x[13]),_[12]=A(x[16]),_[13]=A(x[26]),_[14]=A(x[29]),_[15]=A(x[42]),_[16]=A(x[3]),_[17]=A(x[8]),_[18]=A(x[12]),_[19]=A(x[17]),_[20]=A(x[25]),_[21]=A(x[30]),_[22]=A(x[41]),_[23]=A(x[43]),_[24]=A(x[9]),_[25]=A(x[11]),_[26]=A(x[18]),_[27]=A(x[24]),_[28]=A(x[31]),_[29]=A(x[40]),_[30]=A(x[44]),_[31]=A(x[53]),_[32]=A(x[10]),_[33]=A(x[19]),_[34]=A(x[23]),_[35]=A(x[32]),_[36]=A(x[39]),_[37]=A(x[45]),_[38]=A(x[52]),_[39]=A(x[54]),_[40]=A(x[20]),_[41]=A(x[22]),_[42]=A(x[33]),_[43]=A(x[38]),_[44]=A(x[46]),_[45]=A(x[51]),_[46]=A(x[55]),_[47]=A(x[60]),_[48]=A(x[21]),_[49]=A(x[34]),_[50]=A(x[37]),_[51]=A(x[47]),_[52]=A(x[50]),_[53]=A(x[56]),_[54]=A(x[59]),_[55]=A(x[61]),_[56]=A(x[35]),_[57]=A(x[36]),_[58]=A(x[48]),_[59]=A(x[49]),_[60]=A(x[57]),_[61]=A(x[58]),_[62]=A(x[62]),_[63]=A(x[63]),function(e){let t=.5*Math.cos(3.14159/16),r=.5*Math.cos(3.14159/8),a=.5*Math.cos(3*3.14159/16),i=.5*Math.cos(3*3.14159/8);for(var n=[,,,,],o=[,,,,],s=[,,,,],l=[,,,,],u=0;u<8;++u){var c=8*u;n[0]=r*e[c+2],n[1]=i*e[c+2],n[2]=r*e[c+6],n[3]=i*e[c+6],o[0]=t*e[c+1]+a*e[c+3]+.2777854612564676*e[c+5]+.09754573032714427*e[c+7],o[1]=a*e[c+1]-.09754573032714427*e[c+3]-t*e[c+5]-.2777854612564676*e[c+7],o[2]=.2777854612564676*e[c+1]-t*e[c+3]+.09754573032714427*e[c+5]+a*e[c+7],o[3]=.09754573032714427*e[c+1]-.2777854612564676*e[c+3]+a*e[c+5]-t*e[c+7],s[0]=.35355362513961314*(e[c+0]+e[c+4]),s[3]=.35355362513961314*(e[c+0]-e[c+4]),s[1]=n[0]+n[3],s[2]=n[1]-n[2],l[0]=s[0]+s[1],l[1]=s[3]+s[2],l[2]=s[3]-s[2],l[3]=s[0]-s[1],e[c+0]=l[0]+o[0],e[c+1]=l[1]+o[1],e[c+2]=l[2]+o[2],e[c+3]=l[3]+o[3],e[c+4]=l[3]-o[3],e[c+5]=l[2]-o[2],e[c+6]=l[1]-o[1],e[c+7]=l[0]-o[0]}for(var h=0;h<8;++h)n[0]=r*e[16+h],n[1]=i*e[16+h],n[2]=r*e[48+h],n[3]=i*e[48+h],o[0]=t*e[8+h]+a*e[24+h]+.2777854612564676*e[40+h]+.09754573032714427*e[56+h],o[1]=a*e[8+h]-.09754573032714427*e[24+h]-t*e[40+h]-.2777854612564676*e[56+h],o[2]=.2777854612564676*e[8+h]-t*e[24+h]+.09754573032714427*e[40+h]+a*e[56+h],o[3]=.09754573032714427*e[8+h]-.2777854612564676*e[24+h]+a*e[40+h]-t*e[56+h],s[0]=.35355362513961314*(e[h]+e[32+h]),s[3]=.35355362513961314*(e[h]-e[32+h]),s[1]=n[0]+n[3],s[2]=n[1]-n[2],l[0]=s[0]+s[1],l[1]=s[3]+s[2],l[2]=s[3]-s[2],l[3]=s[0]-s[1],e[0+h]=l[0]+o[0],e[8+h]=l[1]+o[1],e[16+h]=l[2]+o[2],e[24+h]=l[3]+o[3],e[32+h]=l[3]-o[3],e[40+h]=l[2]-o[2],e[48+h]=l[1]-o[1],e[56+h]=l[0]-o[0]}(g[e])}for(var E=g,R=0;R<64;++R){var C=E[0][R],T=E[1][R],U=E[2][R];E[0][R]=C+1.5747*U,E[1][R]=C-.1873*T-.4682*U,E[2][R]=C+1.8556*T}for(let t=0;t<3;++t)!function(e,t,r){for(var a,i=0;i<64;++i){t[r+i]=s.GxU.toHalfFloat((a=e[i])<=1?Math.sign(a)*Math.pow(Math.abs(a),2.2):Math.sign(a)*Math.pow(9.025013291561939,Math.abs(a)-1))}}(g[t],y[t],64*e)}let n=0;for(let a=0;a<3;++a){let i=r[e.idx[a]].type;for(let e=8*t;e<8*t+b;++e){n=M[a][e];for(let t=0;t<c;++t){let r=64*t+(7&e)*8;o.setUint16(n+0*i,y[a][r+0],!0),o.setUint16(n+2*i,y[a][r+1],!0),o.setUint16(n+4*i,y[a][r+2],!0),o.setUint16(n+6*i,y[a][r+3],!0),o.setUint16(n+8*i,y[a][r+4],!0),o.setUint16(n+10*i,y[a][r+5],!0),o.setUint16(n+12*i,y[a][r+6],!0),o.setUint16(n+14*i,y[a][r+7],!0),n+=16*i}}if(c!=h)for(let e=8*t;e<8*t+b;++e){let t=M[a][e]+8*c*2*i,r=64*c+(7&e)*8;for(let e=0;e<S;++e)o.setUint16(t+2*e*i,y[a][r+e],!0)}}}for(var P=new Uint16Array(l),o=new DataView(n.buffer),D=0;D<3;++D){r[e.idx[D]].decoded=!0;var k=r[e.idx[D]].type;if(2==r[D].type)for(var I=0;I<u;++I){let e=M[D][I];for(var O=0;O<l;++O)P[O]=o.getUint16(e+2*O*k,!0);for(var O=0;O<l;++O)o.setFloat32(e+2*O*k,A(P[O]),!0)}}}(x,O,m,E,P,a);for(var g=0;g<m.length;++g){var w=m[g];if(!w.decoded)if(2===w.compression)for(var L=0,j=0,F=0;F<e.lines;++F){for(var H=O[g][L],G=0;G<w.width;++G){for(var q=0;q<2*w.type;++q)a[H++]=k[j+q*w.width*w.height];j++}L++}else throw"EXRLoader.parse: unsupported channel compression"}return new DataView(a.buffer)}function b(e,t){for(var r=new Uint8Array(e),a=0;0!=r[t.value+a];)a+=1;var i=new TextDecoder().decode(r.slice(t.value,t.value+a));return t.value=t.value+a+1,i}function S(e,t){var r=e.getInt32(t.value,!0);return t.value=t.value+4,r}function E(e,t){var r=e.getUint32(t.value,!0);return t.value=t.value+4,r}function R(e,t){var r=e[t.value];return t.value=t.value+1,r}function C(e,t){var r=e.getUint8(t.value);return t.value=t.value+1,r}let T=function(e,t){let r;return r="getBigInt64"in DataView.prototype?Number(e.getBigInt64(t.value,!0)):e.getUint32(t.value+4,!0)+Number(e.getUint32(t.value,!0)<<32),t.value+=8,r};function U(e,t){var r=e.getFloat32(t.value,!0);return t.value+=4,r}function P(e,t){return s.GxU.toHalfFloat(U(e,t))}function A(e){var t=(31744&e)>>10,r=1023&e;return(e>>15?-1:1)*(t?31===t?r?NaN:1/0:Math.pow(2,t-15)*(1+r/1024):r/1024*6103515625e-14)}function D(e,t){var r=e.getUint16(t.value,!0);return t.value+=2,r}function k(e,t){return A(D(e,t))}let I=new DataView(e),O=new Uint8Array(e),F={value:0},N=function(e,t,r){let a={};if(0x1312f76!=e.getUint32(0,!0))throw"THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";a.version=e.getUint8(4);let i=e.getUint8(5);a.spec={singleTile:!!(2&i),longName:!!(4&i),deepFormat:!!(8&i),multiPart:!!(16&i)},r.value=8;for(var n=!0;n;){var o=b(t,r);if(0==o)n=!1;else{var s=b(t,r),l=E(e,r),u=function(e,t,r,a,i){var n,o,s,l,u,c,h;if("string"===a||"stringvector"===a||"iccProfile"===a)return n=new TextDecoder().decode(new Uint8Array(t).slice(r.value,r.value+i)),r.value=r.value+i,n;if("chlist"===a)return function(e,t,r,a){for(var i=r.value,n=[];r.value<i+a-1;){var o=b(t,r),s=S(e,r),l=C(e,r);r.value+=3;var u=S(e,r),c=S(e,r);n.push({name:o,pixelType:s,pLinear:l,xSampling:u,ySampling:c})}return r.value+=1,n}(e,t,r,i);if("chromaticities"===a)return o=U(e,r),s=U(e,r),l=U(e,r),u=U(e,r),c=U(e,r),{redX:o,redY:s,greenX:l,greenY:u,blueX:c,blueY:U(e,r),whiteX:U(e,r),whiteY:U(e,r)};if("compression"===a)return["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"][C(e,r)];if("box2i"===a)return h=E(e,r),{xMin:h,yMin:E(e,r),xMax:E(e,r),yMax:E(e,r)};else if("lineOrder"===a)return["INCREASING_Y"][C(e,r)];else if("float"===a)return U(e,r);else if("v2f"===a)return[U(e,r),U(e,r)];else if("v3f"===a)return[U(e,r),U(e,r),U(e,r)];else if("int"===a)return S(e,r);else if("rational"===a)return[S(e,r),E(e,r)];else if("timecode"===a)return[E(e,r),E(e,r)];else return"preview"===a?(r.value+=i,"skipped"):(r.value+=i,void 0)}(e,t,r,s,l);void 0===u?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${s}'.`):a[o]=u}}if((-5&i)!=0)throw console.error("EXRHeader:",a),"THREE.EXRLoader: provided file is currently unsupported.";return a}(I,e,F),z=function(e,t,r,a,i){let n={size:0,viewer:t,array:r,offset:a,width:e.dataWindow.xMax-e.dataWindow.xMin+1,height:e.dataWindow.yMax-e.dataWindow.yMin+1,channels:e.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:e.channels[0].pixelType,uncompress:null,getter:null,format:null,[L?"colorSpace":"encoding"]:null};switch(e.compression){case"NO_COMPRESSION":n.lines=1,n.uncompress=g;break;case"RLE_COMPRESSION":n.lines=1,n.uncompress=w;break;case"ZIPS_COMPRESSION":n.lines=1,n.uncompress=y;break;case"ZIP_COMPRESSION":n.lines=16,n.uncompress=y;break;case"PIZ_COMPRESSION":n.lines=32,n.uncompress=M;break;case"PXR24_COMPRESSION":n.lines=16,n.uncompress=x;break;case"DWAA_COMPRESSION":n.lines=32,n.uncompress=_;break;case"DWAB_COMPRESSION":n.lines=256,n.uncompress=_;break;default:throw"EXRLoader.parse: "+e.compression+" is unsupported"}if(n.scanlineBlockSize=n.lines,1==n.type)switch(i){case s.RQf:n.getter=k,n.inputSize=2;break;case s.ix0:n.getter=D,n.inputSize=2}else if(2==n.type)switch(i){case s.RQf:n.getter=U,n.inputSize=4;break;case s.ix0:n.getter=P,n.inputSize=4}else throw"EXRLoader.parse: unsupported pixelType "+n.type+" for "+e.compression+".";n.blockCount=(e.dataWindow.yMax+1)/n.scanlineBlockSize;for(var o=0;o<n.blockCount;o++)T(t,a);n.outputChannels=3==n.channels?4:n.channels;let l=n.width*n.height*n.outputChannels;switch(i){case s.RQf:n.byteArray=new Float32Array(l),n.channels<n.outputChannels&&n.byteArray.fill(1,0,l);break;case s.ix0:n.byteArray=new Uint16Array(l),n.channels<n.outputChannels&&n.byteArray.fill(15360,0,l);break;default:console.error("THREE.EXRLoader: unsupported type: ",i)}return n.bytesPerLine=n.width*n.inputSize*n.channels,4==n.outputChannels?n.format=s.GWd:n.format=s.VT0,L?n.colorSpace="srgb-linear":n.encoding=3e3,n}(N,I,O,F,this.type),j={value:0},H={R:0,G:1,B:2,A:3,Y:0};for(let e=0;e<z.height/z.scanlineBlockSize;e++){let t=E(I,F);z.size=E(I,F),z.lines=t+z.scanlineBlockSize>z.height?z.height-t:z.scanlineBlockSize;let r=z.size<z.lines*z.bytesPerLine?z.uncompress(z):g(z);F.value+=z.size;for(let t=0;t<z.scanlineBlockSize;t++){let a=t+e*z.scanlineBlockSize;if(a>=z.height)break;for(let e=0;e<z.channels;e++){let i=H[N.channels[e].name];for(let n=0;n<z.width;n++){j.value=(t*(z.channels*z.width)+e*z.width+n)*z.inputSize;let o=(z.height-1-a)*(z.width*z.outputChannels)+n*z.outputChannels+i;z.byteArray[o]=z.getter(r,j)}}}}return{header:N,width:z.width,height:z.height,data:z.byteArray,format:z.format,[L?"colorSpace":"encoding"]:z[L?"colorSpace":"encoding"],type:this.type}}setDataType(e){return this.type=e,this}load(e,t,r,a){return super.load(e,function(e,r){L?e.colorSpace=r.colorSpace:e.encoding=r.encoding,e.minFilter=s.k6q,e.magFilter=s.k6q,e.generateMipmaps=!1,e.flipY=!1,t&&t(e,r)},r,a)}}var H=r(425);let G=(e,t,r)=>{let a;switch(e){case s.OUM:a=new Uint8ClampedArray(t*r*4);break;case s.ix0:a=new Uint16Array(t*r*4);break;case s.bkx:a=new Uint32Array(t*r*4);break;case s.tJf:a=new Int8Array(t*r*4);break;case s.fBL:a=new Int16Array(t*r*4);break;case s.Yuy:a=new Int32Array(t*r*4);break;case s.RQf:a=new Float32Array(t*r*4);break;default:throw Error("Unsupported data type")}return a};class q{_renderer;_rendererIsDisposable=!1;_material;_scene;_camera;_quad;_renderTarget;_width;_height;_type;_colorSpace;_supportsReadPixels=!0;constructor(e){this._width=e.width,this._height=e.height,this._type=e.type,this._colorSpace=e.colorSpace;const t={format:s.GWd,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:e.renderTargetOptions?.anisotropy!==void 0?e.renderTargetOptions?.anisotropy:1,generateMipmaps:e.renderTargetOptions?.generateMipmaps!==void 0&&e.renderTargetOptions?.generateMipmaps,magFilter:e.renderTargetOptions?.magFilter!==void 0?e.renderTargetOptions?.magFilter:s.k6q,minFilter:e.renderTargetOptions?.minFilter!==void 0?e.renderTargetOptions?.minFilter:s.k6q,samples:e.renderTargetOptions?.samples!==void 0?e.renderTargetOptions?.samples:void 0,wrapS:e.renderTargetOptions?.wrapS!==void 0?e.renderTargetOptions?.wrapS:s.ghU,wrapT:e.renderTargetOptions?.wrapT!==void 0?e.renderTargetOptions?.wrapT:s.ghU};if(this._material=e.material,e.renderer?this._renderer=e.renderer:(this._renderer=q.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new s.Z58,this._camera=new s.qUd,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!((e,t,r,i)=>{if(void 0!==a)return a;let n=new s.nWS(1,1,i);t.setRenderTarget(n);let o=new s.eaF(new s.bdM,new s.V9B({color:0xffffff}));t.render(o,r),t.setRenderTarget(null);let l=G(e,n.width,n.height);return t.readRenderTargetPixels(n,0,0,n.width,n.height,l),n.dispose(),o.geometry.dispose(),o.material.dispose(),a=0!==l[0]})(this._type,this._renderer,this._camera,t)){let e;this._type===s.ix0&&(e=this._renderer.extensions.has("EXT_color_buffer_float")?s.RQf:void 0),void 0!==e?(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${s.RQf}`),this._type=e):(this._supportsReadPixels=!1,console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"))}this._quad=new s.eaF(new s.bdM,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new s.nWS(this.width,this.height,t),this._renderTarget.texture.mapping=e.renderTargetOptions?.mapping!==void 0?e.renderTargetOptions?.mapping:s.UTZ}static instantiateRenderer(){let e=new H.WebGLRenderer;return e.setSize(128,128),e}render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(e){throw this._renderer.setRenderTarget(null),e}this._renderer.setRenderTarget(null)};toArray(){if(!this._supportsReadPixels)throw Error("Can't read pixels in this browser");let e=G(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,e),e}toDataTexture(e){let t=new s.GYF(this.toArray(),this.width,this.height,s.GWd,this._type,e?.mapping||s.UTZ,e?.wrapS||s.ghU,e?.wrapT||s.ghU,e?.magFilter||s.k6q,e?.minFilter||s.k6q,e?.anisotropy||1,s.Zr2);return t.generateMipmaps=e?.generateMipmaps!==void 0&&e?.generateMipmaps,t}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(e){this.disposeOnDemandRenderer(),e&&this.renderTarget.dispose(),this.material instanceof s.BKk&&Object.values(this.material.uniforms).forEach(e=>{e.value instanceof s.gPd&&e.value.dispose()}),Object.values(this.material).forEach(e=>{e instanceof s.gPd&&e.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(e){this._width=e,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(e){this._height=e,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(e){this._renderTarget=e,this._width=e.width,this._height=e.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}}class V extends Error{}class W extends Error{}let Z=(e,t,r)=>{let a=RegExp(`${t}="([^"]*)"`,"i").exec(e);if(a)return a[1];let i=RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`,"i").exec(e);if(i){let e=i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);return e&&3===e.length?e.map(e=>e.replace(/<\/?rdf:li>/g,"")):i[1].trim()}if(void 0!==r)return r;throw Error(`Can't find ${t} in gainmap metadata`)};class ${options;constructor(e){this.options={debug:!!e&&void 0!==e.debug&&e.debug,extractFII:!e||void 0===e.extractFII||e.extractFII,extractNonFII:!e||void 0===e.extractNonFII||e.extractNonFII}}extract(e){return new Promise((t,r)=>{let a,i=this.options.debug,n=new DataView(e.buffer);if(65496!==n.getUint16(0))return void r(Error("Not a valid jpeg"));let o=n.byteLength,s=2,l=0;for(;s<o;){if(++l>250)return void r(Error(`Found no marker after ${l} loops 😵`));if(255!==n.getUint8(s))return void r(Error(`Not a valid marker at offset 0x${s.toString(16)}, found: 0x${n.getUint8(s).toString(16)}`));if(a=n.getUint8(s+1),i&&console.log(`Marker: ${a.toString(16)}`),226===a){i&&console.log("Found APP2 marker (0xffe2)");let e=s+4;if(0x4d504600===n.getUint32(e)){let a,i=e+4;if(18761===n.getUint16(i))a=!1;else{if(19789!==n.getUint16(i))return void r(Error("No valid endianness marker found in TIFF header"));a=!0}if(42!==n.getUint16(i+2,!a))return void r(Error("Not valid TIFF data! (no 0x002A marker)"));let o=n.getUint32(i+4,!a);if(o<8)return void r(Error("Not valid TIFF data! (First offset less than 8)"));let s=i+o,l=n.getUint16(s,!a),u=s+2,c=0;for(let e=u;e<u+12*l;e+=12)45057===n.getUint16(e,!a)&&(c=n.getUint32(e+8,!a));let h=s+2+12*l+4,d=[];for(let e=h;e<h+16*c;e+=16){let t={MPType:n.getUint32(e,!a),size:n.getUint32(e+4,!a),dataOffset:n.getUint32(e+8,!a),dependantImages:n.getUint32(e+12,!a),start:-1,end:-1,isFII:!1};t.dataOffset?(t.start=i+t.dataOffset,t.isFII=!1):(t.start=0,t.isFII=!0),t.end=t.start+t.size,d.push(t)}if(this.options.extractNonFII&&d.length){let e=new Blob([n]),r=[];for(let t of d){if(t.isFII&&!this.options.extractFII)continue;let a=e.slice(t.start,t.end+1,"image/jpeg");r.push(a)}t(r)}}}s+=2+n.getUint16(s+2)}})}}let X=async e=>{let t=(e=>{let t,r=(t="u">typeof TextDecoder?new TextDecoder().decode(e):e.toString()).indexOf("<x:xmpmeta");for(;-1!==r;){let e=t.indexOf("x:xmpmeta>",r),a=t.slice(r,e+10);try{let e=Z(a,"hdrgm:GainMapMin","0"),t=Z(a,"hdrgm:GainMapMax"),r=Z(a,"hdrgm:Gamma","1"),i=Z(a,"hdrgm:OffsetSDR","0.015625"),n=Z(a,"hdrgm:OffsetHDR","0.015625"),o=/hdrgm:HDRCapacityMin="([^"]*)"/.exec(a),s=o?o[1]:"0",l=/hdrgm:HDRCapacityMax="([^"]*)"/.exec(a);if(!l)throw Error("Incomplete gainmap metadata");let u=l[1];return{gainMapMin:Array.isArray(e)?e.map(e=>parseFloat(e)):[parseFloat(e),parseFloat(e),parseFloat(e)],gainMapMax:Array.isArray(t)?t.map(e=>parseFloat(e)):[parseFloat(t),parseFloat(t),parseFloat(t)],gamma:Array.isArray(r)?r.map(e=>parseFloat(e)):[parseFloat(r),parseFloat(r),parseFloat(r)],offsetSdr:Array.isArray(i)?i.map(e=>parseFloat(e)):[parseFloat(i),parseFloat(i),parseFloat(i)],offsetHdr:Array.isArray(n)?n.map(e=>parseFloat(e)):[parseFloat(n),parseFloat(n),parseFloat(n)],hdrCapacityMin:parseFloat(s),hdrCapacityMax:parseFloat(u)}}catch(e){}r=t.indexOf("<x:xmpmeta",e)}})(e);if(!t)throw new W("Gain map XMP metadata not found");let r=new $({extractFII:!0,extractNonFII:!0}),a=await r.extract(e);if(2!==a.length)throw new V("Gain map recovery image not found");return{sdr:new Uint8Array(await a[0].arrayBuffer()),gainMap:new Uint8Array(await a[1].arrayBuffer()),metadata:t}},Y=e=>new Promise((t,r)=>{let a=document.createElement("img");a.onload=()=>{t(a)},a.onerror=e=>{r(e)},a.src=URL.createObjectURL(e)});class Q extends s.aHM{_renderer;_renderTargetOptions;_internalLoadingManager;_config;constructor(e,t){super(t),this._config=e,e.renderer&&(this._renderer=e.renderer),this._internalLoadingManager=new s.KPJ}setRenderer(e){return this._renderer=e,this}setRenderTargetOptions(e){return this._renderTargetOptions=e,this}prepareQuadRenderer(){this._renderer||console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");let e=this._config.createMaterial({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new s.gPd,sdr:new s.gPd});return this._config.createQuadRenderer({width:16,height:16,type:s.ix0,colorSpace:s.Zr2,material:e,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}async processImages(e,t,r){let a,i,n=t?new Blob([t],{type:"image/jpeg"}):void 0,o=new Blob([e],{type:"image/jpeg"}),s=!1;if("u"<typeof createImageBitmap){let e=await Promise.all([n?Y(n):Promise.resolve(void 0),Y(o)]);i=e[0],a=e[1],s="flipY"===r}else{let e=await Promise.all([n?createImageBitmap(n,{imageOrientation:r||"flipY"}):Promise.resolve(void 0),createImageBitmap(o,{imageOrientation:r||"flipY"})]);i=e[0],a=e[1]}return{sdrImage:a,gainMapImage:i,needsFlip:s}}createTextures(e,t,r){let a=new s.gPd(t||new ImageData(2,2),s.UTZ,s.ghU,s.ghU,s.k6q,s.NZq,s.GWd,s.OUM,1,s.Zr2);a.flipY=r,a.needsUpdate=!0;let i=new s.gPd(e,s.UTZ,s.ghU,s.ghU,s.k6q,s.NZq,s.GWd,s.OUM,1,s.er$);return i.flipY=r,i.needsUpdate=!0,{gainMap:a,sdr:i}}updateQuadRenderer(e,t,r,a,i){e.width=t.width,e.height=t.height,e.material.gainMap=r,e.material.sdr=a,e.material.gainMapMin=i.gainMapMin,e.material.gainMapMax=i.gainMapMax,e.material.offsetHdr=i.offsetHdr,e.material.offsetSdr=i.offsetSdr,e.material.gamma=i.gamma,e.material.hdrCapacityMin=i.hdrCapacityMin,e.material.hdrCapacityMax=i.hdrCapacityMax,e.material.maxDisplayBoost=Math.pow(2,i.hdrCapacityMax),e.material.needsUpdate=!0}}let K=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,J=`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;class ee extends s.BKk{_maxDisplayBoost;_hdrCapacityMin;_hdrCapacityMax;constructor({gamma:e,offsetHdr:t,offsetSdr:r,gainMapMin:a,gainMapMax:i,maxDisplayBoost:n,hdrCapacityMin:o,hdrCapacityMax:l,sdr:u,gainMap:c}){super({name:"GainMapDecoderMaterial",vertexShader:K,fragmentShader:J,uniforms:{sdr:{value:u},gainMap:{value:c},gamma:{value:new s.Pq0(1/e[0],1/e[1],1/e[2])},offsetHdr:{value:new s.Pq0().fromArray(t)},offsetSdr:{value:new s.Pq0().fromArray(r)},gainMapMin:{value:new s.Pq0().fromArray(a)},gainMapMax:{value:new s.Pq0().fromArray(i)},weightFactor:{value:(Math.log2(n)-o)/(l-o)}},blending:s.XIg,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=n,this._hdrCapacityMin=o,this._hdrCapacityMax=l,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(e){this.uniforms.sdr.value=e}get gainMap(){return this.uniforms.gainMap.value}set gainMap(e){this.uniforms.gainMap.value=e}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(e){this.uniforms.offsetHdr.value.fromArray(e)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(e){this.uniforms.offsetSdr.value.fromArray(e)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(e){this.uniforms.gainMapMin.value.fromArray(e)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(e){this.uniforms.gainMapMax.value.fromArray(e)}get gamma(){let e=this.uniforms.gamma.value;return[1/e.x,1/e.y,1/e.z]}set gamma(e){let t=this.uniforms.gamma.value;t.x=1/e[0],t.y=1/e[1],t.z=1/e[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(e){this._hdrCapacityMin=e,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(e){this._hdrCapacityMax=e,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(e){this._maxDisplayBoost=Math.max(1,Math.min(65504,e)),this.calculateWeight()}calculateWeight(){let e=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,e))}}H.WebGLRenderer;class et extends Q{constructor(e,t){super({renderer:e,createMaterial:e=>new ee(e),createQuadRenderer:e=>new q(e)},t)}async render(e,t,r,a){let{sdrImage:i,gainMapImage:n,needsFlip:o}=await this.processImages(r,a,"flipY"),{gainMap:s,sdr:l}=this.createTextures(i,n,o);this.updateQuadRenderer(e,i,s,l,t),e.render()}}class er extends et{load([e,t,r],a,i,n){let o,l,u,c=this.prepareQuadRenderer(),h=async()=>{if(o&&l&&u){try{await this.render(c,u,o,l)}catch(a){this.manager.itemError(e),this.manager.itemError(t),this.manager.itemError(r),"function"==typeof n&&n(a),c.disposeOnDemandRenderer();return}"function"==typeof a&&a(c),this.manager.itemEnd(e),this.manager.itemEnd(t),this.manager.itemEnd(r),c.disposeOnDemandRenderer()}},d=!0,f=0,p=0,m=!0,v=0,g=0,w=!0,y=0,M=0,x=()=>{"function"==typeof i&&i(new ProgressEvent("progress",{lengthComputable:d&&m&&w,loaded:p+g+M,total:f+v+y}))};this.manager.itemStart(e),this.manager.itemStart(t),this.manager.itemStart(r);let _=new s.Y9S(this._internalLoadingManager);_.setResponseType("arraybuffer"),_.setRequestHeader(this.requestHeader),_.setPath(this.path),_.setWithCredentials(this.withCredentials),_.load(e,async e=>{if("string"==typeof e)throw Error("Invalid sdr buffer");o=e,await h()},e=>{d=e.lengthComputable,p=e.loaded,f=e.total,x()},t=>{this.manager.itemError(e),"function"==typeof n&&n(t)});let b=new s.Y9S(this._internalLoadingManager);b.setResponseType("arraybuffer"),b.setRequestHeader(this.requestHeader),b.setPath(this.path),b.setWithCredentials(this.withCredentials),b.load(t,async e=>{if("string"==typeof e)throw Error("Invalid gainmap buffer");l=e,await h()},e=>{m=e.lengthComputable,g=e.loaded,v=e.total,x()},e=>{this.manager.itemError(t),"function"==typeof n&&n(e)});let S=new s.Y9S(this._internalLoadingManager);return S.setRequestHeader(this.requestHeader),S.setPath(this.path),S.setWithCredentials(this.withCredentials),S.load(r,async e=>{if("string"!=typeof e)throw Error("Invalid metadata string");u=JSON.parse(e),await h()},e=>{w=e.lengthComputable,M=e.loaded,y=e.total,x()},e=>{this.manager.itemError(r),"function"==typeof n&&n(e)}),c}}class ea extends et{load(e,t,r,a){let i=this.prepareQuadRenderer(),n=new s.Y9S(this._internalLoadingManager);return n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setPath(this.path),n.setWithCredentials(this.withCredentials),this.manager.itemStart(e),n.load(e,async r=>{let n,o,s;if("string"==typeof r)throw Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");let l=new Uint8Array(r);try{let e=await X(l);n=e.sdr,o=e.gainMap,s=e.metadata}catch(t){if(t instanceof W||t instanceof V)console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),s={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},n=l;else throw t}try{await this.render(i,s,n.buffer,o?.buffer)}catch(t){this.manager.itemError(e),"function"==typeof a&&a(t),i.disposeOnDemandRenderer();return}"function"==typeof t&&t(i),this.manager.itemEnd(e),i.disposeOnDemandRenderer()},r,t=>{this.manager.itemError(e),"function"==typeof a&&a(t)}),i}}let ei={apartment:"lebombo_1k.hdr",city:"potsdamer_platz_1k.hdr",dawn:"kiara_1_dawn_1k.hdr",forest:"forest_slope_1k.hdr",lobby:"st_fagans_interior_1k.hdr",night:"dikhololo_night_1k.hdr",park:"rooitou_park_1k.hdr",studio:"studio_small_03_1k.hdr",sunset:"venice_sunset_1k.hdr",warehouse:"empty_warehouse_01_1k.hdr"},en="https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/",eo=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"];function es({files:e=eo,path:t="",preset:r,colorSpace:a,extensions:i}={}){r&&(ec(r),e=ei[r],t=en);let l=Array.isArray(e),{extension:u,isCubemap:c}=eh(e),h=ed(u);if(!h)throw Error("useEnvironment: Unrecognized file extension: "+e);let d=(0,o.D)(e=>e.gl);(0,n.useLayoutEffect)(()=>{("webp"===u||"jpg"===u||"jpeg"===u)&&d.domElement.addEventListener("webglcontextlost",function(){o.H.clear(h,l?[e]:e)},{once:!0})},[e,d.domElement]);let f=(0,o.H)(h,l?[e]:e,e=>{("webp"===u||"jpg"===u||"jpeg"===u)&&e.setRenderer(d),null==e.setPath||e.setPath(t),i&&i(e)}),p=l?f[0]:f;if("jpg"===u||"jpeg"===u||"webp"===u){var m;p=null==(m=p.renderTarget)?void 0:m.texture}return p.mapping=c?s.hy7:s.wfO,p.colorSpace=null!=a?a:c?"srgb":"srgb-linear",p}let el={files:eo,path:"",preset:void 0,extensions:void 0};es.preload=e=>{let t={...el,...e},{files:r,path:a=""}=t,{preset:i,extensions:n}=t;i&&(ec(i),r=ei[i],a=en);let{extension:s}=eh(r);if("webp"===s||"jpg"===s||"jpeg"===s)throw Error("useEnvironment: Preloading gainmaps is not supported");let l=ed(s);if(!l)throw Error("useEnvironment: Unrecognized file extension: "+r);o.H.preload(l,Array.isArray(r)?[r]:r,e=>{null==e.setPath||e.setPath(a),n&&n(e)})};let eu={files:eo,preset:void 0};function ec(e){if(!(e in ei))throw Error("Preset must be one of: "+Object.keys(ei).join(", "))}function eh(e){var t;let r=Array.isArray(e)&&6===e.length,a=Array.isArray(e)&&3===e.length&&e.some(e=>e.endsWith("json")),i=Array.isArray(e)?e[0]:e;return{extension:r?"cube":a?"webp":i.startsWith("data:application/exr")?"exr":i.startsWith("data:application/hdr")?"hdr":i.startsWith("data:image/jpeg")?"jpg":null==(t=i.split(".").pop())||null==(t=t.split("?"))||null==(t=t.shift())?void 0:t.toLowerCase(),isCubemap:r,isGainmap:a}}function ed(e){return"cube"===e?s.ScU:"hdr"===e?c:"exr"===e?j:"jpg"===e||"jpeg"===e?ea:"webp"===e?er:null}function ef(e,t,r,a,i={}){var n,s,l,u,c;let h;i={backgroundBlurriness:0,backgroundIntensity:1,backgroundRotation:[0,0,0],environmentIntensity:1,environmentRotation:[0,0,0],...i};let d=(h=c=t||r).current&&h.current.isScene?c.current:c,f=d.background,p=d.environment,m={backgroundBlurriness:d.backgroundBlurriness,backgroundIntensity:d.backgroundIntensity,backgroundRotation:null!=(n=null==(s=d.backgroundRotation)||null==s.clone?void 0:s.clone())?n:[0,0,0],environmentIntensity:d.environmentIntensity,environmentRotation:null!=(l=null==(u=d.environmentRotation)||null==u.clone?void 0:u.clone())?l:[0,0,0]};return"only"!==e&&(d.environment=a),e&&(d.background=a),(0,o.v)(d,i),()=>{"only"!==e&&(d.environment=p),e&&(d.background=f),(0,o.v)(d,m)}}function ep({scene:e,background:t=!1,map:r,...a}){let i=(0,o.D)(e=>e.scene);return n.useLayoutEffect(()=>{if(r)return ef(t,e,i,r,a)}),null}function em({background:e=!1,scene:t,blur:r,backgroundBlurriness:a,backgroundIntensity:i,backgroundRotation:s,environmentIntensity:l,environmentRotation:u,...c}){let h=es(c),d=(0,o.D)(e=>e.scene);return n.useLayoutEffect(()=>ef(e,t,d,h,{backgroundBlurriness:null!=r?r:a,backgroundIntensity:i,backgroundRotation:s,environmentIntensity:l,environmentRotation:u})),n.useEffect(()=>()=>{h.dispose()},[h]),null}function ev({children:e,near:t=.1,far:r=1e3,resolution:a=256,frames:i=1,map:l,background:u=!1,blur:c,backgroundBlurriness:h,backgroundIntensity:d,backgroundRotation:f,environmentIntensity:p,environmentRotation:m,scene:v,files:g,path:w,preset:y,extensions:M}){let x=(0,o.D)(e=>e.gl),_=(0,o.D)(e=>e.scene),b=n.useRef(null),[S]=n.useState(()=>new s.Z58),E=n.useMemo(()=>{let e=new s.o6l(a);return e.texture.type=s.ix0,e},[a]);n.useEffect(()=>()=>{E.dispose()},[E]),n.useLayoutEffect(()=>{if(1===i){let e=x.autoClear;x.autoClear=!0,b.current.update(x,S),x.autoClear=e}return ef(u,v,_,E.texture,{backgroundBlurriness:null!=c?c:h,backgroundIntensity:d,backgroundRotation:f,environmentIntensity:p,environmentRotation:m})},[e,S,E.texture,v,_,u,i,x]);let R=1;return(0,o.F)(()=>{if(i===1/0||R<i){let e=x.autoClear;x.autoClear=!0,b.current.update(x,S),x.autoClear=e,R++}}),n.createElement(n.Fragment,null,(0,o.q)(n.createElement(n.Fragment,null,e,n.createElement("cubeCamera",{ref:b,args:[t,r,E]}),g||y?n.createElement(em,{background:!0,files:g,preset:y,path:w,extensions:M}):l?n.createElement(ep,{background:!0,map:l,extensions:M}):null),S))}function eg(e){var t,r,a,s;let l=es(e),c=e.map||l;n.useMemo(()=>(0,o.e)({GroundProjectedEnvImpl:u}),[]),n.useEffect(()=>()=>{l.dispose()},[l]);let h=n.useMemo(()=>[c],[c]),d=null==(t=e.ground)?void 0:t.height,f=null==(r=e.ground)?void 0:r.radius,p=null!=(a=null==(s=e.ground)?void 0:s.scale)?a:1e3;return n.createElement(n.Fragment,null,n.createElement(ep,(0,i.A)({},e,{map:c})),n.createElement("groundProjectedEnvImpl",{args:h,scale:p,height:d,radius:f}))}function ew(e){return e.ground?n.createElement(eg,e):e.map?n.createElement(ep,e):e.children?n.createElement(ev,e):n.createElement(em,e)}es.clear=e=>{let t={...eu,...e},{files:r}=t,{preset:a}=t;a&&(ec(a),r=ei[a]);let{extension:i}=eh(r),n=ed(i);if(!n)throw Error("useEnvironment: Unrecognized file extension: "+r);o.H.clear(n,Array.isArray(r)?[r]:r)}}}]);