// Advanced Theme Switcher with Effects for IS Beauty Lux
class ThemeSwitcher {
  constructor() {
    // Mapping between Shopify schemes and theme-switcher schemes
    this.schemeMapping = {
      'scheme-1': 'brand-porcelain',
      'scheme-2': 'deep-burgundy',
      'scheme-3': 'sage-green',
      'scheme-4': 'lavender-dream',
      'scheme-5': 'warm-earth',
      'scheme-6': 'cyber-punk',
      'scheme-7': 'brand-peach'
    };

    // Store event listeners for cleanup
    this.eventListeners = [];
    this.observers = [];
    this.timeouts = [];

    this.colorSchemes = {
      'deep-burgundy': {
        name: 'Deep Burgundy',
        colors: {
          '--color-background': '#0f0707',
          '--color-secondary-bg': '#1a0f0f',
          '--color-tertiary-bg': '#2d1b1b',
          '--color-quaternary-bg': '#3d2525',
          '--color-primary': '#bf8a7a',
          '--color-primary-hover': '#d4a088',
          '--color-accent': '#dab4a6',
          '--color-foreground': '#f5f2eb',
          '--color-foreground-light': '#ece7d7',
          '--color-foreground-muted': '#dab4a6',
          '--color-border': '#4d3030',
          '--color-border-light': '#5a3030'
        }
      },
      'sage-green': {
        name: 'Sage Green',
        colors: {
          '--color-background': '#2d4a2d',
          '--color-secondary-bg': '#3a5a3a',
          '--color-tertiary-bg': '#4a6a4a',
          '--color-quaternary-bg': '#5a7a5a',
          '--color-primary': '#bf8a7a',
          '--color-primary-hover': '#a67666',
          '--color-accent': '#8fbc8f',
          '--color-foreground': '#f0f8f0',
          '--color-foreground-light': '#e8f4e8',
          '--color-foreground-muted': '#d8e8d8',
          '--color-border': '#6a8a6a',
          '--color-border-light': '#7a9a7a'
        }
      },
      'lavender-dream': {
        name: 'Lavender Dream',
        colors: {
          '--color-background': '#4a2d6b',
          '--color-secondary-bg': '#5a3d7b',
          '--color-tertiary-bg': '#6b4d8b',
          '--color-quaternary-bg': '#7b5d9b',
          '--color-primary': '#b19cd9',
          '--color-primary-hover': '#9d82c7',
          '--color-accent': '#c5a8e8',
          '--color-foreground': '#f8f4ff',
          '--color-foreground-light': '#f0e8ff',
          '--color-foreground-muted': '#e8dcff',
          '--color-border': '#8b6bab',
          '--color-border-light': '#9b7bbb'
        }
      },
      'warm-earth': {
        name: 'Warm Earth',
        colors: {
          '--color-background': '#8b4513',
          '--color-secondary-bg': '#a0522d',
          '--color-tertiary-bg': '#cd853f',
          '--color-quaternary-bg': '#deb887',
          '--color-primary': '#cd853f',
          '--color-primary-hover': '#b87333',
          '--color-accent': '#daa520',
          '--color-foreground': '#fff8f0',
          '--color-foreground-light': '#fef0e0',
          '--color-foreground-muted': '#fce8d0',
          '--color-border': '#f4a460',
          '--color-border-light': '#faf0e6'
        }
      },
      'cyber-punk': {
        name: 'Cyber Punk',
        colors: {
          '--color-background': '#0a0a0a',
          '--color-secondary-bg': '#1a1a1a',
          '--color-tertiary-bg': '#2a2a2a',
          '--color-quaternary-bg': '#3a3a3a',
          '--color-primary': '#00ff88',
          '--color-primary-hover': '#00cc6a',
          '--color-accent': '#00ffcc',
          '--color-foreground': '#ffffff',
          '--color-foreground-light': '#cccccc',
          '--color-foreground-muted': '#999999',
          '--color-border': '#00ff88',
          '--color-border-light': '#2a2a2a'
        }
      },
      'brand-porcelain': {
        name: 'Brand Porcelain',
        colors: {
          '--color-background': '#ece7d7',
          '--color-secondary-bg': '#f5f2eb',
          '--color-tertiary-bg': '#dab4a6',
          '--color-quaternary-bg': '#bf8a7a',
          '--color-primary': '#5a5e5a',
          '--color-primary-hover': '#4a4e4a',
          '--color-accent': '#bf8a7a',
          '--color-foreground': '#2c2c2c',
          '--color-foreground-light': '#3c3c3c',
          '--color-foreground-muted': '#5a5e5a',
          '--color-border': '#d4c0b0',
          '--color-border-light': '#e8e2db'
        }
      },
      'brand-peach': {
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
      'brand-charcoal': {
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
      },
      'luxury-black-gold': {
        name: 'Luxury Black & Gold',
        colors: {
          '--color-background': '#0a0a0a',
          '--color-secondary-bg': '#1a1a1a',
          '--color-tertiary-bg': '#2a2a2a',
          '--color-quaternary-bg': '#3a3a3a',
          '--color-primary': '#d4af37',
          '--color-primary-hover': '#b8941f',
          '--color-accent': '#ffd700',
          '--color-foreground': '#ffffff',
          '--color-foreground-light': '#f0f0f0',
          '--color-foreground-muted': '#cccccc',
          '--color-border': '#4a4a4a',
          '--color-border-light': '#5a5a5a'
        }
      }
    };

    this.currentScheme = 'brand-porcelain';
    this.effects = {
      particles: false,
      spotlight: false
    };

    this.init();
  }

  getStaticPreview(schemeKey) {
    // Static preview colors that don't change with current theme
    const staticPreviews = {
      'deep-burgundy': ['#0f0707', '#1a0f0f', '#bf8a7a', '#dab4a6'],
      'sage-green': ['#2d4a2d', '#3a5a3a', '#bf8a7a', '#8fbc8f'],
      'lavender-dream': ['#4a2d6b', '#5a3d7b', '#b19cd9', '#c5a8e8'],
      'midnight-blue': ['#0f1419', '#1a2028', '#bf8a7a', '#64b5f6'],
      'warm-terracotta': ['#8b4513', '#a0522d', '#cd853f', '#daa520'],
      'cyber-punk': ['#0a0a0a', '#1a1a1a', '#00ff88', '#00ffcc'],
      'brand-porcelain': ['#ece7d7', '#f5f2eb', '#5a5e5a', '#bf8a7a'],
      'brand-peach': ['#f5f2eb', '#dab4a6', '#5a5e5a', '#bf8a7a'],
      'brand-charcoal': ['#2c2c2c', '#3a3a3a', '#bf8a7a', '#ece7d7'],
      'luxury-black-gold': ['#0a0a0a', '#1a1a1a', '#d4af37', '#ffd700']
    };
    return staticPreviews[schemeKey] || ['#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0'];
  }

  init() {
    this.createSwitcher();
    this.bindEvents();
    this.loadSavedSettings();

    // Apply default theme if no theme is saved
    const savedScheme = localStorage.getItem('is-beauty-theme');
    if (!savedScheme) {
      this.switchScheme('brand-porcelain');
    }

    // Listen for Shopify Theme Editor changes
    this.setupShopifyThemeEditorListener();

    // Listen for window resize to apply mobile styles
    this.setupResizeListener();

    // Apply current theme to all existing elements
    this.applyCurrentThemeToElements();

    // Set up observer for dynamically added elements
    this.setupDynamicElementObserver();
  }

  // Add event listener with cleanup tracking
  addEventListener(element, event, handler, options = {}) {
    element.addEventListener(event, handler, options);
    this.eventListeners.push({ element, event, handler, options });
  }

  // Add timeout with cleanup tracking
  addTimeout(callback, delay) {
    const timeoutId = setTimeout(callback, delay);
    this.timeouts.push(timeoutId);
    return timeoutId;
  }

  // Add observer with cleanup tracking
  addObserver(observer) {
    this.observers.push(observer);
    return observer;
  }

  // Cleanup all event listeners, timeouts, and observers
  destroy() {
    // Remove all event listeners
    this.eventListeners.forEach(({ element, event, handler, options }) => {
      element.removeEventListener(event, handler, options);
    });
    this.eventListeners = [];

    // Clear all timeouts
    this.timeouts.forEach(timeoutId => clearTimeout(timeoutId));
    this.timeouts = [];

    // Disconnect all observers
    this.observers.forEach(observer => {
      if (observer.disconnect) observer.disconnect();
    });
    this.observers = [];
  }

  createSwitcher() {
    // Create floating button
    const buttonHTML = `
      <button id="theme-toggle-btn" style="
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        z-index: 1000;
        background: color-mix(in srgb, var(--color-primary) 85%, transparent);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid color-mix(in srgb, var(--color-accent) 40%, transparent);
        border-radius: 16px;
        width: 60px;
        height: 60px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 8px 32px color-mix(in srgb, var(--color-primary) 20%, transparent);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--color-foreground);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      ">
        <span style="
          position: relative;
          z-index: 2;
          font-size: 18px;
        ">🎨</span>
      </button>

      <style>
        @media (max-width: 768px) {
          #theme-toggle-btn {
            width: 50px !important;
            height: 50px !important;
            bottom: 15px !important;
            right: 15px !important;
            font-size: 16px !important;
          }

          #theme-modal > div {
            padding: 1rem !important;
            margin: 0.5rem !important;
            max-height: 85vh !important;
          }
        }
      </style>
    `;

    // Create modal
    const modalHTML = `
      <div id="theme-modal" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: color-mix(in srgb, var(--color-background) 80%, transparent);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        z-index: 1001;
        display: none;
        justify-content: center;
        align-items: center;
        padding: 1rem;
      ">
        <div style="
          background: color-mix(in srgb, var(--color-secondary-bg) 90%, transparent);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);
          border-radius: 20px;
          padding: 1.5rem;
          max-width: 400px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 25px 50px color-mix(in srgb, var(--color-primary) 15%, transparent);
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        ">
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(0,0,0,0.1);
          ">
            <h3 style="margin: 0; color: #000; font-size: 18px; font-weight: 600;">
              Themes & Effects
            </h3>
            <button id="close-modal" style="
              background: none;
              border: none;
              font-size: 20px;
              cursor: pointer;
              color: #666;
              padding: 4px;
              border-radius: 50%;
              width: 32px;
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
            ">×</button>
          </div>

          <!-- Color Schemes -->
          <div style="margin-bottom: 2rem;">
            <h4 style="margin: 0 0 1rem 0; color: #000; font-size: 16px; font-weight: 600;">
              Color Themes
            </h4>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
              ${Object.entries(this.colorSchemes).map(([key, scheme]) => `
                <div style="text-align: center;">
                  <div style="
                    font-weight: 600;
                    color: var(--color-foreground, #000000) !important;
                    margin-bottom: 8px;
                    font-size: 13px;
                  ">${scheme.name}</div>
                  <button class="scheme-btn" data-scheme="${key}" style="
                    border: 2px solid rgba(0,0,0,0.1);
                    border-radius: 16px;
                    background: ${this.getStaticPreview(key)[0]};
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    padding: 12px;
                    text-align: center;
                    position: relative;
                    min-height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    overflow: hidden;
                    width: 100%;
                  ">
                    <div style="display: flex; gap: 3px;">
                      ${this.getStaticPreview(key).map(color => `
                        <div style="
                          width: 12px;
                          height: 12px;
                          background: ${color};
                          border-radius: 50%;
                        "></div>
                      `).join('')}
                    </div>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Beauty Effects -->
          <div style="
            border-top: 1px solid var(--color-border, rgba(0,0,0,0.1));
            padding-top: 1.5rem;
          ">
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <!-- Beauty Particles -->
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="font-weight: 500; color: var(--color-foreground, #000000) !important; font-size: 14px;">
                  💫 Beauty Particles
                </div>
                <label class="ios-toggle-switch" style="
                  position: relative;
                  display: inline-block;
                  width: 50px;
                  height: 30px;
                ">
                  <input type="checkbox" class="effect-toggle" data-effect="particles" style="opacity: 0; width: 0; height: 0;">
                  <span class="ios-slider" style="
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #ccc;
                    transition: 0.3s;
                    border-radius: 30px;
                  "></span>
                  <span class="ios-slider-thumb" style="
                    position: absolute;
                    content: '';
                    height: 24px;
                    width: 24px;
                    left: 3px;
                    bottom: 3px;
                    background-color: white;
                    transition: 0.3s;
                    border-radius: 50%;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                  "></span>
                </label>
              </div>

              <!-- Beauty Spotlight -->
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="font-weight: 500; color: var(--color-foreground, #000000) !important; font-size: 14px;">
                  💡 Beauty Spotlight
                </div>
                <label class="ios-toggle-switch" style="
                  position: relative;
                  display: inline-block;
                  width: 50px;
                  height: 30px;
                ">
                  <input type="checkbox" class="effect-toggle" data-effect="spotlight" style="opacity: 0; width: 0; height: 0;">
                  <span class="ios-slider" style="
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #ccc;
                    transition: 0.3s;
                    border-radius: 30px;
                  "></span>
                  <span class="ios-slider-thumb" style="
                    position: absolute;
                    content: '';
                    height: 24px;
                    width: 24px;
                    left: 3px;
                    bottom: 3px;
                    background-color: white;
                    transition: 0.3s;
                    border-radius: 50%;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                  "></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', buttonHTML + modalHTML);

    // Add CSS for rotating text animation
    const rotateCSS = document.createElement('style');
    rotateCSS.textContent = `
      @keyframes rotateText {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(rotateCSS);
  }

  bindEvents() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const modal = document.getElementById('theme-modal');
    const closeBtn = document.getElementById('close-modal');

    // Toggle modal
    toggleBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close modal on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Scheme selection
    document.querySelectorAll('.scheme-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const scheme = e.currentTarget.dataset.scheme;
        this.switchScheme(scheme);
        // Modal stays open for user to select effects
      });

      btn.addEventListener('mouseenter', (e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
      });

      btn.addEventListener('mouseleave', (e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      });
    });

    // Effect toggles - particles and spotlight
    document.querySelectorAll('.effect-toggle').forEach(toggle => {
      toggle.addEventListener('change', (e) => {
        const effect = e.currentTarget.dataset.effect;
        this.toggleEffect(effect);

        // Update toggle visual state
        const slider = e.currentTarget.nextElementSibling;
        const thumb = slider.nextElementSibling;

        if (e.currentTarget.checked) {
          slider.style.backgroundColor = '#007AFF';
          thumb.style.transform = 'translateX(20px)';
        } else {
          slider.style.backgroundColor = '#ccc';
          thumb.style.transform = 'translateX(0)';
        }
      });
    });
  }

  switchScheme(schemeKey) {
    if (!this.colorSchemes[schemeKey]) return;

    this.currentScheme = schemeKey;
    const scheme = this.colorSchemes[schemeKey];

    // Save to localStorage immediately
    localStorage.setItem('is-beauty-theme', schemeKey);

    // Apply colors to CSS variables
    Object.entries(scheme.colors).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });

    // Apply colors to Shopify scheme classes
    this.applySchemeToClasses(scheme);

    // Apply glass colors
    this.applyGlassColors(scheme);

    // Apply section backgrounds
    this.applySectionBackgrounds(scheme);

    // Update Shopify theme colors
    this.updateShopifyThemeColors(scheme);

    // Save to localStorage
    localStorage.setItem('is-beauty-theme', schemeKey);

    // Update active button
    document.querySelectorAll('.scheme-btn').forEach(btn => {
      btn.style.borderWidth = '2px';
      btn.style.opacity = '0.7';
    });

    const activeBtn = document.querySelector(`[data-scheme="${schemeKey}"]`);
    if (activeBtn) {
      activeBtn.style.borderWidth = '4px';
      activeBtn.style.opacity = '1';
    }
  }

  applyCurrentThemeToElements() {
    // Find all elements with color-scheme-* classes and apply current theme
    const currentScheme = this.currentScheme || 'brand-porcelain';
    const scheme = this.colorSchemes[currentScheme];

    if (scheme) {
      // Apply colors to root CSS variables first
      Object.entries(scheme.colors).forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
      });

      // Apply colors to all sections and elements
      this.applySchemeToClasses(scheme);

      // Apply colors to all glass elements
      this.applyGlassColors(scheme);

      // Apply section backgrounds
      this.applySectionBackgrounds(scheme);

      // Scrollbar styles removed: use native browser scrollbar
    }
  }

  setupDynamicElementObserver() {
    // Observer for dynamically added elements with color-scheme-* classes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if the added node has color-scheme-* class
            if (node.classList && Array.from(node.classList).some(cls => cls.startsWith('color-scheme-'))) {
              this.applyCurrentThemeToElement(node);
            }

            // Check child elements
            const colorSchemeElements = node.querySelectorAll && node.querySelectorAll('[class*="color-scheme-"]');
            if (colorSchemeElements) {
              colorSchemeElements.forEach(element => {
                this.applyCurrentThemeToElement(element);
              });
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  setupShopifyThemeEditorListener() {
    // Listen for Shopify Theme Editor changes
    if (window.Shopify && window.Shopify.theme) {
      // Listen for theme editor changes
      this.addEventListener(document, 'shopify:section:load', () => {
        this.addTimeout(() => {
          this.applyCurrentThemeToElements();
        }, 100);
      });

      this.addEventListener(document, 'shopify:section:reorder', () => {
        this.addTimeout(() => {
          this.applyCurrentThemeToElements();
        }, 100);
      });

      this.addEventListener(document, 'shopify:section:select', () => {
        this.addTimeout(() => {
          this.applyCurrentThemeToElements();
        }, 100);
      });

      // Listen for theme settings changes
      this.addEventListener(document, 'shopify:section:unload', () => {
        this.addTimeout(() => {
          this.applyCurrentThemeToElements();
        }, 100);
      });

      // Listen for any class changes on sections
      const sectionObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const target = mutation.target;
            if (target.classList.contains('color-scheme') ||
                target.classList.contains('section') ||
                target.classList.contains('glass')) {
              this.addTimeout(() => {
                this.applyCurrentThemeToElement(target);
              }, 50);
            }
          }
        });
      });

      this.addObserver(sectionObserver);
      sectionObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributeFilter: ['class'],
        subtree: true
      });
    }
  }

  setupResizeListener() {
    let resizeTimeout;
    this.addEventListener(window, 'resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = this.addTimeout(() => {
        this.applyCurrentThemeToElements();
      }, 250);
    });
  }

  applyCurrentThemeToElement(element) {
    const currentScheme = this.currentScheme || 'brand-porcelain';
    const scheme = this.colorSchemes[currentScheme];

    if (scheme) {
      Object.entries(scheme.colors).forEach(([property, value]) => {
        element.style.setProperty(property, value);
      });

      // Apply mobile-specific styles
      this.applyMobileStyles(element, currentScheme);
    }
  }

  applyMobileStyles(element, schemeKey) {
    const scheme = this.colorSchemes[schemeKey];
    if (!scheme) return;

    // Check if element is mobile-specific
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    // Apply mobile-specific glass effects
    if (element.classList.contains('glass')) {
      // Reduce opacity for mobile glass effects
      element.style.setProperty('--glass-global-opacity', '0.85');
      element.style.setProperty('--glass-global-border-opacity', '0.6');
    }

    // Apply mobile-specific colors for better contrast
    if (element.classList.contains('mobile-menu') || element.classList.contains('mobile-toggle')) {
      element.style.setProperty('--glass-surface-color', scheme.colors['--color-secondary-bg']);
      element.style.setProperty('--glass-surface-border-color', scheme.colors['--color-border']);
      element.style.setProperty('--glass-foreground-strong', scheme.colors['--color-foreground']);
    }
  }

  applySectionBackgrounds(scheme) {
    // Apply secondary background to all sections with color-scheme class
    const sections = document.querySelectorAll('.color-scheme');
    sections.forEach(section => {
      section.style.setProperty('background', scheme.colors['--color-secondary-bg']);
    });
  }

  // applyScrollbarStyles removed

  applySchemeToClasses(scheme) {
    // Apply colors to all elements with color-scheme class and data-theme attribute
    const elements = document.querySelectorAll('.color-scheme[data-theme]');
    elements.forEach(element => {
      const theme = element.getAttribute('data-theme');
      const mappedScheme = this.schemeMapping[theme];

      if (mappedScheme === this.currentScheme) {
        Object.entries(scheme.colors).forEach(([property, value]) => {
          element.style.setProperty(property, value);
        });
      }
    });

    // Apply colors to all sections with color-scheme-* classes
    Object.keys(this.schemeMapping).forEach(shopifyScheme => {
      const sections = document.querySelectorAll(`.color-${shopifyScheme}, .section.color-${shopifyScheme}`);
      sections.forEach(section => {
        Object.entries(scheme.colors).forEach(([property, value]) => {
          section.style.setProperty(property, value);
        });
      });
    });

    // Apply colors to specific section types
    const sectionSelectors = [
      '.hero-section',
      '.founder-section',
      '.product-composition-section',
      '.reviews-section',
      '.faq-section',
      '.how-to-use-section',
      '.vp1-section',
      '.vp2-section',
      '.vp3-section'
    ];

    sectionSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        if (element.classList.toString().includes('color-scheme-')) {
          Object.entries(scheme.colors).forEach(([property, value]) => {
            element.style.setProperty(property, value);
          });
        }
      });
    });

    // Apply glass effect variables
    const glassVariables = {
      '--glass-surface-color': 'rgba(255, 255, 255, 0.1)',
      '--glass-surface-border-color': 'rgba(255, 255, 255, 0.2)',
      '--glass-shadow-color': 'rgba(0, 0, 0, 0.1)',
      '--glass-highlight-color': scheme.colors['--color-primary'],
      '--glass-foreground-strong': scheme.colors['--color-foreground'],
      '--glass-foreground-muted': scheme.colors['--color-foreground-muted']
    };

    Object.entries(glassVariables).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  }

  updateShopifyThemeColors(scheme) {
    const normalizeHex = (value) => value.replace('#', '').trim();

    const hexToRgb = (hex) => {
      const value = normalizeHex(hex);
      const chunk = value.length === 3
        ? value.split('').map((char) => char + char)
        : value.match(/.{2}/g) || ['00', '00', '00'];
      return chunk.map((part) => parseInt(part, 16));
    };

    const componentToHex = (value) => {
      const channel = Math.max(0, Math.min(255, Math.round(value)));
      return channel.toString(16).padStart(2, '0');
    };

    const rgbToHex = (r, g, b) => `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

    const mixColors = (source, target, amount) => {
      const a = hexToRgb(source);
      const b = hexToRgb(target);
      const ratio = Math.max(0, Math.min(1, amount));
      const mixed = a.map((channel, index) => channel + (b[index] - channel) * ratio);
      return rgbToHex(mixed[0], mixed[1], mixed[2]);
    };

    const toRgba = (hex, alpha) => {
      const [r, g, b] = hexToRgb(hex);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const resolveColor = (value, fallback) => {
      if (typeof value === 'string' && value.trim().startsWith('#')) {
        return value.trim();
      }
      return fallback;
    };

    const getLuminance = (hex) => {
      const channels = hexToRgb(hex).map((channel) => {
        const c = channel / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
    };

    const getContrastColor = (hex) => (getLuminance(hex) < 0.55 ? '#ffffff' : '#2c2c2c');

    const primaryColor = resolveColor(scheme.colors['--color-primary'], '#bf8a7a');
    const foregroundColor = resolveColor(scheme.colors['--color-foreground'], '#2c2c2c');
    const secondaryBg = resolveColor(scheme.colors['--color-secondary-bg'], '#f5f2eb');
    const backgroundColor = resolveColor(scheme.colors['--color-background'], '#ffffff');
    const borderColor = resolveColor(scheme.colors['--color-border'], foregroundColor);
    const contrastColor = getContrastColor(primaryColor);
    const backgroundLuminance = getLuminance(backgroundColor);
    const brightness = backgroundLuminance < 0.5 ? 'dark' : 'light';

    document.body.dataset.themeBrightness = brightness;
    document.body.classList.toggle('theme-brightness-dark', brightness === 'dark');
    document.body.classList.toggle('theme-brightness-light', brightness === 'light');

    document.documentElement.style.setProperty('--text-on-primary', contrastColor);
    const glassSurface = brightness === 'dark'
      ? mixColors(secondaryBg, '#ffffff', 0.18)
      : mixColors(secondaryBg, '#ffffff', 0.08);

    const glassTint = brightness === 'dark'
      ? mixColors(glassSurface, '#ffffff', 0.12)
      : mixColors(glassSurface, '#ffffff', 0.04);

    const glassBorder = brightness === 'dark'
      ? mixColors(borderColor, '#ffffff', 0.45)
      : mixColors(borderColor, '#000000', 0.08);

    const glassShadow = toRgba(foregroundColor, brightness === 'dark' ? 0.32 : 0.18);
    const glassForegroundStrong = mixColors(foregroundColor, brightness === 'dark' ? '#ffffff' : '#000000', brightness === 'dark' ? 0.1 : 0.05);
    const glassForegroundMuted = mixColors(glassForegroundStrong, brightness === 'dark' ? '#ffffff' : '#000000', 0.18);

    document.documentElement.style.setProperty('--glass-surface-color', glassSurface);
    document.documentElement.style.setProperty('--glass-surface-border-color', glassBorder);
    document.documentElement.style.setProperty('--glass-shadow-color', glassShadow);
    document.documentElement.style.setProperty('--glass-highlight-color', primaryColor);
    document.documentElement.style.setProperty('--glass-global-tint', glassTint);
    document.documentElement.style.setProperty('--glass-global-opacity', brightness === 'dark' ? 0.34 : 0.24);
    document.documentElement.style.setProperty('--glass-global-border-opacity', brightness === 'dark' ? 0.28 : 0.18);
    document.documentElement.style.setProperty('--glass-foreground-strong', glassForegroundStrong);
    document.documentElement.style.setProperty('--glass-foreground-muted', glassForegroundMuted);

    const styleId = 'dynamic-theme-colors';
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }

    styleTag.textContent = `
      body.theme-background-effects::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -2;
        background:
          radial-gradient(circle at 18% 20%, ${scheme.colors['--color-primary']}24 0%, transparent 55%),
          radial-gradient(circle at 78% 15%, ${scheme.colors['--color-accent']}18 0%, transparent 60%),
          radial-gradient(circle at 40% 75%, ${scheme.colors['--color-quaternary-bg']}14 0%, transparent 60%);
      }

      body.theme-background-effects::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        mix-blend-mode: lighten;
        background-image:
          radial-gradient(2px 2px at 24px 36px, ${scheme.colors['--color-primary']}30, transparent),
          radial-gradient(2px 2px at 72px 92px, ${scheme.colors['--color-accent']}28, transparent),
          radial-gradient(1px 1px at 128px 42px, ${scheme.colors['--color-border']}24, transparent);
        background-size: 280px 280px;
        animation: optimizedFloatParticles 22s linear infinite;
      }

      @keyframes optimizedFloatParticles {
        0% { transform: translate3d(0, 0, 0); }
        25% { transform: translate3d(-18px, -18px, 0); }
        50% { transform: translate3d(12px, -8px, 0); }
        75% { transform: translate3d(-14px, -28px, 0); }
        100% { transform: translate3d(0, 0, 0); }
      }
    `;
  }

  toggleEffect(effect) {
    this.effects[effect] = !this.effects[effect];

    switch(effect) {
      case 'particles':
        this.toggleParticles();
        break;
      case 'spotlight':
        this.toggleSpotlight();
        break;
    }

    // Save effect state
    localStorage.setItem('is-beauty-effects', JSON.stringify(this.effects));
  }

  toggleAnimations() {
    const body = document.body;
    if (body.classList.contains('animations-enabled')) {
      body.classList.remove('animations-enabled');
      const style = document.getElementById('disable-animations');
      if (style) style.remove();
    } else {
      body.classList.add('animations-enabled');
      const style = document.createElement('style');
      style.id = 'disable-animations';
      style.textContent = `
        .animations-enabled * {
          animation-duration: 0.3s !important;
          transition-duration: 0.3s !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  toggleLiquidGlass() {
    const body = document.body;
    if (body.classList.contains('liquid-glass-enabled')) {
      body.classList.remove('liquid-glass-enabled');
      const style = document.getElementById('liquid-glass-effects');
      if (style) style.remove();
    } else {
      body.classList.add('liquid-glass-enabled');
      const style = document.createElement('style');
      style.id = 'liquid-glass-effects';
      style.textContent = `
        /* Liquid Glass Effect - Applied ONLY to placeholders */
        .liquid-glass-enabled .placeholder-image {
          background: ${scheme.colors['--color-secondary-bg']} !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
        }

        /* Ensure text inside placeholders remains visible */
        .liquid-glass-enabled .placeholder-image h4,
        .liquid-glass-enabled .placeholder-image p {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 8px;
          padding: 0.5rem 1rem;
          margin: 0.25rem 0;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        /* Add toggle control for individual elements */
        .liquid-glass-enabled .media-block,
        .liquid-glass-enabled .image-block {
          position: relative;
        }

        .liquid-glass-enabled .media-block::after,
        .liquid-glass-enabled .image-block::after {
          content: '💎 Glass Effect';
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 10px;
          z-index: 10;
          opacity: 0.7;
        }
      `;
      document.head.appendChild(style);
    }
  }

  toggleParticles() {
    if (this.effects.particles) {
      this.createBeautyParticles();
    } else {
      this.removeParticles();
    }
  }

  createBeautyParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'beauty-particles-container';
    particlesContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    `;

    // Create professional beauty particles
    const particleTypes = ['✨', '💫', '⭐', '🌟', '💎', '🔮'];
    const colors = ['#bf8a7a', '#dab4a6', '#ece7d7', '#ffd700', '#ff69b4', '#87ceeb'];

    for (let i = 0; i < 25; i++) {
      const particle = document.createElement('div');
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.innerHTML = type;
      particle.style.cssText = `
        position: absolute;
        font-size: ${12 + Math.random() * 16}px;
        color: ${color};
        animation: beautyFloat ${4 + Math.random() * 6}s ease-in-out infinite;
        animation-delay: ${Math.random() * 3}s;
        opacity: 0.7;
        filter: drop-shadow(0 0 8px ${color}40);
        z-index: 0;
      `;

      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particlesContainer.appendChild(particle);
    }

    // Add professional CSS animations
    const style = document.createElement('style');
    style.id = 'beauty-particles-animations';
    style.textContent = `
      @keyframes beautyFloat {
        0% {
          transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
          opacity: 0.7;
        }
        25% {
          transform: translateY(-30px) translateX(15px) rotate(90deg) scale(1.1);
          opacity: 1;
        }
        50% {
          transform: translateY(-20px) translateX(-10px) rotate(180deg) scale(0.9);
          opacity: 0.8;
        }
        75% {
          transform: translateY(-40px) translateX(-20px) rotate(270deg) scale(1.05);
          opacity: 0.9;
        }
        100% {
          transform: translateY(0px) translateX(0px) rotate(360deg) scale(1);
          opacity: 0.7;
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(particlesContainer);
  }

  removeParticles() {
    const container = document.getElementById('beauty-particles-container');
    const style = document.getElementById('beauty-particles-animations');
    if (container) container.remove();
    if (style) style.remove();
  }

  toggleSpotlight() {
    if (this.effects.spotlight) {
      this.createSpotlightEffect();
    } else {
      this.removeSpotlightEffect();
    }
  }

  createSpotlightEffect() {
    const style = document.createElement('style');
    style.id = 'spotlight-effects';
    style.textContent = `
      .spotlight-enabled .product-card,
      .spotlight-enabled .card,
      .spotlight-enabled .testimonial,
      .spotlight-enabled .media-block,
      .spotlight-enabled .image-block {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }

      .spotlight-enabled .product-card::before,
      .spotlight-enabled .card::before,
      .spotlight-enabled .testimonial::before,
      .spotlight-enabled .media-block::before,
      .spotlight-enabled .image-block::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 30%, transparent 70%);
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
        z-index: 1;
      }

      .spotlight-enabled .product-card:hover::before,
      .spotlight-enabled .card:hover::before,
      .spotlight-enabled .testimonial:hover::before,
      .spotlight-enabled .media-block:hover::before,
      .spotlight-enabled .image-block:hover::before {
        opacity: 1;
      }

      .spotlight-enabled .product-card:hover,
      .spotlight-enabled .card:hover,
      .spotlight-enabled .testimonial:hover,
      .spotlight-enabled .media-block:hover,
      .spotlight-enabled .image-block:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.1);
      }
    `;
    document.head.appendChild(style);
    document.body.classList.add('spotlight-enabled');
  }

  removeSpotlightEffect() {
    const style = document.getElementById('spotlight-effects');
    if (style) style.remove();
    document.body.classList.remove('spotlight-enabled');
  }

  toggleShimmer() {
    if (this.effects.shimmer) {
      this.createShimmerEffect();
    } else {
      this.removeShimmerEffect();
    }
  }

  createShimmerEffect() {
    const style = document.createElement('style');
    style.id = 'shimmer-effects';
    style.textContent = `
      .shimmer-enabled button,
      .shimmer-enabled .btn,
      .shimmer-enabled .button {
        background: linear-gradient(45deg, var(--color-primary), #ffd700, var(--color-primary)) !important;
        background-size: 200% 200% !important;
        animation: shimmer 2s ease-in-out infinite !important;
      }

      .shimmer-enabled h1,
      .shimmer-enabled h2,
      .shimmer-enabled h3 {
        background: linear-gradient(45deg, var(--color-foreground), #ffd700, var(--color-foreground));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 3s ease-in-out infinite;
      }

      @keyframes shimmer {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    document.body.classList.add('shimmer-enabled');
  }

  removeShimmerEffect() {
    const style = document.getElementById('shimmer-effects');
    if (style) style.remove();
    document.body.classList.remove('shimmer-enabled');
  }

  loadSavedSettings() {
    // Load saved theme
    const savedScheme = localStorage.getItem('is-beauty-theme');
    if (savedScheme && this.colorSchemes[savedScheme]) {
      this.switchScheme(savedScheme);
    }

    // Load saved effects
    const savedEffects = localStorage.getItem('is-beauty-effects');
    if (savedEffects) {
      this.effects = JSON.parse(savedEffects);

      // Apply saved effects
      Object.entries(this.effects).forEach(([effect, enabled]) => {
        if (enabled) {
          const toggle = document.querySelector(`[data-effect="${effect}"]`);
          if (toggle) {
            toggle.checked = true;
            this.toggleEffect(effect);
          }
        }
      });
    }
  }
}

// Initialize when DOM is ready
let themeSwitcherInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  themeSwitcherInstance = new ThemeSwitcher();
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (themeSwitcherInstance) {
    themeSwitcherInstance.destroy();
    themeSwitcherInstance = null;
  }
});
