// Adaptive Tooltips System for IS Beauty Lux
class AdaptiveTooltips {
  constructor() {
    this.init();
  }

  init() {
    // Ждем загрузки DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupTooltips());
    } else {
      this.setupTooltips();
    }
  }

  setupTooltips() {
    const hoverPoints = document.querySelectorAll('.premium-hover-point');

    hoverPoints.forEach(point => {
      const tooltip = point.querySelector('.premium-tooltip');
      if (!tooltip) return;

      // Добавляем обработчики событий
      point.addEventListener('mouseenter', () => this.showTooltip(point, tooltip));
      point.addEventListener('mouseleave', () => this.hideTooltip(tooltip));

      // Для мобильных устройств - клик вместо hover
      if (this.isMobile()) {
        point.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleTooltip(point, tooltip);
        });
      }
    });

    // Закрытие tooltip при клике вне его на мобильных
    if (this.isMobile()) {
      document.addEventListener('click', (e) => {
        const tooltips = document.querySelectorAll('.premium-tooltip');
        tooltips.forEach(tooltip => {
          if (!tooltip.contains(e.target) && !tooltip.closest('.premium-hover-point').contains(e.target)) {
            this.hideTooltip(tooltip);
          }
        });
      });
    }
  }

  showTooltip(point, tooltip) {
    // Сначала показываем tooltip, чтобы получить его размеры
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '0';

    // Вычисляем оптимальную позицию
    this.calculatePosition(point, tooltip);

    // Плавно показываем
    setTimeout(() => {
      tooltip.style.opacity = '1';
    }, 10);
  }

  hideTooltip(tooltip) {
    tooltip.style.opacity = '0';
    setTimeout(() => {
      tooltip.style.visibility = 'hidden';
      tooltip.classList.remove('tooltip-left', 'tooltip-right', 'tooltip-bottom');
    }, 300);
  }

  toggleTooltip(point, tooltip) {
    const isVisible = tooltip.style.visibility === 'visible' && tooltip.style.opacity === '1';

    if (isVisible) {
      this.hideTooltip(tooltip);
    } else {
      // Скрываем все другие tooltip
      document.querySelectorAll('.premium-tooltip').forEach(t => {
        if (t !== tooltip) this.hideTooltip(t);
      });
      this.showTooltip(point, tooltip);
    }
  }

  calculatePosition(point, tooltip) {
    // Для мобильных устройств используем центральную позицию
    if (this.isMobile()) {
      tooltip.classList.remove('tooltip-left', 'tooltip-right', 'tooltip-bottom');
      return;
    }

    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    const pointRect = point.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    // Сбрасываем все классы позиционирования
    tooltip.classList.remove('tooltip-left', 'tooltip-right', 'tooltip-bottom');

    // Проверяем, поместится ли tooltip сверху (стандартная позиция)
    const spaceTop = pointRect.top;
    const spaceBottom = viewport.height - pointRect.bottom;
    const spaceLeft = pointRect.left;
    const spaceRight = viewport.width - pointRect.right;

    // Размеры tooltip
    const tooltipHeight = 200; // Примерная высота
    const tooltipWidth = 280;

    // Определяем оптимальную позицию
    if (spaceTop >= tooltipHeight + 20) {
      // Стандартная позиция сверху
      if (pointRect.left + tooltipWidth / 2 > viewport.width) {
        // Слишком близко к правому краю - сдвигаем влево
        tooltip.style.left = `${viewport.width - tooltipWidth - 20}px`;
        tooltip.style.transform = 'none';
      } else if (pointRect.left - tooltipWidth / 2 < 0) {
        // Слишком близко к левому краю - сдвигаем вправо
        tooltip.style.left = '20px';
        tooltip.style.transform = 'none';
      }
    } else if (spaceBottom >= tooltipHeight + 20) {
      // Позиция снизу
      tooltip.classList.add('tooltip-bottom');
    } else if (spaceRight >= tooltipWidth + 20) {
      // Позиция справа
      tooltip.classList.add('tooltip-right');
    } else if (spaceLeft >= tooltipWidth + 20) {
      // Позиция слева
      tooltip.classList.add('tooltip-left');
    } else {
      // Если места мало, используем фиксированную позицию в центре
      tooltip.style.position = 'fixed';
      tooltip.style.top = '50%';
      tooltip.style.left = '50%';
      tooltip.style.transform = 'translate(-50%, -50%)';
      tooltip.style.zIndex = '10000';
    }
  }

  isMobile() {
    return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // Метод для обновления позиций при изменении размера окна
  handleResize() {
    const visibleTooltips = document.querySelectorAll('.premium-tooltip[style*="visible"]');
    visibleTooltips.forEach(tooltip => {
      const point = tooltip.closest('.premium-hover-point');
      if (point) {
        this.calculatePosition(point, tooltip);
      }
    });
  }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const adaptiveTooltips = new AdaptiveTooltips();

  // Обновляем позиции при изменении размера окна
  window.addEventListener('resize', () => {
    adaptiveTooltips.handleResize();
  });
});

// Экспортируем класс для возможного использования
window.AdaptiveTooltips = AdaptiveTooltips;
