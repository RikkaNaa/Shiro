function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-COZJQ4Ip.js","./index-DUeXtjwj.js","./index-BPfVUjVR.css","./viewport-DFRFjvvk.js","./request-SdxsCIWq.js","./toast-BshgYNPU.js","./helper-CaAdfMs7.js","./StyledButton-Croa2h9-.js","./motion-minimal-7y_YfCp1.js","./env-DbhK1WeT.js","./index-CVtgijuZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a,j as e}from"./index-DUeXtjwj.js";import{I as r}from"./Gallery-BG1qH1n8.js";import"./image-Czd3zTRt.js";import"./helper-CaAdfMs7.js";import"./lodash-B3VVwmZe.js";import"./request-SdxsCIWq.js";import"./toast-BshgYNPU.js";import"./StyledButton-Croa2h9-.js";import"./motion-minimal-7y_YfCp1.js";import"./env-DbhK1WeT.js";import"./viewport-DFRFjvvk.js";import"./use-is-unmounted-ByZTX5ML.js";const o={AvatarImg:t=>e.jsx(r,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(r,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function v({id:t}){const{Tweet:m}=await a(()=>import("./index.client-COZJQ4Ip.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(m,{id:t,components:o})})}export{v as default};
