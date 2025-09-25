// Optimized Theme Switcher for IS Beauty Lux
class ThemeSwitcher {
  constructor() {
    this.colorSchemes = {
      'scheme-1': {
        name: 'Brand Porcelain',
        colors: {
          '--color-background': '#ece7d7',
          '--color-secondary-bg': '#f5f2eb',
          '--color-tertiary-bg': '#dab4a6',
          '--color-quaternary-bg': '#bf8a7a',
          '--color-primary': '#bf8a7a',
          '--color-primary-hover': '#a67666',
          '--color-accent': '#5a5e5a',
          '--color-foreground': '#5a5e5a',
          '--color-foreground-light': '#3c3c3c',
          '--color-foreground-muted': '#5a5e5a',
          '--color-border': '#dab4a6',
          '--color-border-light': '#e8e2db'
        }
      },
      'scheme-2': {
        name: 'Brand Peach',
        colors: {
          '--color-background': '#f5f2eb',
          '--color-secondary-bg': '#dab4a6',
          '--color-tertiary-bg': '#ece7d7',
          '--color-quaternary-bg': '#bf8a7a',
          '--color-primary': '#5a5e5a',
          '--color-primary-hover': '#4a4e4a',
          '--color-accent': '#bf8a7a',
          '--color-foreground': '#2c2c2c',
          '--color-foreground-light': '#3c3c3c',
          '--color-foreground-muted': '#5a5e5a',
          '--color-border': '#c4a896',
          '--color-border-light': '#d4c0b0'
        }
      },
      'scheme-3': {
        name: 'Brand Charcoal',
        colors: {
          '--color-background': '#2c2c2c',
          '--color-secondary-bg': '#3a3a3a',
          '--color-tertiary-bg': '#4a4a4a',
          '--color-quaternary-bg': '#5a5e5a',
          '--color-primary': '#bf8a7a',
          '--color-primary-hover': '#dab4a6',
          '--color-accent': '#ece7d7',
          '--color-foreground': '#ffffff',
          '--color-foreground-light': '#f5f5f5',
          '--color-foreground-muted': '#e0e0e0',
          '--color-border': '#6a6e6a',
          '--color-border-light': '#7a7e7a'
        }
      }
    };

    this.currentScheme = 'scheme-1';
    this.effects = {
      particles: false,
      spotlight: false
    };

    this.init();
  }

  init() {
    this.createSwitcher();
    this.bindEvents();
    this.loadSavedSettings();
  }

  createSwitcher() {
    const buttonHTML = `
      <div id="theme-switcher" class="theme-switcher">
        <button id="theme-toggle" class="theme-toggle" aria-label="Toggle Theme">
          <span class="theme-icon">🎨</span>
        </button>
        <div id="theme-panel" class="theme-panel hidden">
          <div class="theme-panel-header">
            <h3>Color Schemes</h3>
            <button id="close-panel" class="close-btn">&times;</button>
          </div>
          <div class="theme-options">
            ${Object.entries(this.colorSchemes).map(([key, scheme]) => `
              <button class="theme-option" data-scheme="${key}">
                <div class="theme-preview" style="background: linear-gradient(45deg, ${scheme.colors['--color-background']}, ${scheme.colors['--color-primary']})"></div>
                <span>${scheme.name}</span>
              </button>
            `).join('')}
          </div>
          <div class="theme-effects">
            <h4>Effects</h4>
            <label class="effect-toggle">
              <input type="checkbox" id="particles-effect">
              <span>Particles</span>
            </label>
            <label class="effect-toggle">
              <input type="checkbox" id="spotlight-effect">
              <span>Spotlight</span>
            </label>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', buttonHTML);
    this.addStyles();
  }

  addStyles() {
    const styles = `
      <style id="theme-switcher-styles">
        .theme-switcher {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 9999;
        }

        .theme-toggle {
          background: #bf8a7a;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(0,0,0,0.2);
        }

        .theme-panel {
          position: absolute;
          top: 60px;
          right: 0;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          padding: 20px;
          min-width: 280px;
          max-height: 400px;
          overflow-y: auto;
        }

        .theme-panel.hidden {
          display: none;
        }

        .theme-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .theme-panel-header h3 {
          margin: 0;
          font-size: 18px;
          color: #333;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
        }

        .theme-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 20px;
        }

        .theme-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-option:hover {
          border-color: #bf8a7a;
          transform: translateY(-2px);
        }

        .theme-option.active {
          border-color: #bf8a7a;
          background: #f9f7f5;
        }

        .theme-preview {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-bottom: 8px;
        }

        .theme-option span {
          font-size: 12px;
          text-align: center;
          color: #333;
        }

        .theme-effects h4 {
          margin: 0 0 10px 0;
          font-size: 14px;
          color: #333;
        }

        .effect-toggle {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          cursor: pointer;
        }

        .effect-toggle input {
          margin-right: 8px;
        }

