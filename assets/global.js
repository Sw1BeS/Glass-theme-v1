/**
 * IS BEAUTY LUX - Clean Global JavaScript
 * Основные функции для работы темы
 */

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', function() {
  // Инициализация всех компонентов
  initCart();
  initForms();
  initNavigation();
});

// Функция инициализации корзины
function initCart() {
  // Обновление счетчика корзины
  function updateCartCount() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
          cartCount.textContent = cart.item_count;
        }
      })
      .catch(error => console.error('Error updating cart count:', error));
  }

  // Обновляем счетчик при загрузке
  updateCartCount();

  // Обновляем счетчик при изменении корзины
  document.addEventListener('cart:updated', updateCartCount);
}

// Функция инициализации форм
function initForms() {
  // Обработка форм добавления в корзину
  const addToCartForms = document.querySelectorAll('form[action*="/cart/add"]');

  addToCartForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(form);
      const productId = formData.get('id');
      const quantity = formData.get('quantity') || 1;

      // Добавляем товар в корзину
      fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: productId,
          quantity: parseInt(quantity)
        })
      })
      .then(response => response.json())
      .then(data => {
        // Обновляем счетчик корзины
        const event = new CustomEvent('cart:updated');
        document.dispatchEvent(event);

        // Показываем уведомление
        showNotification('Product added to cart!');
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
        showNotification('Error adding product to cart', 'error');
      });
    });
  });
}

// Функция инициализации навигации
function initNavigation() {
  // Мобильное меню
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  }
}

// Функция показа уведомлений
function showNotification(message, type = 'success') {
  // Создаем элемент уведомления
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;

  // Добавляем стили
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-primary);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 1000;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
  `;

  // Добавляем в DOM
  document.body.appendChild(notification);

  // Анимация появления
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 100);

  // Удаляем через 3 секунды
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Функция для работы с URL
function updateURL(params) {
  const url = new URL(window.location);
  Object.keys(params).forEach(key => {
    if (params[key]) {
      url.searchParams.set(key, params[key]);
    } else {
      url.searchParams.delete(key);
    }
  });
  window.history.replaceState({}, '', url);
}

// Функция для получения параметров URL
function getURLParams() {
  const url = new URL(window.location);
  const params = {};
  url.searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

// Экспортируем функции для использования в других файлах
window.ISBeautyLux = {
  showNotification,
  updateURL,
  getURLParams
};
