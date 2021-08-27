import{l as e,f as t,g as o,j as i,e as s,w as a,T as n,o as r,m as c,n as l,i as d}from"./vendor.117acdc6.js";const u=null!==document.ontouchstart?"click":"touchstart",h="__vue_click_away__",p=function(e,t,o){y(e);let i=o.context,s=t.value,a=!1;setTimeout((function(){a=!0}),0),e[h]=function(t){if((!e||!e.contains(t.target))&&s&&a&&"function"==typeof s)return s.call(i,t)},document.addEventListener(u,e[h],!1)},y=function(e){document.removeEventListener(u,e[h],!1),delete e[h]},v={name:"Dropdown",directives:{clickAway:{mounted:p,updated:function(e,t,o){t.value!==t.oldValue&&p(e,t,o)},unmounted:y}},props:{origin:{type:String,default:"left",validator:e=>["left","right"].includes(e)},bodyClass:{type:[String,Array,Object]},hideOnClick:{type:Boolean},trigger:{type:String,default:"click",validator:e=>["click","hover"].includes(e)}},emits:["show","hide"],data:()=>({open:!1}),watch:{open(e){this.$emit("show",e),this.$emit("hide",!e)}},computed:{dropdownOrigin(){return[`origin-top-${this.origin}`,`${this.origin}-0`]},extraBodyClass(){const e=[...this.dropdownOrigin];return this.bodyClass&&(["string","object"].includes(typeof this.bodyClass)?e.push(this.bodyClass):Array.isArray(this.bodyClass)&&e.push(...this.bodyClass)),e}},methods:{click(){"click"==this.trigger&&(this.open=!this.open)},hover(){"hover"==this.trigger&&(this.open=!0)},leave(){"hover"==this.trigger&&(this.open=!1)},bodyClick(){this.hideOnClick&&(this.open=!1)}}};v.render=function(u,h,p,y,v,g){const f=e("click-away");return r(),t("div",{class:"relative inline-block",onMouseleave:h[3]||(h[3]=(...e)=>g.leave&&g.leave(...e))},[o("span",{onClick:h[0]||(h[0]=e=>g.click()),onMouseover:h[1]||(h[1]=(...e)=>g.hover&&g.hover(...e))},[i(u.$slots,"default")],32),s(n,{"enter-from-class":"opacity-0 scale-75","enter-active-class":"transition duration-75 ease-out-quad","enter-to-class":"opacity-100 scale-100","leave-from-class":"opacity-100 scale-100","leave-active-class":"transition duration-150 ease-in-quad","leave-to-class":"opacity-0 scale-75"},{default:a((()=>[v.open?c((r(),t("div",{key:0,onClick:h[2]||(h[2]=(...e)=>g.bodyClick&&g.bodyClick(...e)),class:l(["transform w-52 py-2 absolute z-10 bg-white border border-gray-200 rounded-md",g.extraBodyClass])},[i(u.$slots,"body")],2)),[[f,()=>v.open=!1]]):d("",!0)])),_:3})],32)};export{v as _};