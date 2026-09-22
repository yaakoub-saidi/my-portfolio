const glow=document.querySelector('.cursor-glow');
window.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll('section[id]')];
const links=[...document.querySelectorAll('.nav nav a')];
window.addEventListener('scroll',()=>{
  const y=window.scrollY+180;
  let current='home';
  sections.forEach(s=>{if(y>=s.offsetTop)current=s.id});
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
});

const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{
  const open=nav.style.display==='flex';
  nav.style.display=open?'none':'flex';
  if(!open){
    nav.style.position='absolute';nav.style.top='70px';nav.style.left='0';nav.style.right='0';
    nav.style.padding='20px';nav.style.flexDirection='column';nav.style.background='rgba(8,10,15,.96)';
    nav.style.border='1px solid rgba(255,255,255,.09)';nav.style.borderRadius='16px';
  }
});
