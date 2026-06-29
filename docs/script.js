// Smooth scroll for nav links and mobile menu toggle
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.nav a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href');
      const el = document.querySelector(id);
      if(el){ el.scrollIntoView({behavior:'smooth',block:'start'}); }
      // close mobile menu if open
      const nav = document.getElementById('navLinks');
      if(window.innerWidth<=980 && nav.classList.contains('open')){ nav.classList.remove('open'); nav.style.display='none'; }
    });
  });

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', ()=>{
    if(navLinks.classList.contains('open')){
      navLinks.classList.remove('open'); navLinks.style.display='none';
    } else { navLinks.classList.add('open'); navLinks.style.display='flex'; }
  });
});
