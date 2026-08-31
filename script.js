const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('nav');
if(btn){btn.addEventListener('click',()=>{const open=nav.style.display==='flex';nav.style.display=open?'none':'flex';nav.style.position='absolute';nav.style.top='76px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px';nav.style.background='#fff';nav.style.flexDirection='column';nav.style.borderBottom='1px solid #e5eee9';});}
document.querySelectorAll('.copy-btn').forEach(button=>button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(button.dataset.copy);const old=button.textContent;button.textContent='Copied ✓';setTimeout(()=>button.textContent=old,1600);}catch(e){button.textContent='Copy manually';}}));
