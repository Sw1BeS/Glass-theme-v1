// IS Beauty Lux Theme Toggle System
(() => {
  const KEY = 'iblux-theme';
  const root = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');

  const next = {
    auto: 'light',
    light: 'dark',
    dark: 'auto'
  };

  function set(mode) {
    if (mode === 'auto') {
      root.removeAttribute('data-theme');
      localStorage.setItem(KEY, 'auto');
      aria('mixed', 'Theme: auto');
    } else {
      root.setAttribute('data-theme', mode);
      localStorage.setItem(KEY, mode);
      aria(mode === 'dark' ? 'true' : 'false', `Theme: ${mode}`);
    }
  }

  function aria(pressed, label) {
    if (!btn) return;
    btn.setAttribute('aria-pressed', pressed);
    btn.setAttribute('aria-label', label);
  }

  // Initialize theme
  set(localStorage.getItem(KEY) || 'auto');

  // Toggle on click
  btn?.addEventListener('click', () => {
    const cur = localStorage.getItem(KEY) || 'auto';
    set(next[cur]);
  });

  // Listen for OS theme changes when in auto mode
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', () => {
    if ((localStorage.getItem(KEY) || 'auto') === 'auto') {
      set('auto');
    }
  });
})();
