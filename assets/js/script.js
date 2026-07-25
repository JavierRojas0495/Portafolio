const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list a');
const ledgerButtons = document.querySelectorAll('.ledger-summary');
const sections = document.querySelectorAll('main section[id]');
const yearEl = document.getElementById('footer-year');

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

ledgerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const row = button.closest('.ledger-row');
    if (!row) return;

    const willOpen = !row.classList.contains('is-open');

    document.querySelectorAll('.ledger-row.is-open').forEach((openRow) => {
      openRow.classList.remove('is-open');
      const openBtn = openRow.querySelector('.ledger-summary');
      if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
    });

    if (willOpen) {
      row.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

const revealTargets = document.querySelectorAll(
  '.section-head, .prose-block, .ledger-row, .dossier, .stack-group, .contact-channel, .snapshot, .id-panel'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => navObserver.observe(section));
} else {
  revealTargets.forEach((el) => el.classList.add('is-in'));
}
