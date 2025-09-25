# Hero Section Implementation Prompt

## Glass Theme with Dynamic Color Switching

### Overview

This document provides comprehensive prompts for implementing a Hero section that integrates seamlessly with a glassmorphism design system and dynamic theme switching functionality. The implementation should follow Shopify OS 2.0 standards while maintaining full editability through the Theme Editor.

---

## 1. CORE STRUCTURE PROMPT

````
Create a Hero section for Shopify OS 2.0 that implements glassmorphism design principles with the following requirements:

STRUCTURE:
- Use a single container with class "hero-text glass" for the main content area
- Implement block-based architecture with 'text' and 'button' block types
- Ensure proper Liquid templating with section.blocks loop
- Include proper Shopify attributes for Theme Editor integration

HTML STRUCTURE:
```liquid
<div class="hero-content">
  <div class="hero-container">
    <div class="hero-text glass">
      {%- for block in section.blocks -%}
        {%- case block.type -%}
          {%- when 'text' -%}
            <div class="hero-text-block" {{ block.shopify_attributes }}>
              {{ block.settings.text }}
            </div>
          {%- when 'button' -%}
            {%- if block.settings.label != blank -%}
              <div class="hero-button-block" {{ block.shopify_attributes }}>
                <a href="{{ block.settings.link | default: '#' }}" class="hero-button">
                  {{ block.settings.label }}
                </a>
              </div>
            {%- endif -%}
        {%- endcase -%}
      {%- endfor -%}
    </div>
  </div>
</div>
````

REQUIREMENTS:

- Follow Shopify OS 2.0 block structure
- Ensure proper indentation and Liquid syntax
- Include fallback content for empty states
- Maintain accessibility standards

```

---

## 2. CSS STYLING PROMPT

```

Implement CSS styling for the Hero section that integrates with a glassmorphism design system and dynamic theme switching:

CORE STYLES:

```css
.hero-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
}

