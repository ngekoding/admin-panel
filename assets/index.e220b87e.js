import{r as e,c as n,o,a as t,b as r,d as s}from"./vendor.14c8fa3c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&n(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){if(e.ep)return;e.ep=!0;const n=function(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?n.credentials="include":"anonymous"===e.crossorigin?n.credentials="omit":n.credentials="same-origin",n}(e);fetch(e.href,n)}}();const i={name:"App"};i.render=function(t,r,s,i,c,a){const d=e("router-view");return o(),n(d)};const c={},a=function(e,n){return n&&0!==n.length?Promise.all(n.map((e=>{if((e=`/admin-panel/${e}`)in c)return;c[e]=!0;const n=e.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const t=document.createElement("link");return t.rel=n?"stylesheet":"modulepreload",n||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),n?new Promise(((e,n)=>{t.addEventListener("load",e),t.addEventListener("error",n)})):void 0}))).then((()=>e())):e()},d=[{path:"/",component:()=>a((()=>import("./DefaultLayout.15a8fa04.js")),["assets/DefaultLayout.15a8fa04.js","assets/DefaultLayout.2cd2639f.css","assets/vendor.14c8fa3c.js","assets/HomeIcon.7e085edd.js","assets/UserGroupIcon.d1785960.js","assets/_commonjsHelpers.0592d25c.js","assets/Dropdown.9636731c.js"]),children:[{path:"home",alias:"",name:"home",component:()=>a((()=>import("./Home.2db53bdb.js")),["assets/Home.2db53bdb.js","assets/vendor.14c8fa3c.js","assets/UserGroupIcon.d1785960.js"])},{path:"dev/getting-started",name:"dev-getting-started",component:()=>a((()=>import("./GettingStarted.587cd647.js")),["assets/GettingStarted.587cd647.js","assets/vendor.14c8fa3c.js"])},{path:"dev/components/icon",name:"dev-components-icon",component:()=>a((()=>import("./IconExample.7e690e8f.js")),["assets/IconExample.7e690e8f.js","assets/CodePreviewEditor.1ad9a42f.js","assets/CodePreviewEditor.bd148405.css","assets/vendor.14c8fa3c.js","assets/_commonjsHelpers.0592d25c.js","assets/HomeIcon.7e085edd.js"])},{path:"dev/components/dropdown",name:"dev-components-dropdown",component:()=>a((()=>import("./DropdownExample.2f82a5d2.js")),["assets/DropdownExample.2f82a5d2.js","assets/CodePreviewEditor.1ad9a42f.js","assets/CodePreviewEditor.bd148405.css","assets/vendor.14c8fa3c.js","assets/_commonjsHelpers.0592d25c.js","assets/Dropdown.9636731c.js"])},{path:"dev/components/form",name:"dev-components-forms",component:()=>a((()=>import("./Index.ba3fff52.js")),["assets/Index.ba3fff52.js","assets/vendor.14c8fa3c.js"])},{path:"dev/components/table",name:"dev-components-tables",component:()=>a((()=>import("./Index.7933f56e.js")),["assets/Index.7933f56e.js","assets/vendor.14c8fa3c.js"])}]}],m=t({history:r(),routes:d}),p=s(i);p.use(m),p.mount("#app");