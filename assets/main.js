const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.r').forEach((el,i)=>{el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});
const h=document.querySelector('.hero-img');addEventListener('scroll',()=>{const y=scrollY;if(y<innerHeight)h.style.translate=`0 ${y*.25}px`},{passive:true});
