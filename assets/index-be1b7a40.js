import{_ as i}from"./index-16178f43.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-2d92dc51.js"),["assets/LifeUpdater-2d92dc51.js","assets/ValueWithRandom-0a7b1757.js","assets/index-16178f43.js","assets/index-f1cf1fa1.css"]);return new r(e)},a)}export{d as loadLifeUpdater};