.hero-text {
  display: grid;
  gap: clamp(1.25rem, 3vw, 1.8rem);
  padding: clamp(1.8rem, 3.5vw, 2.4rem);
  border-radius: 22px;
  color: var(--glass-foreground-strong, var(--color-foreground, #2c2c2c));
  text-align: center;
  max-width: 600px;
  width: 100%;
}

.hero-text:not(.glass-surface) {
  background: var(--glass-surface-color, rgba(255, 255, 255, 0.78));
  border: 1px solid var(--glass-surface-border-color, rgba(255, 255, 255, 0.4));
  box-shadow: 0 16px 40px var(--glass-shadow-color, rgba(20, 26, 34, 0.12));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.hero-text.glass-surface {
  padding: clamp(1.8rem, 3.5vw, 2.4rem);
  border: none;
  box-shadow: none;
}
```

GLASS EFFECTS:

- Use CSS custom properties for dynamic theming
- Implement backdrop-filter for glassmorphism effect
- Include proper fallbacks for older browsers
- Ensure proper contrast and readability

TEXT STYLING:

```css
.hero-text-block h1,
.hero-text-block h2,
.hero-text-block h3,
.hero-text-block h4,
.hero-text-block h5,
.hero-text-block h6 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  margin: 0;
  color: var(--glass-foreground-strong, var(--color-foreground, #2c2c2c));
}

.hero-text-block p {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--glass-foreground-muted, var(--color-foreground, #2c2c2c));
  margin: 0;
}
```

BUTTON STYLING:

```css
.hero-button {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  color: var(--text-on-primary, #ffffff);
  background: linear-gradient(
    135deg,
    var(--glass-highlight-color, var(--color-primary, #bf8a7a)) 0%,
    var(--color-primary, #bf8a7a) 100%
  );
  border: 1px solid var(--glass-surface-border-color, rgba(255, 255, 255, 0.4));
  transition: all 0.3s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 48px color-mix(in srgb, var(
          --glass-highlight-color,
          var(--color-primary, #bf8a7a)
        ) 32%, transparent);
}
```

REQUIREMENTS:

- Use CSS custom properties for all colors
- Implement proper glassmorphism effects
- Ensure responsive design with clamp() functions
- Include hover states and transitions
- Maintain accessibility standards

```

---

## 3. SCHEMA CONFIGURATION PROMPT

```

Create a comprehensive schema for the Hero section that enables full customization through the Shopify Theme Editor:

SCHEMA STRUCTURE:

```json
{
  "name": "Hero",
  "tag": "section",
  "class": "hero-section",
  "settings": [
    {
      "type": "header",
      "content": "Background Images"
    },
    {
      "type": "image_picker",
      "id": "image_1",
      "label": "Desktop Background Image",
      "info": "Recommended size: 1920x1080px"
    },
    {
      "type": "image_picker",
      "id": "image_1_mobile",
      "label": "Mobile Background Image",
      "info": "Recommended size: 768x1024px"
    },
    {
      "type": "header",
      "content": "Layout Settings"
    },
    {
      "type": "select",
      "id": "section_width",
      "label": "Section Width",
      "options": [
        { "value": "full-width", "label": "Full Width" },
        { "value": "narrow", "label": "Narrow" }
      ],
      "default": "full-width"
    },
    {
      "type": "header",
      "content": "Theme Integration"
    },
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color Scheme",
      "default": "scheme-1"
    },
    {
      "type": "checkbox",
      "id": "enable_glass",
      "label": "Enable Glass Effect",
      "default": true
    },
    {
      "type": "select",
      "id": "glass_tone",
      "label": "Glass Tone",
      "options": [
        { "value": "auto", "label": "Auto" },
        { "value": "light", "label": "Light" },
        { "value": "dark", "label": "Dark" }
      ],
      "default": "auto"
    },
    {
      "type": "select",
      "id": "glass_elevation",
      "label": "Glass Elevation",
      "options": [
        { "value": "low", "label": "Low" },
        { "value": "medium", "label": "Medium" },
        { "value": "high", "label": "High" }
      ],
      "default": "medium"
    },
    {
      "type": "header",
      "content": "Spacing"
    },
    {
      "type": "range",
      "id": "padding-block-start",
      "label": "Top Padding",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "default": 0
    },
    {
      "type": "range",
      "id": "padding-block-end",
      "label": "Bottom Padding",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "default": 0
    }
  ],
  "blocks": [
    {
      "type": "text",
      "name": "Text",
      "settings": [
        {
          "type": "richtext",
          "id": "text",
          "label": "Text Content",
          "default": "<h1>Your Heading</h1><p>Your description text goes here.</p>"
        }
      ]
    },
    {
      "type": "button",
      "name": "Button",
      "settings": [
        {
          "type": "text",
          "id": "label",
          "label": "Button Text",
          "default": "Learn More"
        },
        {
          "type": "url",
          "id": "link",
          "label": "Button Link"
        },
        {
          "type": "checkbox",
          "id": "open_in_new_tab",
          "label": "Open in New Tab",
          "default": false
        }
      ]
    }
  ],
  "max_blocks": 10,
  "presets": [
    {
      "name": "Hero",
      "category": "Banners",
      "settings": {
        "section_width": "full-width",
        "color_scheme": "scheme-1",
        "enable_glass": true,
        "glass_tone": "auto",
        "glass_elevation": "medium",
        "padding-block-start": 0,
        "padding-block-end": 0
      },
      "blocks": {
        "text_1": {
          "type": "text",
          "settings": {
            "text": "<h1>The Perfect Brow Duo</h1>"
          }
        },
        "text_2": {
          "type": "text",
          "settings": {
            "text": "<p>Everything you need for flawless brows, every day.</p>"
          }
        },
        "button_1": {
          "type": "button",
          "settings": {
            "label": "Shop The Duo - $34.99",
            "link": "/products/the-duo",
            "open_in_new_tab": false
          }
        },
        "button_2": {
          "type": "button",
          "settings": {
            "label": "Learn How to Use",
            "link": "#shopify-section-how_to",
            "open_in_new_tab": false
          }
        }
      }
    }
  ]
}
```

REQUIREMENTS:

- Include comprehensive settings for customization
- Provide proper block types for content management
- Ensure Theme Editor compatibility
- Include helpful labels and descriptions
- Set appropriate defaults and limits

```

---

## 4. RESPONSIVE DESIGN PROMPT

```

Implement responsive design for the Hero section that works across all device sizes:

MOBILE FIRST APPROACH:

```css
/* Base styles for mobile */
.hero-container {
  padding: 1rem;
}

.hero-text,
.hero-text.glass-surface {
  padding: clamp(1.5rem, 5vw, 1.9rem);
}

.hero-text-block h1,
.hero-text-block h2,
.hero-text-block h3,
.hero-text-block h4,
.hero-text-block h5,
.hero-text-block h6 {
  font-size: clamp(1.8rem, 6vw, 2.5rem);
}

.hero-button-block {
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.hero-button {
  width: 100%;
  max-width: 280px;
  justify-content: center;
}
```

TABLET OPTIMIZATION:

```css
@media (min-width: 768px) {
  .hero-container {
    padding: 1.5rem;
  }

  .hero-text {
    max-width: 500px;
  }
}
```

DESKTOP ENHANCEMENTS:

```css
@media (min-width: 1024px) {
  .hero-container {
    padding: 2rem;
  }

  .hero-text {
    max-width: 600px;
  }

  .hero-button-block {
    flex-direction: row;
    justify-content: center;
  }
}
```

LARGE SCREEN OPTIMIZATION:

```css
@media (min-width: 1440px) {
  .hero-text {
    max-width: 700px;
  }
}
```

REQUIREMENTS:

- Use clamp() functions for fluid typography
- Implement proper breakpoints
- Ensure touch-friendly button sizes
- Maintain glass effects across all devices
- Optimize for performance

```

---

## 5. THEME INTEGRATION PROMPT

```

Integrate the Hero section with a dynamic theme switching system using CSS custom properties:

THEME VARIABLES INTEGRATION:

```css
/* Use theme-aware CSS custom properties */
.hero-text {
  color: var(--glass-foreground-strong, var(--color-foreground, #2c2c2c));
}

.hero-text:not(.glass-surface) {
  background: var(--glass-surface-color, rgba(255, 255, 255, 0.78));
  border: 1px solid var(--glass-surface-border-color, rgba(255, 255, 255, 0.4));
  box-shadow: 0 16px 40px var(--glass-shadow-color, rgba(20, 26, 34, 0.12));
}

.hero-button {
  background: linear-gradient(
    135deg,
    var(--glass-highlight-color, var(--color-primary, #bf8a7a)) 0%,
    var(--color-primary, #bf8a7a) 100%
  );
  border: 1px solid var(--glass-surface-border-color, rgba(255, 255, 255, 0.4));
}
```

JAVASCRIPT INTEGRATION:

```javascript
// Ensure theme switching works with Hero section
document.addEventListener('DOMContentLoaded', function () {
  // Apply theme variables to Hero section
  const heroSection = document.querySelector('.hero-section')
  if (heroSection) {
    // Theme switching will automatically apply CSS custom properties
    // No additional JavaScript needed for basic functionality
  }
})
```

LIQUID INTEGRATION:

```liquid
{% liquid
  assign glass_enabled = section.settings.enable_glass
  if glass_enabled == null
    assign glass_enabled = settings.enable_glass_effect
  endif
  assign glass_tone = section.settings.glass_tone | default: 'auto'
  assign glass_elevation = section.settings.glass_elevation | default: 'medium'
%}

<div class="section-background color-{{ section.settings.color_scheme }}"></div>
<div
  class="section section--{{ section.settings.section_width }} hero-section color-{{ section.settings.color_scheme }} spacing-style"
  {% if glass_enabled %}
    data-glass-tone="{{ glass_tone }}"
    data-glass-elevation="{{ glass_elevation }}"
  {% endif %}
>
```

REQUIREMENTS:

- Use CSS custom properties for all dynamic values
- Ensure compatibility with theme switching
- Include proper fallbacks
- Maintain performance
- Support all color schemes

```

---

## 6. ACCESSIBILITY PROMPT

```

Implement accessibility features for the Hero section following WCAG 2.1 AA standards:

SEMANTIC HTML:

```html
<section class="hero-section" role="banner" aria-label="Hero section">
  <div class="hero-content">
    <div class="hero-container">
      <div class="hero-text glass">
        <!-- Content blocks -->
      </div>
    </div>
  </div>
</section>
```

KEYBOARD NAVIGATION:

```css
.hero-button:focus {
  outline: 2px solid var(--glass-highlight-color, var(--color-primary, #bf8a7a));
  outline-offset: 2px;
}

.hero-button:focus-visible {
  outline: 2px solid var(--glass-highlight-color, var(--color-primary, #bf8a7a));
  outline-offset: 2px;
}
```

SCREEN READER SUPPORT:

```html
<!-- Add proper ARIA labels -->
<div class="hero-text glass" role="main" aria-label="Main content">
  <div class="hero-text-block" aria-live="polite">
    <h1>Your Heading</h1>
    <p>Your description</p>
  </div>
</div>
```

COLOR CONTRAST:

```css
/* Ensure sufficient contrast ratios */
.hero-text-block h1,
.hero-text-block h2,
.hero-text-block h3,
.hero-text-block h4,
.hero-text-block h5,
.hero-text-block h6 {
  color: var(--glass-foreground-strong, var(--color-foreground, #2c2c2c));
  /* Ensure 4.5:1 contrast ratio minimum */
}

.hero-text-block p {
  color: var(--glass-foreground-muted, var(--color-foreground, #2c2c2c));
  /* Ensure 3:1 contrast ratio minimum */
}
```

REQUIREMENTS:

- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Support screen readers
- Include focus indicators

```

---

## 7. PERFORMANCE OPTIMIZATION PROMPT

```

Optimize the Hero section for performance and Core Web Vitals:

CSS OPTIMIZATION:

```css
/* Use efficient selectors */
.hero-text {
  /* Avoid deep nesting */
}

/* Use transform instead of changing layout properties */
.hero-button:hover {
  transform: translateY(-2px);
  /* Instead of changing margin or padding */
}

/* Use will-change for animations */
.hero-button {
  will-change: transform;
}
```

IMAGE OPTIMIZATION:

```liquid
<!-- Use responsive images -->
{%- if section.settings.image_1 != blank -%}
  <div class="hero-image-desktop">
    {{
      section.settings.image_1
      | image_url: width: 1920
      | image_tag:
        loading: 'eager',
        sizes: '(min-width: 768px) 100vw, 0px',
        widths: '768, 1024, 1280, 1920',
        class: 'hero-bg-image'
    }}
  </div>
{%- endif -%}
```

CRITICAL CSS:

```css
/* Inline critical CSS for above-the-fold content */
.hero-section {
  position: relative;
  min-height: 100vh;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
}
```

LAZY LOADING:

```javascript
// Implement intersection observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
    }
  })
})

document.querySelectorAll('.hero-text-block').forEach((el) => {
  observer.observe(el)
})
```

REQUIREMENTS:

- Minimize CSS and JavaScript
- Optimize images
- Use efficient selectors
- Implement lazy loading
- Ensure fast loading times
- Meet Core Web Vitals standards

```

---

## 8. TESTING PROMPT

```

Create comprehensive testing procedures for the Hero section:

FUNCTIONAL TESTING:

1. Test all block types (text, button) in Theme Editor
2. Verify glass effects work with all color schemes
3. Test responsive behavior across devices
4. Verify theme switching functionality
5. Test accessibility features

BROWSER TESTING:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

DEVICE TESTING:

- Desktop (1920x1080, 1440x900, 1366x768)
- Tablet (768x1024, 1024x768)
- Mobile (375x667, 414x896, 360x640)

PERFORMANCE TESTING:

- Lighthouse audit
- Core Web Vitals measurement
- Image optimization verification
- CSS/JS minification check

ACCESSIBILITY TESTING:

- Screen reader testing
- Keyboard navigation testing
- Color contrast verification
- WCAG 2.1 AA compliance check

REQUIREMENTS:

- Document all test cases
- Create testing checklist
- Include performance benchmarks
- Verify cross-browser compatibility
- Ensure accessibility compliance

```

---

## 9. MAINTENANCE PROMPT

```

Create maintenance guidelines for the Hero section:

CODE ORGANIZATION:

- Keep CSS organized by feature
- Use consistent naming conventions
- Include comprehensive comments
- Maintain proper indentation

VERSION CONTROL:

- Use semantic versioning
- Document all changes
- Include migration guides
- Maintain backward compatibility

UPDATES:

- Regular security updates
- Performance optimizations
- Accessibility improvements
- Browser compatibility updates

DOCUMENTATION:

- Keep implementation guide updated
- Document all customization options
- Include troubleshooting guide
- Maintain changelog

REQUIREMENTS:

- Follow coding standards
- Maintain documentation
- Plan for updates
- Ensure scalability

```

---

## 10. ADVANCED FEATURES PROMPT

```

Implement advanced features for the Hero section:

ANIMATIONS:

```css
/* Subtle entrance animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-text-block {
  animation: fadeInUp 0.6s ease-out;
}

.hero-button-block {
  animation: fadeInUp 0.8s ease-out;
}
```

INTERACTIVE EFFECTS:

```css
/* Hover effects for glass elements */
.hero-text:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 50px var(--glass-shadow-color, rgba(20, 26, 34, 0.15));
}

/* Spotlight effect */
.hero-text::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hero-text:hover::before {
  opacity: 1;
}
```

CUSTOMIZATION OPTIONS:

```json
{
  "type": "select",
  "id": "animation_style",
  "label": "Animation Style",
  "options": [
    { "value": "none", "label": "None" },
    { "value": "fade", "label": "Fade In" },
    { "value": "slide", "label": "Slide Up" },
    { "value": "scale", "label": "Scale In" }
  ],
  "default": "fade"
}
```

REQUIREMENTS:

- Implement smooth animations
- Add interactive effects
- Provide customization options
- Maintain performance
- Ensure accessibility

```

---

## IMPLEMENTATION CHECKLIST

### Phase 1: Core Structure
- [ ] Create basic HTML structure
- [ ] Implement block-based architecture
- [ ] Add proper Liquid templating
- [ ] Include Shopify attributes

### Phase 2: Styling
- [ ] Implement glassmorphism effects
- [ ] Add responsive design
- [ ] Include theme integration
- [ ] Ensure accessibility

### Phase 3: Schema
- [ ] Create comprehensive schema
- [ ] Add all necessary settings
- [ ] Include proper presets
- [ ] Test Theme Editor integration

### Phase 4: Testing
- [ ] Cross-browser testing
- [ ] Device testing
- [ ] Performance testing
- [ ] Accessibility testing

### Phase 5: Optimization
- [ ] Performance optimization
- [ ] Code minification
- [ ] Image optimization
- [ ] Final testing

### Phase 6: Documentation
- [ ] Implementation guide
- [ ] Customization options
- [ ] Troubleshooting guide
- [ ] Maintenance procedures

---

## CONCLUSION

This comprehensive prompt set provides everything needed to implement a professional Hero section that integrates seamlessly with a glassmorphism design system and dynamic theme switching. Follow the prompts in order, and ensure each phase is completed before moving to the next.

The implementation should result in a fully customizable, accessible, and performant Hero section that enhances the overall user experience while maintaining the highest standards of code quality and design consistency.
```