        .effect-toggle span {
          font-size: 14px;
          color: #333;
        }
      </style>
    `;

    document.head.insertAdjacentHTML('beforeend', styles);
  }

  bindEvents() {
    const toggleBtn = document.getElementById('theme-toggle');
    const closeBtn = document.getElementById('close-panel');
    const panel = document.getElementById('theme-panel');
    const themeOptions = document.querySelectorAll('.theme-option');
    const particlesCheckbox = document.getElementById('particles-effect');
    const spotlightCheckbox = document.getElementById('spotlight-effect');

    toggleBtn.addEventListener('click', () => {
      panel.classList.toggle('hidden');
    });

    closeBtn.addEventListener('click', () => {
      panel.classList.add('hidden');
    });

    themeOptions.forEach(option => {
      option.addEventListener('click', () => {
        const scheme = option.dataset.scheme;
        this.switchScheme(scheme);

        themeOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
      });
    });

    particlesCheckbox.addEventListener('change', (e) => {
      this.effects.particles = e.target.checked;
      this.toggleEffect('particles');
    });

    spotlightCheckbox.addEventListener('change', (e) => {
      this.effects.spotlight = e.target.checked;
      this.toggleEffect('spotlight');
    });
  }

  switchScheme(schemeKey) {
    if (!this.colorSchemes[schemeKey]) return;

    this.currentScheme = schemeKey;
    const scheme = this.colorSchemes[schemeKey];

    // Apply CSS variables
    const root = document.documentElement;
    Object.entries(scheme.colors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Save to localStorage
    localStorage.setItem('is-beauty-theme', schemeKey);

    // Update Shopify theme colors
    this.updateShopifyThemeColors(scheme);
  }

  updateShopifyThemeColors(scheme) {
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-theme-colors');
    if (existingStyle) existingStyle.remove();

    // Create new dynamic styles
    const style = document.createElement('style');
    style.id = 'dynamic-theme-colors';
    style.textContent = `
      :root {
        --color-background: ${scheme.colors['--color-background']};
        --color-secondary-bg: ${scheme.colors['--color-secondary-bg']};
        --color-tertiary-bg: ${scheme.colors['--color-tertiary-bg']};
        --color-quaternary-bg: ${scheme.colors['--color-quaternary-bg']};
        --color-primary: ${scheme.colors['--color-primary']};
        --color-primary-hover: ${scheme.colors['--color-primary-hover']};
        --color-accent: ${scheme.colors['--color-accent']};
        --color-foreground: ${scheme.colors['--color-foreground']};
        --color-foreground-light: ${scheme.colors['--color-foreground-light']};
        --color-foreground-muted: ${scheme.colors['--color-foreground-muted']};
        --color-border: ${scheme.colors['--color-border']};
        --color-border-light: ${scheme.colors['--color-border-light']};
      }

      body {
        background-color: var(--color-background) !important;
        color: var(--color-foreground) !important;
      }

      .section {
        background-color: var(--color-background) !important;
      }

      h1, h2, h3, h4, h5, h6 {
        color: var(--color-foreground) !important;
        background: linear-gradient(135deg, var(--color-primary), var(--color-accent)) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
        display: inline-block !important;
        width: fit-content !important;
      }

      .btn, .button {
        background-color: var(--color-primary) !important;
        color: var(--color-foreground-light) !important;
        border-color: var(--color-primary) !important;
      }

      .btn:hover, .button:hover {
        background-color: var(--color-primary-hover) !important;
        border-color: var(--color-primary-hover) !important;
      }
    `;

    document.head.appendChild(style);
  }

  toggleEffect(effect) {
    if (effect === 'particles') {
      this.toggleParticles();
    } else if (effect === 'spotlight') {
      this.toggleSpotlight();
    }
  }

  toggleParticles() {
    if (this.effects.particles) {
      this.createParticles();
    } else {
      this.removeParticles();
    }
  }

  toggleSpotlight() {
    if (this.effects.spotlight) {
      this.createSpotlight();
    } else {
      this.removeSpotlight();
    }
  }

  createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles-container';
    particlesContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    `;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--color-primary);
        border-radius: 50%;
        opacity: 0.6;
        animation: float ${Math.random() * 3 + 2}s infinite ease-in-out;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `;
      particlesContainer.appendChild(particle);
    }

    document.body.appendChild(particlesContainer);

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  removeParticles() {
    const container = document.getElementById('particles-container');
    if (container) container.remove();
  }

  createSpotlight() {
    const spotlight = document.createElement('div');
    spotlight.id = 'spotlight-effect';
    spotlight.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 0%, rgba(0,0,0,0.3) 70%);
      pointer-events: none;
      z-index: 1000;
    `;

    document.body.appendChild(spotlight);

    document.addEventListener('mousemove', (e) => {
      spotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
      spotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
    });
  }

  removeSpotlight() {
    const spotlight = document.getElementById('spotlight-effect');
    if (spotlight) spotlight.remove();
  }

  loadSavedSettings() {
    const savedScheme = localStorage.getItem('is-beauty-theme');
    if (savedScheme && this.colorSchemes[savedScheme]) {
      this.switchScheme(savedScheme);
    }

    const savedEffects = localStorage.getItem('is-beauty-effects');
    if (savedEffects) {
      this.effects = JSON.parse(savedEffects);

      const particlesCheckbox = document.getElementById('particles-effect');
      const spotlightCheckbox = document.getElementById('spotlight-effect');

      if (particlesCheckbox) particlesCheckbox.checked = this.effects.particles;
      if (spotlightCheckbox) spotlightCheckbox.checked = this.effects.spotlight;

      if (this.effects.particles) this.toggleParticles();
      if (this.effects.spotlight) this.toggleSpotlight();
    }
  }

  saveSettings() {
    localStorage.setItem('is-beauty-theme', this.currentScheme);
    localStorage.setItem('is-beauty-effects', JSON.stringify(this.effects));
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
});
