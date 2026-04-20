// script.js — portfolio interactions

// ── Footer year ──────────────────────────────────────
(function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// ── Smooth scroll for in-page anchor links ───────────
(function smoothScroll() {
  if ('scrollBehavior' in document.documentElement.style) return; // native support
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 18, behavior: 'smooth' });
      }
    });
  });
})();

// ── Profile photo fallback (graceful SVG placeholder) ─
(function imgFallback() {
  const img = document.getElementById('profilePhoto');
  if (!img) return;
  img.addEventListener('error', function () {
    // Prevent infinite loop if the fallback itself somehow fails
    img.removeEventListener('error', arguments.callee);
    img.src =
      'data:image/svg+xml;charset=UTF-8,' +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="110" height="110">' +
        '<rect width="110" height="110" fill="#e6ecf7"/>' +
        '<circle cx="55" cy="44" r="22" fill="#b0bfd8"/>' +
        '<ellipse cx="55" cy="90" rx="34" ry="22" fill="#cad5ea"/>' +
        '</svg>'
      );
    img.alt = ''; // decorative placeholder
  });
})();

// ── Back-to-top button ───────────────────────────────
(function backToTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;

  function toggleVisibility() {
    if (window.scrollY > 320) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility(); // check on load

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();})();
