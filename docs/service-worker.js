if(!self.define){let i,e={};const n=(n,c)=>(n=new URL(n+".js",c).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(c,o)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(e[s])return;let r={};const f=i=>n(i,s),d={module:{uri:s},exports:r,require:f};e[s]=Promise.all(c.map((i=>d[i]||f(i)))).then((i=>(o(...i),r)))}}define(["./workbox-2d118ab0"],(function(i){"use strict";i.setCacheNameDetails({prefix:"dontasktoask"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/404.html",revision:"c0d20cffa5cc343962f99340ffb6c1f2"},{url:"/CNAME",revision:"09d01cff605770b350185c2fac4e5214"},{url:"/DontAskToAsk.png",revision:"52cdda4433d8772f8e67ff6a891546e2"},{url:"/css/chunk-common.160f68df.css",revision:null},{url:"/favicon.ico",revision:"a91b7580ce6e81e80ef960542d8d63d2"},{url:"/fonts/Vazirmatn[wght].754cc14c.woff2",revision:null},{url:"/img/icomoon.30fcff90.svg",revision:null},{url:"/img/icons/android-chrome-192x192.png",revision:"cc3f5e820dfe91cff25f2926d32dac4b"},{url:"/img/icons/android-chrome-512x512.png",revision:"89e4234218c0357ed859a8092d72d95a"},{url:"/img/icons/android-chrome-maskable-192x192.png",revision:"cc3f5e820dfe91cff25f2926d32dac4b"},{url:"/img/icons/android-chrome-maskable-512x512.png",revision:"89e4234218c0357ed859a8092d72d95a"},{url:"/img/icons/apple-touch-icon-120x120.png",revision:"7c8299da2e15ab525c985f99c2b0697c"},{url:"/img/icons/apple-touch-icon-152x152.png",revision:"dd0b727176f270d66d340fc230f73e18"},{url:"/img/icons/apple-touch-icon-180x180.png",revision:"72efefa04ee3c5b1f5ea88b761efb841"},{url:"/img/icons/apple-touch-icon-60x60.png",revision:"22168c8a6a9fbb7cb3b2f9c21f3acd76"},{url:"/img/icons/apple-touch-icon-76x76.png",revision:"7922ef41cb229a3c204ff36e2dfb6ffd"},{url:"/img/icons/apple-touch-icon.png",revision:"72efefa04ee3c5b1f5ea88b761efb841"},{url:"/img/icons/favicon-16x16.png",revision:"4c630c466170f9e41c0684413953a58f"},{url:"/img/icons/favicon-32x32.png",revision:"3048b1a7c06bd869c1638119e41f2a82"},{url:"/img/icons/favicon.ico",revision:"a91b7580ce6e81e80ef960542d8d63d2"},{url:"/img/icons/msapplication-icon-144x144.png",revision:"c2373573daf3d90e9097e84f7e910c64"},{url:"/img/icons/mstile-150x150.png",revision:"a1e98d99df0dd567a8ba7b9d48d330b9"},{url:"/img/icons/safari-pinned-tab.svg",revision:"cf8130e99aaad5e7b18dd52cac539431"},{url:"/index.html",revision:"63b4d56f634ae76ff2223307c53d9ef1"},{url:"/js/404.2187a824.js",revision:null},{url:"/js/chunk-common.3d051dc3.js",revision:null},{url:"/js/chunk-vendors.18b31d69.js",revision:null},{url:"/js/index.9bf70a01.js",revision:null},{url:"/manifest.json",revision:"719366942c11270e6541e9b229604ad7"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
