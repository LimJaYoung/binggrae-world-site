"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4103],{1735:(e,a,o)=>{o.d(a,{CV:()=>f,E4:()=>r,Qf:()=>s,Tt:()=>l,mb:()=>i,wm:()=>n});var t=o(4930);let r=[{id:"yoplait",name:"구름 도서관",x:0,z:10.3,rx:4.4,rz:3.8},{id:"banana",name:"햇살 언덕",x:11.3,z:8,rx:4.8,rz:4.1},{id:"bravo",name:"별빛 관측탑",x:-11.3,z:8,rx:4.8,rz:4.1},{id:"together",name:"친구 마을",x:-8.15,z:-4.9,rx:8.05,rz:6.75},{id:"melona",name:"초록 정원",x:8.15,z:-4.9,rx:8.05,rz:6.75}];function l(e){return"together"===e||"melona"===e?.9:1}let n=[["bravo","together"],["together","melona"],["melona","banana"],["banana","yoplait"],["yoplait","bravo"]];function i(e){return 1+.07*Math.sin(5*e)+.025*Math.cos(7*e)}function s(e,a,o=.12){let n=r.find(a=>a.id===e),f=r.find(e=>e.id===a),g={"together-bravo":Math.PI/2-.22,"bravo-together":-Math.PI/4,"melona-banana":Math.PI/2+.22,"banana-melona":-(3*Math.PI)/4}[`${e}-${a}`]??Math.atan2((f.z-n.z)/n.rz,(f.x-n.x)/n.rx);return new t.Pq0(n.x+Math.cos(g)*(n.rx*l(e)*i(g)-o),.24,n.z+Math.sin(g)*(n.rz*l(e)*i(g)-o))}function f(e,a){let{rx:o,rz:l}=r.find(a=>a.id===e),n="together"===e||"melona"===e,s=n?-.4:-.36,f=a?[[0,.22],[.9,.22],[.965,.19],[.995,.06],[1,-.1],[.988,-.27],[.96,s],[0,s]]:[[0,-.19],[.95,-.19],[.972,-.56],[.95,-1.25],[.86,-2.25],[.6,-3.05],[0,-3.32]];n&&!a&&(f=[[0,-.19],[.95,-.19],[.973,-.55],[.955,-.9],[.9,-1.55],[.77,-2.4],[.52,-3.05],[0,-3.32]]),a?(n&&(f=[[0,.22],[.9,.22],[.95,.22],[.98,.13],[1,-.06],[.988,-.26],[.965,s],[0,s]]),f=[[0,.22],...new t.B6O(f.slice(1,-1).map(([e,a])=>new t.Pq0(e,a,0)),!1,"centripetal").getPoints(32).map(e=>[Math.max(.9,Math.min(1,e.x)),Math.max(s,Math.min(.22,e.y))]),[0,s]]):f=[[0,-.19],...new t.B6O(f.slice(1).map(([e,a])=>new t.Pq0(e,a,0)),!1,"centripetal").getPoints(64).map(e=>[Math.max(0,Math.min(.985,e.x)),Math.max(-3.32,Math.min(-.19,e.y))])];let g=[],h=[],m=a?384:160;for(let[t,r]of f)for(let f=0;f<m;f++){let h=f/m*Math.PI*2,c=i(h),d=a?0:Math.pow(Math.sin(t*Math.PI),.8),p=Math.min(1,Math.max(0,(r+3.32)/1.05)),u=p*p*(3-2*p),M=Math.min(1,Math.max(0,(-r-.3)/.7)),w=M*M*(3-2*M),x=.45*("melona"===e),v=n?.42*Math.sin(2*h+x)+.23*Math.cos(3*h-.4):0,C=Math.tanh(1.35*((Math.sin(h*(n?9:5)+.3+x+v+(n?Math.PI:0))+.18*Math.sin(3*h-.7))/1.18))/Math.tanh(1.35)*(n?.88+.12*Math.sin(3*h+x+.6):1),b=1.15*Math.tanh(Math.max(0,r+3.32)/1.15),_=a?.32*Math.sin(5*h+.8)*d*u:-(n?.4:.24)*C*(b+.65)*Math.pow(Math.sin(t*Math.PI),.8)*w*(n?1:u),R=n&&!a?.012*Math.sin(11*h+.55*r+x)*Math.sin(3*h-.4)*w:0,F=1+((n?.15:.042)*C*w+R)*d,y=Math.min(1,t/(n?.8:.68)),I=r+_+(a?0:(n?1.45:.28)*(1-y*y*(3-2*y))*w),P=n&&!a&&I<-.27?-.27+(I+.27)*1.18:I,k=Math.max(0,Math.min(1,(.22-r)/(.22-s))),S=a?Math.sin(Math.PI*k):0,T=.5+.5*Math.sin(h*(n?83:61)+.7*Math.sin(17*h)),$=1-((n?.006:.01)*(1+Math.sin(13*h+.35*Math.sin(5*h)))+.005*T)*S,z=((n?.045:.06)*Math.sin(11*h+.4)+.025*(T-.5))*S;g.push(Math.cos(h)*o*t*c*F*$,P+z,Math.sin(h)*l*t*c*F*$)}for(let e=0;e<f.length-1;e++)for(let a=0;a<m;a++){let o=e*m+a,t=e*m+(a+1)%m,r=o+m,l=t+m;h.push(o,t,r,t,l,r)}let c=new t.LoY;return c.setAttribute("position",new t.qtW(g,3)),c.setIndex(h),c.computeVertexNormals(),c}},3558:(e,a,o)=>{o.d(a,{D:()=>l,Y:()=>n});var t=o(4930),r=o(2982);function l(e,a){let o=r.fI.find(a=>a.id===e),l=1.71*r.fI.indexOf(o)+.8,i=[],s=[],f=n(e),g=a?[[0,.23],[.45,.23],[.85,.2],[.98,.13],[1,0],[.995,-.16],[0,-.16]]:[[0,-.12],[.995,-.12],[.99,-.4],[.9,-1.1],[.76,-2.1],[.5,-3.2],[.12,-3.8],[0,-3.8]];for(let e=0;e<g.length;e++)for(let o=0;o<128;o++){let t=o/128*Math.PI*2,[r,n]=g[e],s=f(t)*r,h=a?0:.08*Math.sin(11*t+l)*Math.sin(Math.PI*r);i.push(Math.cos(t)*(s+h),n+(a?.014*Math.sin(4*t)*r:.12*Math.sin(3*t+l)*Math.sin(Math.PI*r)),Math.sin(t)*(s+h)*.87)}for(let e=0;e<g.length-1;e++)for(let a=0;a<128;a++){let o=128*e+a,t=128*e+(a+1)%128,r=(e+1)*128+a,l=(e+1)*128+(a+1)%128;s.push(o,t,r,t,l,r)}let h=new t.LoY;return h.setAttribute("position",new t.qtW(i,3)),h.setIndex(s),h.computeVertexNormals(),h}function n(e){let a=r.fI.find(a=>a.id===e),o=1.71*r.fI.indexOf(a)+.8,t=a.stops.filter(e=>"kind"in e);return a=>{let r=4.45+.28*Math.sin(3*a+o)+.2*Math.cos(5*a-o);for(let o of("yoplait"===e&&(r+=1.2*Math.exp(-Math.pow(Math.atan2(Math.sin(a-2.8),Math.cos(a-2.8))/.55,2))),t)){let[e,,t]=o.position,l=Math.atan2(t,e),n=Math.atan2(Math.sin(a-l),Math.cos(a-l)),i="kind"in o?o.kind:"";r+=("pond"===i?3.8:"seeds"===i?3.6:3.1)*Math.exp(-Math.pow(n/("pond"===i?.56:"hive"===i?.38:.45),2))}if(t.length)for(let e of[.78,2.38])r-=.65*Math.exp(-Math.pow(Math.atan2(Math.sin(a-e),Math.cos(a-e))/.28,2));return Math.max(3.85,r)}}},3647:(e,a,o)=>{o.d(a,{g:()=>l});var t=o(5496),r=o(1182);function l(e,a,o){let l=(e-.018)/2,n=[-1,1].map(e=>{let r=new t.j(l,a,o,3,.045);return r.translate(e*(l+.018)/2,0,0),r}),i=new t.j(.12,a-.025,o-.035,2,.01);i.translate(0,-.0125,0),n.push(i);let s=(0,r.pP)(n);return n.forEach(e=>e.dispose()),s}},8384:(e,a,o)=>{o.d(a,{N:()=>r,c:()=>t});let t={grass:"#62aa22",leaf:"#519c28",leafLight:"#8aba35",leafDark:"#347a21",soil:"#f2a14c",stone:"#f0ddbb",cream:"#fff0d0",roof:"#f4713d",roofPost:"#eb4920",roofLight:"#ff8148",cyan:"#0086ad",cyanLight:"#00a3bf",cyanDark:"#086b80",wood:"#c26a1e",rail:"#d47a28",gold:"#e9ac3c",pink:"#ef82a1",pinkLight:"#fbaac2",pinkWhite:"#ffdae4",window:"#ffb82c",navy:"#182b49"},r={grass:t.grass,moss:t.leafLight,leaf:t.leaf,deepLeaf:t.leafDark,rockLight:t.soil,stone:t.stone,plaster:t.cream,edge:"#fff4e8",cream:"#fff5e8",glass:t.window,wood:t.wood,timber:t.rail,bookGold:t.gold}},8553:(e,a,o)=>{o.d(a,{CN:()=>n,Fo:()=>g,KC:()=>s,KW:()=>r,O3:()=>m,P5:()=>f,VZ:()=>h,ZT:()=>c,lX:()=>i,yS:()=>l});var t=o(4930);function r(e){let a=new t.uSd({vertexColors:!0,color:"grass"===e?new t.Q1f(1.9,1.1,1.6):new t.Q1f(.98,.98,.7),metalness:0,roughness:"grass"===e?.82:.78,specularIntensity:"grass"===e?.16:.2});return"grass"===e&&m(a,.16),a}function l(e){return"grass"===e?"grass":["moss","leaf","deepLeaf"].includes(e)?"foliage":void 0}function n(){return new t.uSd({vertexColors:!0,metalness:0,roughness:.46,specularIntensity:.38,clearcoat:.04,clearcoatRoughness:.48,envMapIntensity:.8})}function i(e,a=!1){a&&e instanceof t.uSd&&(e.roughness=.56,e.specularIntensity=.48);let o=e.onBeforeCompile,r=e.customProgramCacheKey();e.onBeforeCompile=(t,r)=>{o.call(e,t,r),t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>",`
  if(vColor.r>vColor.b*1.5)gl_FragColor.rgb*=.92;
  #include <colorspace_fragment>
  if(vColor.r>vColor.b*1.5){
   vec3 warmRoof=gl_FragColor.rgb*vec3(1.05,1.07,1.20);
   float roofPeak=max(warmRoof.r,max(warmRoof.g,warmRoof.b));
   if(roofPeak>.88)warmRoof*=(.88+.12*(1.-exp(-(roofPeak-.88)/.12)))/roofPeak;
   // Orange house tiles need a warmer highlight than the post office's red tiles.
   float orangeTile=smoothstep(.105,.155,vColor.g/max(vColor.r,.001));
   warmRoof*=mix(vec3(${a?"1.03,.96,.84":"1.06,.95,.70"}),vec3(${a?"1.015,.80,.40":"1.32,.90,.76"}),orangeTile);
   ${a?`float roofReflection=dot(totalSpecular,vec3(.2126,.7152,.0722));
   float roofSheen=clamp(roofReflection*3.0+max(0.0,roofReflection-.02)*6.0,0.0,.35);
   warmRoof=mix(warmRoof,vec3(1.0,.91,.76),roofSheen);
   vec3 orangeContrast=vec3(warmRoof.r,.315+(warmRoof.g-.373)*1.5,.050+(warmRoof.b-.141)*1.5);
   warmRoof=mix(warmRoof,max(orangeContrast,vec3(0.0)),orangeTile);
   float shadedTileFace=smoothstep(.15,.65,inverseTransformDirection(normal,viewMatrix).x)*orangeTile;
   warmRoof=mix(warmRoof,vec3(warmRoof.r,warmRoof.g*.88,warmRoof.b+.09),shadedTileFace);
   float tileLight=pow(smoothstep(.975,1.005,warmRoof.r),2.0)*orangeTile;
   warmRoof+=vec3(0.0,.19,.25)*tileLight;
   float redTile=1.0-orangeTile;
   float redTileHighlight=smoothstep(.82,1.0,warmRoof.r)*redTile;
   warmRoof.r=mix(warmRoof.r,.24+.76*warmRoof.r,redTile);
   warmRoof.gb+=vec2(.065,.025)*redTileHighlight;`:""}
   ${a?"":`
   // Keep warm roof highlights while recovering the reference's red shaded tiles.
   float warmTileHighlight=smoothstep(.95,1.0,warmRoof.r);
   warmRoof=vec3(warmRoof.r*.91+.09*warmTileHighlight,
    max(0.0,(warmRoof.g-.16)*1.35)+.09*warmTileHighlight,
    max(.008,(warmRoof.b-.17)*1.30)+.15*warmTileHighlight);`}
   gl_FragColor.rgb=clamp(warmRoof,0.0,1.0);
  }
  else if(vColor.b>vColor.r*1.5){
   vec3 coolRoof=gl_FragColor.rgb*vec3(.16,1.08,1.10);
   float peak=max(coolRoof.r,max(coolRoof.g,coolRoof.b));
   float delta=peak-.70;
   float mapped=.665+delta*(1.9+.7*tanh(delta*12.));
   if(mapped>.92)mapped=.92+.08*(1.-exp(-(mapped-.92)/.08));
   gl_FragColor.rgb=clamp(coolRoof*max(0.,mapped)/max(peak,.001)*vec3(${a?".65,1.04,1.00":"1.0,1.12,1.02"}),0.0,1.0);
   ${a?"":`float cyanShadow=.90+.10*smoothstep(.48,.67,gl_FragColor.g);
   gl_FragColor.rgb*=cyanShadow;
   gl_FragColor.r+=.022*smoothstep(.20,.50,gl_FragColor.g);
   float cyanBody=smoothstep(.35,.50,gl_FragColor.b)*(1.0-smoothstep(.68,.85,gl_FragColor.b));
   gl_FragColor.gb+=vec2(.04,.065)*cyanBody;
   float cyanMidtone=smoothstep(.35,.50,gl_FragColor.g)*(1.0-smoothstep(.80,.95,gl_FragColor.g));
   gl_FragColor.gb*=1.0-.10*cyanMidtone;`}
  }
  `)},e.customProgramCacheKey=()=>r+"-map-roof-pigment-v40-"+a}function s(){return new t.uSd({vertexColors:!0,roughness:.32,metalness:0,specularIntensity:.2,clearcoat:.05,clearcoatRoughness:.3,envMapIntensity:.4,emissive:"#ffcf18",emissiveIntensity:.85})}function f(){return new t.uSd({vertexColors:!0,color:new t.Q1f(1.16,.72,.28),roughness:.38,metalness:0,specularIntensity:.55})}function g(e="warm"){let a=new t.uSd({vertexColors:!0,color:"ivory"===e?new t.Q1f(1.1,.84,.8):new t.Q1f(.92,.7,.68),roughness:.76,metalness:0,specularIntensity:.18,emissive:"ivory"===e?"#fff0dc":"#ffe1ce",emissiveIntensity:.16});return a.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
   // Warm path bounce fills sheltered plaster without bleaching sunlit walls.
   float plasterDirect=dot(reflectedLight.directDiffuse,vec3(.2126,.7152,.0722))/max(.001,dot(diffuseColor.rgb,vec3(.2126,.7152,.0722)));
   float plasterBounce=.35*(1.0-smoothstep(.35,1.0,plasterDirect));
   reflectedLight.indirectDiffuse+=diffuseColor.rgb*vec3(1.0,.94,.83)*plasterBounce;
  `)},a.customProgramCacheKey=()=>`map-plaster-bounce-v2-${e}`,a}function h(){return new t.uSd({vertexColors:!0,color:new t.Q1f(1.2,.94,1.12),metalness:0,roughness:.68,specularIntensity:.24,emissive:"#bba17f",emissiveIntensity:.05})}function m(e,a=.2,o=1,t=1,r=0){let l=e.onBeforeCompile,n=e.customProgramCacheKey();e.onBeforeCompile=(n,i)=>{l.call(e,n,i),n.fragmentShader=n.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
reflectedLight.indirectDiffuse += diffuseColor.rgb * ${a.toFixed(3)};`),(1!==o||1!==t||0!==r)&&(n.fragmentShader=n.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
 gl_FragColor.rgb=pow(max(gl_FragColor.rgb,vec3(0.0)),vec3(${o.toFixed(3)}))*${t.toFixed(3)};
 ${r<0?`vec3 leafReflection=totalSpecular*${t.toFixed(3)};
 vec3 leafDiffuse=max(gl_FragColor.rgb-leafReflection,vec3(0.0));
 float leafPeak=max(leafDiffuse.r,max(leafDiffuse.g,leafDiffuse.b));
 gl_FragColor.rgb=leafDiffuse*(1.0+${r.toFixed(3)}*pow(smoothstep(.16,.58,leafPeak),2.0))+leafReflection;`:`gl_FragColor.rgb*=1.0+${r.toFixed(3)}*pow(smoothstep(.16,.58,max(gl_FragColor.r,max(gl_FragColor.g,gl_FragColor.b))),2.0);`}`)),r<0&&(n.fragmentShader=n.fragmentShader.replace("#include <colorspace_fragment>",`#include <colorspace_fragment>
   float leafMiddle=smoothstep(.35,.55,gl_FragColor.g)*(1.0-smoothstep(.66,.78,gl_FragColor.g));
   gl_FragColor.rgb*=vec3(1.0-.08*leafMiddle,1.0-.045*leafMiddle,1.0-.18*leafMiddle);
   gl_FragColor.b*=mix(.82,1.0,smoothstep(.43,.73,gl_FragColor.g));
   float leafBright=smoothstep(.65,.95,gl_FragColor.g);
   gl_FragColor.rgb=min(vec3(1.0),gl_FragColor.rgb+vec3(.08,.045,.16)*leafBright);
   // Keep the crown's green pigment visible in both lit and shaded leaves.
   float leafValue=max(gl_FragColor.r,max(gl_FragColor.g,gl_FragColor.b));
   float leafRange=clamp(.66+(leafValue-.66)*1.05,0.0,1.0);
   gl_FragColor.rgb=clamp(gl_FragColor.rgb*leafRange/max(leafValue,.001)*vec3(1.0,1.0,1.0),0.0,1.0);
  `))},e.customProgramCacheKey=()=>n+"-foliage-bounce-v23-"+a+"-"+o+"-"+t+"-"+r}function c(){return new t._4j({vertexColors:!0,color:new t.Q1f(1.16,1.04,1.32),roughness:.76,metalness:0,emissive:"#ffae63",emissiveIntensity:.14})}}}]);