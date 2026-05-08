/**
 * IA en VS Code — Guía práctica IT4W
 * Shared JS: progress bar, copy buttons, sidebar nav, stepper
 */

document.addEventListener('DOMContentLoaded', () => {

  // Garantizá que cada página empiece desde arriba
  window.scrollTo(0, 0);

  // ── 1. PROGRESS BAR ──────────────────────────────────────────
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ── 2. COPY BUTTONS ──────────────────────────────────────────
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = btn.closest('.code-block')?.querySelector('pre');
      if (!pre) return;
      navigator.clipboard.writeText(pre.textContent.trim()).then(() => {
        btn.textContent = '✓ Copiado';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copiar';
          btn.classList.remove('copied');
        }, 2000);
      }).catch(() => {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = pre.textContent.trim();
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        btn.textContent = '✓ Copiado';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 2000);
      });
    });
  });

  // ── 3. MOBILE NAV ─────────────────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const overlay   = document.querySelector('.mobile-nav-overlay');
  const drawer    = document.querySelector('.mobile-nav-drawer');

  const openMenu  = () => { overlay?.classList.add('open'); drawer?.classList.add('open'); };
  const closeMenu = () => { overlay?.classList.remove('open'); drawer?.classList.remove('open'); };

  hamburger?.addEventListener('click', openMenu);
  overlay?.addEventListener('click', closeMenu);

  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // ── 4. STEPPER ────────────────────────────────────────────────
  const stepDots  = document.querySelectorAll('.step-dot');
  const stepCards = document.querySelectorAll('.exercise-step');

  if (stepDots.length && stepCards.length) {
    let current = 0;

    const goTo = (idx, scroll = true) => {
      if (idx < 0 || idx >= stepCards.length) return;
      current = idx;

      stepDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
        dot.classList.toggle('done', i < idx);
      });

      document.querySelectorAll('.step-connector').forEach((c, i) => {
        c.classList.toggle('done', i < idx);
      });

      stepCards.forEach((card, i) => {
        card.classList.toggle('active', i === idx);
      });

      if (scroll) {
        window.scrollTo({ top: document.querySelector('.stepper-nav')?.offsetTop - 80 || 0, behavior: 'smooth' });
      }
    };

    stepDots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

    document.querySelectorAll('[data-step-next]').forEach(btn => {
      btn.addEventListener('click', () => goTo(current + 1));
    });

    document.querySelectorAll('[data-step-prev]').forEach(btn => {
      btn.addEventListener('click', () => goTo(current - 1));
    });

    goTo(0, false);  // inicializa sin scrollear — la página ya arranca desde arriba
  }

  // ── 5. ACTIVE NAV LINK ────────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(link => {
    const href = link.getAttribute('href')?.split('/').pop();
    if (href === currentPage) link.classList.add('active');
  });

});
