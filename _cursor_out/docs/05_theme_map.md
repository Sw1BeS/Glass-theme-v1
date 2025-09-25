# THEME MAP: Pitch Theme Structure

## Доступные секции в теме Pitch

### Основные секции (по файлам в /sections/)

1. **hero.liquid** - Главный баннер/герой секция
2. **slideshow.liquid** - Слайдшоу/карусель изображений
3. **featured-product.liquid** - Рекомендуемый продукт
4. **media-with-content.liquid** - Медиа с текстом
5. **product-list.liquid** - Список продуктов/коллекция
6. **section.liquid** - Универсальная кастомная секция
7. **marquee.liquid** - Бегущая строка
8. **divider.liquid** - Разделитель
9. **custom-liquid.liquid** - Кастомный Liquid код
10. **collection-links.liquid** - Ссылки на коллекции
11. **collection-list.liquid** - Список коллекций
12. **featured-blog-posts.liquid** - Рекомендуемые посты блога
13. **product-recommendations.liquid** - Рекомендации продуктов

### Специальные секции

- **header.liquid** + **header-group.json** - Шапка сайта
- **footer.liquid** + **footer-group.json** - Подвал сайта
- **header-announcements.liquid** - Объявления в шапке

### Служебные секции

- **main-\*.liquid** - Основные шаблоны страниц
- **predictive-search.liquid** - Поиск с подсказками
- **search-\*.liquid** - Поисковые секции
- **password.liquid** - Страница с паролем

## Mapping к каноническим секциям Shopify

| Pitch секция                 | Shopify каноническая  | Применение                              |
| ---------------------------- | --------------------- | --------------------------------------- |
| `hero.liquid`                | `image-banner`        | Главный баннер с изображением и текстом |
| `slideshow.liquid`           | `slideshow`           | Карусель изображений/баннеров           |
| `featured-product.liquid`    | `featured-product`    | Выделенный продукт с кнопкой покупки    |
| `media-with-content.liquid`  | `image-with-text`     | Изображение рядом с текстовым контентом |
| `product-list.liquid`        | `featured-collection` | Сетка продуктов из коллекции            |
| `section.liquid`             | `multicolumn`         | Универсальная секция с колонками        |
| `marquee.liquid`             | `rich-text`           | Текстовый контент (альтернатива)        |
| `divider.liquid`             | -                     | Визуальный разделитель                  |
| `custom-liquid.liquid`       | -                     | Кастомный код                           |
| `collection-links.liquid`    | `multicolumn`         | Ссылки в виде колонок                   |
| `featured-blog-posts.liquid` | `rich-text`           | Текстовые блоки (альтернатива)          |

## Анализ возможностей по секциям

### ✅ Доступно для Home страницы

- **Hero** - идеально для primary offer "The Duo"
- **Featured Product** - прямое отображение The Duo с checkout
- **Media with Content** - для value propositions и founder story
- **Product List** - для отображения всех 3 продуктов
- **Section** - универсальная для FAQ, testimonials
- **Divider** - для визуального разделения блоков

### ⚠️ Ограниченно доступно

- **Slideshow** - может использоваться для UGC/testimonials
- **Marquee** - для trust signals или объявлений
- **Custom Liquid** - для специфических потребностей

### ❌ Недоступно на Home (стандартные Shopify)

- `testimonials` - НЕТ прямого аналога
  - **Замена**: `section.liquid` с кастомными блоками
- `collapsible-content` - НЕТ прямого аналога
  - **Замена**: `section.liquid` с аккордеон-блоками
- `email-signup` - НЕТ прямого аналога
  - **Замена**: `custom-liquid.liquid` или `section.liquid`
- `product-grid` vs `product-list` - разные подходы к отображению

## Рекомендуемая структура для Home

### Приоритетная последовательность секций:

1. **Hero** (`hero.liquid`) - The Duo primary offer
2. **Featured Product** (`featured-product.liquid`) - The Duo с dynamic checkout
3. **Media with Content** (`media-with-content.liquid`) - Value props ×3
4. **Media with Content** (`media-with-content.liquid`) - Why the Duo
5. **Section** (`section.liquid`) - How to use ×3 steps
6. **Section** (`section.liquid`) - Ingredients highlights ×4
7. **Media with Content** (`media-with-content.liquid`) - Founder story
8. **Section** (`section.liquid`) - Testimonials/UGC ×6
9. **Section** (`section.liquid`) - Mini-FAQ ×6
10. **Divider** (`divider.liquid`) - Trust strip separator
11. **Product List** (`product-list.liquid`) - 3 продукта

### Лимиты соблюдения

- **≤25 секций на страницу** ✅ (11 секций)
- **≤50 блоков на секцию** ✅ (будет соблюдено)

## Особенности темы Pitch

### Сильные стороны

- **Гибкая `section.liquid`** - универсальная секция для любого контента
- **Качественная `media-with-content.liquid`** - идеально для storytelling
- **Встроенная `featured-product.liquid`** - готова для bundle promotion
- **Responsive design** - все секции адаптивные

### Ограничения

- **Нет встроенных testimonials** - нужно использовать `section.liquid`
- **Нет collapsible FAQ** - нужно кастомизировать
- **Ограниченные blog возможности** - не критично для нашего случая

### Workarounds

1. **Testimonials** → `section.liquid` с text блоками
2. **FAQ** → `section.liquid` с аккордеон-стилем
3. **Email signup** → `custom-liquid.liquid` с Shopify формой
4. **Trust badges** → `marquee.liquid` или `section.liquid`

## Настройки темы (из settings_schema.json)

### Доступные цветовые схемы

- **Color schemes** - группы цветов для секций
- **Primary/Secondary buttons** - настройка кнопок
- **Input fields** - поля форм

### Типографика

- **Font settings** - настройка шрифтов
- **Size controls** - размеры текста

### Layout опции

- **Section width** - ширина секций
- **Spacing** - отступы между элементами
- **Border radius** - скругление углов

## Выводы и рекомендации

### ✅ Тема Pitch подходит для проекта

- Все необходимые секции доступны или имеют адекватные замены
- Гибкая `section.liquid` покрывает специфические потребности
- Лимиты Shopify OS 2.0 легко соблюдаются

### 🎯 Ключевые секции для использования

1. **Hero** - для primary offer
2. **Featured Product** - для bundle checkout
3. **Media with Content** - для storytelling
4. **Section** - для FAQ, testimonials, ingredients

### ⚡ Приоритетные настройки

- Цветовая схема под бренд (золотой + бежевый)
- Typography для читаемости
- Button styles для конверсии

---

_Анализ темы Pitch: 2025-09-15_
