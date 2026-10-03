document.documentElement.classList.add('js');
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(e,i){e.style.transitionDelay=(i%3)*80+'ms';io.observe(e)});
var nv=document.getElementById('nav');function sc(){nv.classList.toggle('s',window.scrollY>30)}addEventListener('scroll',sc,{passive:true});sc();
var mn=document.getElementById('mn');document.getElementById('mb').onclick=function(){mn.classList.toggle('o')};mn.onclick=function(){mn.classList.remove('o')};
document.getElementById('y').textContent=new Date().getFullYear();
function msg(){var f=document.getElementById('f');if(!f.reportValidity())return null;return 'Hello XPress Ocean, I am '+n.value+(p.value?' ('+p.value+')':'')+'.\n\n'+m.value}
document.getElementById('bw').onclick=function(){var t=msg();if(t)window.open('https://wa.me/919016569842?text='+encodeURIComponent(t),'_blank')};
document.getElementById('be').onclick=function(){var t=msg();if(t)window.open('https://mail.google.com/mail/?view=cm&fs=1&to=xpressocean.cha@gmail.com&su='+encodeURIComponent('Enquiry from '+n.value)+'&body='+encodeURIComponent(t),'_blank')};
var cp=document.getElementById('cp');cp.onclick=function(e){e.preventDefault();var a='xpressocean.cha@gmail.com';function ok(){cp.textContent='Copied ✓'}
try{navigator.clipboard.writeText(a).then(ok,function(){window.prompt('Copy email address:',a)})}catch(x){window.prompt('Copy email address:',a)}};
