import{_ as o}from"./index-33641b13.js";class i{constructor(){this.distance=200}load(n){n&&n.distance!==void 0&&(this.distance=n.distance)}}async function a(t,n=!0){await t.addInteractor("externalBounce",async e=>{const{Bouncer:r}=await o(()=>import("./Bouncer-3c0dc2cd.js"),["assets/Bouncer-3c0dc2cd.js","assets/index-33641b13.js","assets/index-2569c8f2.css","assets/Ranges-7f16ac8c.js","assets/ExternalInteractorBase-029fb1b6.js"]);return new r(e)},n)}export{i as Bounce,a as loadExternalBounceInteraction};