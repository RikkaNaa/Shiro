import{j as t}from"./index-DUeXtjwj.js";import{W as i,M as m,G as a}from"./Gallery-BG1qH1n8.js";import"./image-Czd3zTRt.js";import"./helper-CaAdfMs7.js";import"./lodash-B3VVwmZe.js";import"./request-SdxsCIWq.js";import"./toast-BshgYNPU.js";import"./StyledButton-Croa2h9-.js";import"./motion-minimal-7y_YfCp1.js";import"./env-DbhK1WeT.js";import"./viewport-DFRFjvvk.js";import"./use-is-unmounted-ByZTX5ML.js";const n=()=>Math.floor(Math.random()*255).toString(16).padStart(2,"0"),o=Array.from({length:10}).map((r,e)=>({src:`https://loremflickr.com/640/480/city?${e}`,height:480,width:640,type:"image",accent:`#${n()}`})),p=()=>t.jsx("div",{className:"inline-block overflow-hidden border border-accent",style:{width:"600px"},children:t.jsx(i,{children:t.jsx(m,{images:o,children:t.jsx(a,{images:o.map(r=>({...r,url:r.src,name:r.src,footnote:r.src}))})})})});p.meta={title:"Gallery",description:"Gallery component"};export{p as Demo1};