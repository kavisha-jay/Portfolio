import{_ as s}from"./index-511f979b.js";class o{constructor(){this.opacity=.5}load(n){n&&n.opacity!==void 0&&(this.opacity=n.opacity)}}class c{constructor(){this.distance=80,this.links=new o,this.radius=60}load(n){n&&(n.distance!==void 0&&(this.distance=n.distance),this.links.load(n.links),n.radius!==void 0&&(this.radius=n.radius))}}async function a(i,n=!0){await i.addInteractor("externalConnect",async t=>{const{Connector:e}=await s(()=>import("./Connector-9047eafa.js"),["assets/Connector-9047eafa.js","assets/CanvasUtils-2e2b6e57.js","assets/index-511f979b.js","assets/index-9505c0e9.css","assets/ExternalInteractorBase-029fb1b6.js"]);return new e(t)},n)}export{c as Connect,o as ConnectLinks,a as loadExternalConnectInteraction};
