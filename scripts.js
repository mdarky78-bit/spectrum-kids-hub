/**
 * Spectrum Kids Hub — scripts.js
 * Handles: mobile nav toggle, scenario card expand/collapse
 */

// ── Mobile Navigation ──────────────────────────────────────────
(function () {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  if (!burger || !navLinks) return;

  burger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close nav when a link is clicked (mobile UX)
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav when clicking outside
  document.addEventListener('click', function (e) {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
})();

// ── Scenario Card Toggle ────────────────────────────────────────
function toggleCard(id) {
  var card = document.getElementById(id);
  if (!card) return;

  var isOpen = card.classList.toggle('open');
  var header = card.querySelector('.scenario-card__header');
  if (header) {
    header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
}
