import{e as r,_ as o}from"./index-c819456c.js";class t{constructor(){this.distance=200,this.duration=.4,this.factor=100,this.speed=1,this.maxSpeed=50,this.easing="ease-out-quad"}load(e){e&&(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.speed!==void 0&&(this.speed=e.speed),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed))}}class u extends t{constructor(){super(),this.selectors=[]}load(e){super.load(e),e&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class c extends t{load(e){super.load(e),e&&(this.divs=r(e.divs,n=>{const i=new u;return i.load(n),i}))}}async function l(s,e=!0){await s.addInteractor("externalRepulse",async n=>{const{Repulser:i}=await o(()=>import("./Repulser-460f2ec5.js"),["assets/Repulser-460f2ec5.js","assets/ExternalInteractorBase-029fb1b6.js","assets/Ranges-59a08456.js","assets/index-c819456c.js","assets/index-9d3dcc29.css"]);return new i(s,n)},e)}export{c as Repulse,t as RepulseBase,u as RepulseDiv,l as loadExternalRepulseInteraction};
