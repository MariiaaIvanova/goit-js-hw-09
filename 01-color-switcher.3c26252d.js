const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let o=null;e.addEventListener("click",(()=>{e.disabled=!0,d.disabled=!1,o=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.style.backgroundColor=e}),1e3)})),d.addEventListener("click",(()=>{d.disabled=!0,e.disabled=!1,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.3c26252d.js.map
