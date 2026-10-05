(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3809,9093],{1414:(e,t,a)=>{"use strict";a.d(t,{GD:()=>i,fI:()=>s,m5:()=>o,mV:()=>r,u4:()=>n});let o="cloud-islands-explorer-v1",s=[{id:"yoplait",rank:"새싹 탐험가",scale:.78,size:"작은 책섬",stops:[{name:"이야기 도서관",story:"책 한 권마다 다른 세상이 숨어 있어요. 오늘은 작은 씨앗이 나무가 되는 이야기를 골랐어요.",position:[0,4,0]},{name:"벚꽃 쉼터",story:"벚꽃이 지고 나면 초록 잎이 자라요. 꽃과 잎은 계절이 바뀌었다는 작은 신호예요.",position:[-2.7,2.5,1]}]},{id:"banana",rank:"바람 여행자",scale:1,size:"풍차와 수확 들판",stops:[{name:"바람 풍차",story:"바람이 날개를 밀면 축이 돌아가요. 옛 풍차는 이 힘으로 곡식을 가루로 빻았어요.",position:[0,5,0]},{name:"햇살 텃밭",story:"익은 호박 아래에는 넓은 잎이 있어요. 잎은 햇빛으로 식물이 자랄 양분을 만들어요.",position:[-2,1.4,2]},{name:"황금 수확섬",story:"밀 이삭의 작은 알갱이가 빵의 재료가 돼요. 풍차와 밭은 서로를 돕는 이웃이에요.",position:[5.8,0,.4],kind:"field"}]},{id:"bravo",rank:"별길 길잡이",scale:1.12,size:"높은 탑과 별 관측 데크",stops:[{name:"별빛 관측탑",story:"망원경은 멀리서 오는 빛을 모아요. 달의 표면도 맨눈으로 볼 때보다 자세히 관찰할 수 있어요.",position:[0,6,0]},{name:"여행자의 망원경",story:"관측할 때는 주변 조명이 어두울수록 좋아요. 눈이 어둠에 적응할 때까지 잠시 기다려 보세요.",position:[2,1.6,2]},{name:"달빛 관측 데크",story:"같은 별도 계절과 시간에 따라 보이는 위치가 달라져요. 오늘의 별 위치를 기록해 두면 다음 관측이 더 재미있어요.",position:[-5.8,.7,0],kind:"stars"}]},{id:"together",rank:"마을 탐험가",scale:1.22,size:"광장과 장터가 있는 마을",stops:[{name:"토끼 분수 광장",story:"광장은 서로 다른 길에서 온 친구들이 만나는 곳이에요. 분수 옆에서 오늘의 여행 이야기를 나눠 보세요.",position:[0,1.4,2]},{name:"작은 꽃가게",story:"꽃을 선물할 때는 친구가 좋아하는 색을 물어봐요. 상대를 알아가는 것도 작은 탐험이에요.",position:[2,3,0]},{name:"무지개 장터",story:"농부가 키운 열매와 이웃이 만든 물건이 모였어요. 물건 뒤에는 누군가의 시간과 정성이 담겨 있어요.",position:[5.7,0,0],kind:"market"},{name:"이웃 쉼터",story:"함께 앉을 자리를 비워 두었어요. 처음 온 친구에게 먼저 인사하면 새로운 이야기가 시작돼요.",position:[-5.5,0,1],kind:"rest"}]},{id:"melona",rank:"생태 탐험가",scale:1.38,size:"온실\xb7연못\xb7꽃밭의 생태 군도",stops:[{name:"유리 온실",story:"온실은 햇빛을 받아 내부를 따뜻하게 해 줘요. 추위에 약한 식물도 이곳에서는 자랄 수 있어요.",position:[0,3.5,0]},{name:"나비 꽃밭",story:"나비가 꽃 사이를 오가면서 꽃가루를 옮겨요. 작은 날갯짓이 식물의 다음 세대를 도와줘요.",position:[-2,1.4,2]},{name:"수련 연못",story:"물 위에 뜬 수련 잎 아래에는 작은 생물들의 쉼터가 있어요. 물가에서는 조용히 관찰해 주세요.",position:[5.7,-.2,1],kind:"pond"},{name:"꿀벌 정원",story:"꿀벌은 꽃에서 꿀과 꽃가루를 모아요. 꽃이 다양한 정원은 꿀벌에게 풍성한 식탁이 돼요.",position:[-5.7,.3,.5],kind:"hive"},{name:"씨앗 보관섬",story:"다양한 씨앗을 지키면 미래의 숲도 지킬 수 있어요. 작은 씨앗 하나에 다음 계절의 풍경이 담겨 있어요.",position:[0,.1,-5.8],kind:"seeds"}]}];function r(e){return Array.isArray(e)?s.filter(t=>e.includes(t.id)).map(e=>e.id):[]}function n(e,t){return s.findIndex(t=>t.id===e)>=0}function i(e,t,a){let o=s.find(t=>t.id===e);return o?o.stops.filter(o=>a.includes(e)||(t[e]||[]).includes(o.name)).map(e=>e.name):[]}},2733:(e,t,a)=>{"use strict";function o(e){return e.startsWith("/")&&!e.startsWith("//")?"/binggrae-world-site"+e:e}a.d(t,{l:()=>o})},6867:(e,t,a)=>{"use strict";a.d(t,{w:()=>l});var o=a(2115),s=a(9625),r=a(5269),n=a(5692);function i(e,t,a){t.traverse(t=>{t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(t=>{e.properties.remove(t),null==t.dispose||t.dispose(),t.needsUpdate=!0})}),e.info.programs.length=0,e.compile(t,a)}function l({focus:e=0,samples:t=10,size:a=25}){let p=(0,n.D)(e=>e.gl),d=(0,n.D)(e=>e.scene),c=(0,n.D)(e=>e.camera);return o.useEffect(()=>{let o=s.ShaderChunk.shadowmap_pars_fragment,n=!o.includes("sampler2DShadow"),l=o.lastIndexOf("float getShadow( sampler2D shadowMap"),u=o.indexOf("if ( frustumTest ) {",l)+20;if(l<0||u<20)return void console.warn("[SoftShadows] Could not find injection point in shadow shader");let f=p.shadowMap.type;n||(p.shadowMap.type=r.bTm);let v=o.slice(l,u).includes("shadowIntensity"),m=(o.slice(0,u)+"\n"+(v?"return mix( 1.0, PCSS( shadowMap, shadowCoord ), shadowIntensity );":"return PCSS( shadowMap, shadowCoord );")+o.slice(u)).replace("#ifdef USE_SHADOWMAP","#ifdef USE_SHADOWMAP\n"+(({focus:e=0,size:t=25,samples:a=10},o)=>{let s=o?"unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) )":"texture2D( shadowMap, uv + offset ).r";return`
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
  for(int i = 0; i < ${a}; i ++) {
    offset = (pcssVogelDiskSample(j, ${a}, angle) * texelSize) * 2.0 * PENUMBRA_FILTER_SIZE;
    depth = ${s};
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
  for (int i = 0; i < ${a}; i++) {
    vogelSample = pcssVogelDiskSample(j, ${a}, angle) * texelSize;
    offset = vogelSample * (1.0 + filterRadius * float(${t}));
    shadow += step( zReceiver, ${s} );
    j++;
  }
  #pragma unroll_loop_end
  return shadow * 1.0 / ${a}.0;
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
}`})({size:a,samples:t,focus:e},n));return s.ShaderChunk.shadowmap_pars_fragment=m,i(p,d,c),()=>{s.ShaderChunk.shadowmap_pars_fragment=o,p.shadowMap.type=f,i(p,d,c)}},[e,a,t]),null}},6870:(e,t,a)=>{Promise.resolve().then(a.bind(a,7957))}},e=>{e.O(0,[1831,6603,9367,955,5442,1848,7957,8441,3794,7358],()=>e(e.s=6870)),_N_E=e.O()}]);