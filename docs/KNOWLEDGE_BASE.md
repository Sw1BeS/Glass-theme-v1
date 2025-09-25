# БАЗА ЗНАНИЙ - IS BEAUTY LUX SHOPIFY THEME

## 🚨 КРИТИЧЕСКИЕ ОШИБКИ И РЕШЕНИЯ

### 1. ДУБЛИРУЮЩИЕСЯ STYLESHEET ТЕГИ

**Ошибка:** `Liquid syntax error: Duplicate entries for tag: stylesheet`

**Причина:** В Shopify темах может быть только ОДИН тег `{% stylesheet %}` в каждом файле секции.

**Файлы с проблемой:**

- `sections/hero.liquid` (исправлено)
- `sections/media-with-content.liquid` (исправлено)
- `sections/how-to-use.liquid` (строка 899) - ТЕКУЩАЯ ПРОБЛЕМА

**Решение:**

1. Найти все stylesheet теги: `grep -n "stylesheet" filename.liquid`
2. Объединить CSS из всех блоков в один
3. Удалить дублирующиеся теги
4. Оставить только один `{% stylesheet %} ... {% endstylesheet %}`

**Проверка:** После исправления должно быть только 2 строки с "stylesheet" - начало и конец блока.

---

### 2. МОБИЛЬНЫЕ ИЗОБРАЖЕНИЯ НЕ ОТОБРАЖАЮТСЯ

**Проблема:** Мобильные изображения загружаются, но не отображаются на мобильных устройствах.

**Причина:** Отсутствует CSS для переключения desktop/mobile изображений.

**Решение:**

1. Добавить CSS в stylesheet блок:

```css
.image-desktop {
  display: block;
}
.image-mobile {
  display: none;
}

@media (max-width: 767px) {
  .image-desktop {
    display: none;
  }
  .image-mobile {
    display: block;
  }
}
```

2. Обернуть изображения в div с классами:

```html
<div class="image-desktop">
  <!-- Desktop image -->
</div>
<div class="image-mobile">
  <!-- Mobile image -->
</div>
```

---

### 3. СТРУКТУРА СЕКЦИЙ - MEDIA-WITH-CONTENT

**Проблема:** Использование `media-with-content` создает избыточную вложенность.

**Решение:** Создавать отдельные секции для каждого блока:

- `sections/s-vp1.liquid` - для Value Proposition 1
- `sections/s-vp2.liquid` - для Value Proposition 2
- `sections/s-vp3.liquid` - для Value Proposition 3

**Преимущества:**

- Соответствие OS 2.0
- Лучшая производительность
- Проще редактирование в Theme Editor

---

### 4. ЦВЕТОВЫЕ СХЕМЫ НЕ ПРИМЕНЯЮТСЯ

**Проблема:** Новые секции не поддерживают переключение цветовых схем.

**Решение:** Добавить стили в `assets/theme-switcher.js` в функцию `updateShopifyThemeColors()`:

```javascript
/* Section Name - Custom styling */
.section-class {
  background: ${scheme.colors['--color-background']} !important;
  color: ${scheme.colors['--color-foreground']} !important;
}
```

**Важно:** Всегда использовать `!important` для переопределения Shopify стилей.

---

### 5. ЗАГОЛОВКИ СЕКЦИЙ ПРОПАДАЮТ

**Проблема:** Заголовки секций не отображаются в Theme Editor.

**Причина:** Заголовки ищутся в блоках, которые могут отсутствовать.

**Решение:** Добавить fallback:

```liquid
{%- assign header_found = false -%}
{%- for block in section.blocks -%}
  {%- if block.type == 'section_header' -%}
    <h2>{{ block.settings.heading }}</h2>
    {%- assign header_found = true -%}
    {%- break -%}
  {%- endif -%}
{%- endfor -%}
{%- unless header_found -%}
  <h2>Default Heading</h2>
{%- endunless -%}
```

---

### 6. ОШИБКА ВАЛИДАЦИИ URL ПОЛЕЙ

**Ошибка:** `Invalid schema: setting with id="button_link" default must be a string or datasource access path`

**Причина:** Поля типа `url` в Shopify schema не поддерживают `default` значения с URL строками.

**Решение:** Использовать тип `text` вместо `url` для полей с default значениями:

```json
{
  "type": "text", // НЕ "url"
  "id": "button_link",
  "label": "Button Link",
  "default": "/products/the-duo"
}
```

**Проверка:** После исправления валидация должна пройти без ошибок.

---

## 📋 ЧЕКЛИСТ ПРОВЕРКИ

### Перед коммитом:

- [ ] Проверить дублирующиеся stylesheet теги
- [ ] Убедиться что мобильные изображения работают
- [ ] Проверить что цветовые схемы применяются
- [ ] Заголовки секций отображаются
- [ ] Запустить `shopify theme check --fail-level error`

### После изменений:

- [ ] Протестировать в Theme Editor
- [ ] Проверить мобильную версию
- [ ] Переключить все цветовые схемы
- [ ] Убедиться что все секции редактируемы

---

## 🔧 БЫСТРЫЕ ИСПРАВЛЕНИЯ

### Найти дублирующиеся stylesheet:

```bash
grep -n "stylesheet" sections/*.liquid
```

### Проверить валидацию:

```bash
shopify theme check --fail-level error
```

### Найти проблемные секции:

```bash
shopify theme check | grep "Duplicate entries"
```

---

## 📝 ИСТОРИЯ ИСПРАВЛЕНИЙ

- **2025-01-17**: Исправлены дублирующиеся stylesheet в hero.liquid и media-with-content.liquid
- **2025-01-17**: Добавлена поддержка мобильных изображений
- **2025-01-17**: Создана секция s-vp1.liquid вместо media-with-content
- **2025-01-17**: Добавлена поддержка цветовых схем для VP1
- **2025-01-17**: Исправлен пропавший заголовок в How to Use
- **2025-01-17**: Исправлена ошибка валидации URL полей в новых секциях

---

## ⚠️ ВАЖНЫЕ ПРИНЦИПЫ

1. **Один stylesheet на файл** - никогда не дублировать
2. **Мобильные изображения** - всегда добавлять CSS переключение
3. **Цветовые схемы** - добавлять стили в theme-switcher.js
4. **Fallback для заголовков** - всегда предусматривать запасной вариант
5. **Тестирование** - проверять все изменения в Theme Editor
