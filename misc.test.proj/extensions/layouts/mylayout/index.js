import{openBlock as o,createElementBlock as l,createElementVNode as n,toDisplayString as t,ref as e}from"vue";var u={inheritAttrs:!1,props:["collection","name"]};u.render=function(e,u,i,c,r,a){return o(),l("div",null,[n("p",null,"Name2: "+t(i.name),1),n("p",null,"Collection2: "+t(i.collection),1),n("p",null,"Collection2 typeof: "+t(typeof i.collection),1)])},u.__file="src/layout.vue";var i={id:"custom",name:"Custom",icon:"box",component:u,slots:{options:()=>null,sidebar:()=>null,actions:()=>null},setup:()=>({name:e("Custom Layout")})};export{i as default};
