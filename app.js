(() => {
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const email = button.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(email);
        const previous = button.textContent;
        button.textContent = 'Skopiowano adres';
        button.classList.add('is-copied');
        window.setTimeout(() => {
          button.textContent = previous;
          button.classList.remove('is-copied');
        }, 2200);
      } catch {
        window.prompt('Skopiuj adres e-mail:', email);
      }
    });
  });

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const elements = document.querySelectorAll('.topic-card, .soft-card, .meeting-row, .faq-item');
    elements.forEach((element) => element.classList.add('reveal-ready'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
  }
})();
