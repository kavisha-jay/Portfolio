import{_ as n}from"./index-16178f43.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-1954b178.js"),["assets/PolygonDrawer-1954b178.js","assets/PolygonDrawerBase-364378c0.js","assets/index-16178f43.js","assets/index-f1cf1fa1.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-8cb6cf52.js"),["assets/TriangleDrawer-8cb6cf52.js","assets/PolygonDrawerBase-364378c0.js","assets/index-16178f43.js","assets/index-f1cf1fa1.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
