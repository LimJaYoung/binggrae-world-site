(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3838],{1187:(e,t,r)=>{Promise.resolve().then(r.bind(r,8566))},8566:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var v=r(4553),i=r(5805),a=r(1795),s=r(7768),n=r(4930),u=r(8860);let o={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},f={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},l=i.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:v=1,height:a=1,blur:l=1,near:c=0,far:m=10,resolution:d=512,smooth:x=!0,color:h="#000000",depthWrite:p=!1,renderOrder:g,...D},U)=>{let y,b,M=i.useRef(null),j=(0,u.D)(e=>e.scene),w=(0,u.D)(e=>e.gl),k=i.useRef(null);v*=Array.isArray(e)?e[0]:e||1,a*=Array.isArray(e)?e[1]:e||1;let[C,S,_,P,A,E,R]=i.useMemo(()=>{let e=new n.nWS(d,d),t=new n.nWS(d,d);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new n.bdM(v,a).rotateX(Math.PI/2),i=new n.eaF(r),s=new n.CSG;s.depthTest=s.depthWrite=!1,s.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new n.Q1f(h)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let u=new n.BKk(o),l=new n.BKk(f);return l.depthTest=u.depthTest=!1,[e,r,s,i,u,l,t]},[d,v,a,e,h]),T=e=>{P.visible=!0,P.material=A,A.uniforms.tDiffuse.value=C.texture,A.uniforms.h.value=e/256,w.setRenderTarget(R),w.render(P,k.current),P.material=E,E.uniforms.tDiffuse.value=R.texture,E.uniforms.v.value=e/256,w.setRenderTarget(C),w.render(P,k.current),P.visible=!1},F=0;return(0,u.F)(()=>{k.current&&(t===1/0||F<t)&&(F++,y=j.background,b=j.overrideMaterial,M.current.visible=!1,j.background=null,j.overrideMaterial=_,w.setRenderTarget(C),w.render(j,k.current),T(l),x&&T(.4*l),w.setRenderTarget(null),M.current.visible=!0,j.overrideMaterial=b,j.background=y)}),i.useImperativeHandle(U,()=>M.current,[]),i.createElement("group",(0,s.A)({"rotation-x":Math.PI/2},D,{ref:M}),i.createElement("mesh",{renderOrder:g,geometry:S,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},i.createElement("meshBasicMaterial",{transparent:!0,map:C.texture,opacity:r,depthWrite:p})),i.createElement("orthographicCamera",{ref:k,args:[-v/2,v/2,a/2,-a/2,c,m]}))});var c=r(5783),m=r(856);function d(){let[e,t]=(0,i.useState)("reader");return(0,v.jsxs)("main",{style:{height:"100dvh",background:"#fffaf0",position:"relative"},children:[(0,v.jsxs)(a.Hl,{shadows:!0,dpr:[1,1.5],camera:{position:[.5,1.65,4.9],fov:37},onCreated:({gl:e})=>{e.toneMapping=n.FV,e.toneMappingExposure=1.05},children:[(0,v.jsx)("ambientLight",{intensity:1.15}),(0,v.jsx)("hemisphereLight",{args:["#fff8ed","#c7b295",1.1]}),(0,v.jsx)("directionalLight",{position:[-3,5,6],intensity:2.2,color:"#fff1db"}),(0,v.jsx)("directionalLight",{position:[3,3,-3],intensity:1.1,color:"#e9f1ff"}),(0,v.jsx)(m.A,{kind:e}),(0,v.jsx)(l,{position:[0,-.006,0],opacity:.22,scale:6,blur:2.5,far:3,resolution:256,frames:1},e),(0,v.jsx)(c.N,{target:[0,1.24,0],enablePan:!1,minDistance:3,maxDistance:7,minPolarAngle:.5,maxPolarAngle:1.8})]}),(0,v.jsxs)("div",{style:{position:"absolute",top:24,left:28,color:"#665846",fontSize:13},children:["구름섬의 작은 탐험가들 ",(0,v.jsx)("span",{style:{opacity:.6},children:"\xb7 드래그해서 회전"})]}),(0,v.jsx)("nav",{style:{position:"absolute",bottom:24,left:0,right:0,display:"flex",justifyContent:"center",gap:8},children:[["reader","책 친구"],["starlight","별빛 친구"],["adventurer","탐험 친구"]].map(([r,i])=>(0,v.jsx)("button",{"aria-pressed":e===r,onClick:()=>t(r),style:{padding:"12px 22px",borderRadius:24,border:"1px solid #d8cfbb",background:e===r?"#637d68":"#fffaf0",color:e===r?"white":"#635a47"},children:i},r))})]})}}},e=>{e.O(0,[8975,5816,80,7667,856,5004,9710,7358],()=>e(e.s=1187)),_N_E=e.O()}]);