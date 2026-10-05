(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7029],{3279:(e,t,r)=>{"use strict";var s=r(1463);r(3333);var n=r(2115),o=n&&"object"==typeof n&&"default"in n?n:{default:n},i=void 0!==s&&s.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,r=t.name,s=void 0===r?"stylesheet":r,n=t.optimizeForSpeed,o=void 0===n?i:n;u(a(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",u("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t,r=e.prototype;return r.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(u(a(e),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed||"u"<typeof window){var r="u">typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(s){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];u(s,"old rule at index `"+e+"` not found"),s.textContent=t}return e},r.deleteRule=function(e){if("u"<typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},r.cssRules=function(){var e=this;return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},r.makeStyleTag=function(e,t,r){t&&u(a(t),"makeStyleTag accepts only strings as second parameter");var s=document.createElement("style");this._nonce&&s.setAttribute("nonce",this._nonce),s.type="text/css",s.setAttribute("data-"+e,""),t&&s.appendChild(document.createTextNode(t));var n=document.head||document.getElementsByTagName("head")[0];return r?n.insertBefore(s,r):n.appendChild(s),s},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}(e.prototype,t),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var c=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},h={};function d(e,t){if(!t)return"jsx-"+e;var r=String(t),s=e+r;return h[s]||(h[s]="jsx-"+c(e+"-"+r)),h[s]}function f(e,t){"u"<typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var r=e+t;return h[r]||(h[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[r]}var p=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,s=void 0===r?null:r,n=t.optimizeForSpeed,o=void 0!==n&&n;this._sheet=s||new l({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),s&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),s=r.styleId,n=r.rules;if(s in this._instancesCounts){this._instancesCounts[s]+=1;return}var o=n.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[s]=o,this._instancesCounts[s]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var s=this._fromServer&&this._fromServer[r];s?(s.parentNode.removeChild(s),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],s=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:s}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,s=e.id;if(r){var n=d(s,r);return{styleId:n,rules:Array.isArray(t)?t.map(function(e){return f(n,e)}):[f(n,t)]}}return{styleId:d(s),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),v=n.createContext(null);v.displayName="StyleSheetContext";var _=o.default.useInsertionEffect||o.default.useLayoutEffect,m="u">typeof window?new p:void 0;function S(e){var t=m||n.useContext(v);return t&&("u"<typeof window?t.add(e):_(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}S.dynamic=function(e){return e.map(function(e){return d(e[0],e[1])}).join(" ")},t.style=S},3333:()=>{},6867:(e,t,r)=>{"use strict";r.d(t,{w:()=>l});var s=r(2115),n=r(9625),o=r(5269),i=r(5692);function a(e,t,r){t.traverse(t=>{t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(t=>{e.properties.remove(t),null==t.dispose||t.dispose(),t.needsUpdate=!0})}),e.info.programs.length=0,e.compile(t,r)}function l({focus:e=0,samples:t=10,size:r=25}){let u=(0,i.D)(e=>e.gl),c=(0,i.D)(e=>e.scene),h=(0,i.D)(e=>e.camera);return s.useEffect(()=>{let s=n.ShaderChunk.shadowmap_pars_fragment,i=!s.includes("sampler2DShadow"),l=s.lastIndexOf("float getShadow( sampler2D shadowMap"),d=s.indexOf("if ( frustumTest ) {",l)+20;if(l<0||d<20)return void console.warn("[SoftShadows] Could not find injection point in shadow shader");let f=u.shadowMap.type;i||(u.shadowMap.type=o.bTm);let p=s.slice(l,d).includes("shadowIntensity"),v=(s.slice(0,d)+"\n"+(p?"return mix( 1.0, PCSS( shadowMap, shadowCoord ), shadowIntensity );":"return PCSS( shadowMap, shadowCoord );")+s.slice(d)).replace("#ifdef USE_SHADOWMAP","#ifdef USE_SHADOWMAP\n"+(({focus:e=0,size:t=25,samples:r=10},s)=>{let n=s?"unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) )":"texture2D( shadowMap, uv + offset ).r";return`
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
    depth = ${n};
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
    shadow += step( zReceiver, ${n} );
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
}`})({size:r,samples:t,focus:e},i));return n.ShaderChunk.shadowmap_pars_fragment=v,a(u,c,h),()=>{n.ShaderChunk.shadowmap_pars_fragment=s,u.shadowMap.type=f,a(u,c,h)}},[e,r,t]),null}},9092:(e,t,r)=>{"use strict";e.exports=r(3279).style}}]);