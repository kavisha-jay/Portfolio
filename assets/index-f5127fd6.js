import{_ as i}from"./index-33641b13.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-c177c748.js"),["assets/LifeUpdater-c177c748.js","assets/ValueWithRandom-f52e8597.js","assets/index-33641b13.js","assets/index-2569c8f2.css"]);return new r(e)},a)}export{d as loadLifeUpdater};