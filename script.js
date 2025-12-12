// Smooth-scroll + mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // close mobile nav if open
      document.querySelector('.nav')?.classList.remove('open');
    });
  });

  // toggle mobile nav
  const toggle = document.querySelector('.nav-toggle');
  toggle?.addEventListener('click', () => {
    document.querySelector('.nav')?.classList.toggle('open');
  });

  // mark active link on scroll
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = Array.from(navLinks).map(a => document.getElementById(a.getAttribute('href').slice(1)));
  window.addEventListener('scroll', () => {
    let idx = sections.findIndex(sec => sec && (sec.getBoundingClientRect().top <= 120));
    navLinks.forEach(l => l.classList.remove('active'));
    if (idx >= 0) navLinks[idx].classList.add('active');
    else navLinks[0].classList.add('active');
  });
});
