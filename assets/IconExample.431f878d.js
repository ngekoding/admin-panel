import{_ as o}from"./TwCodePreviewEditor.5163df20.js";import{z as e,f as s,e as n,A as t,o as a}from"./vendor.a8ae3ece.js";import{a as c,b as i,r}from"./LightBulbIcon.6f87628b.js";import"./DuplicateIcon.ac259e36.js";const l={name:"IconExample",data:()=>({components:{"home-icon-o":e(c),"light-bulb-icon-o":e(i),"chart-pie-icon-s":e(r)},codeBasicUsage:'<div class="flex space-x-5">\n  <home-icon-o class="w-12 h-12 text-purple-500" />\n  <chart-pie-icon-s class="w-12 h-12 text-green-500" />\n  <light-bulb-icon-o class="w-12 h-12 text-yellow-500" />\n</div>'})},p={class:"page-example"},m=t('<h1>Icon</h1><p>Admin Panel use <a href="https://heroicons.com" target="_blank">Heroicons</a> as mentioned on <a href="https://tailwindcss.com/resources" target="_blank">Tailwind CSS - Resources</a>. And for simplicity used, I combining with <a href="https://github.com/antfu/vite-plugin-components" target="_blank">vite-plugin-components</a> to make it imported on-demand.</p><p>Use the suffix to choose outline or solid icon. The pattern is <code>{name}-icon-s</code> for solid and <code>{name}-icon-o</code> for outline.</p><h2 class="mt-8">Basic usage</h2><p>Just use the icon name from Heroicons.</p>',5);l.render=function(e,t,c,i,r,l){const d=o;return a(),s("div",p,[m,n(d,{source:r.codeBasicUsage,components:r.components},null,8,["source","components"])])};export{l as default};