const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const nav=document.querySelector('.nav');addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>40));
if(new URLSearchParams(location.search).has('static')){document.documentElement.classList.add('static');document.querySelector('.float').style.display='none';document.querySelector('.hero').style.height=(innerWidth<600?'780px':'900px')}if(new URLSearchParams(location.search).has('static'))document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'));
