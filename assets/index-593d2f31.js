import{s as o,_ as r}from"./index-33641b13.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function u(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await r(()=>import("./Remover-e21f454f.js"),["assets/Remover-e21f454f.js","assets/ExternalInteractorBase-029fb1b6.js","assets/index-33641b13.js","assets/index-2569c8f2.css"]);return new a(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};