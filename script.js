// script.js — lightweight interactions

// Insert current year in footer
(function setYear(){
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;
})();

// Smooth scroll for internal links (if used)
(function smoothScroll(){
  if('scrollBehavior' in document.documentElement.style) {
    // native support, nothing else needed
    return;
  }
  // fallback
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if(target) window.scrollTo({top: target.offsetTop - 18, behavior:'smooth'});
    });
  });
})();

// Small image load fallback (if photo fails)
(function imgFallback(){
  const img = document.getElementById('profilePhoto');
  if(!img) return;
  img.addEventListener('error', function(){
    // simple colored placeholder if image not found
    img.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="%23e6ecf7"/><g transform="translate(200,180)"><circle cx="0" cy="-20" r="68" fill="%23cfd9ea"/><rect x="-100" y="86" rx="16" ry="16" width="200" height="84" fill="%23dbe6f7"/></g></svg>'
    );
  });
})();
