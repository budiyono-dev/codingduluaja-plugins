(()=>{const e=document.querySelectorAll('[data-cda-target="bm"]');if(e){const t=document.querySelectorAll('[data-cda="bm"]');e.forEach((e=>{const n=e.previousElementSibling;t&&t.length>0&&n&&(n.style.display="block"),t.forEach((t=>{const n=document.createElement("li"),c=document.createElement("a");c.textContent=t.innerText,c.setAttribute("href",`#${t.id}`),n.append(c),e.appendChild(n)}))}))}})();