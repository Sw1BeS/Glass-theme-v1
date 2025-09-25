# ACCEPTANCE CHECKLIST

## Критерии приёмки проекта

### ✅ КОНТЕНТНЫЕ ТРЕБОВАНИЯ

#### Home Page Content

- [ ] **Только 2 SKU + Bundle**: Весь контент фокусируется на Shampoo ($21), Gel ($17), и The Duo ($34.99)
- [ ] **Primary CTA**: Все основные кнопки ведут на `/products/the-duo`
- [ ] **Secondary CTA**: Ссылка "Learn How to Use" ведёт на `#how-to`
- [ ] **Hero секция**: Заголовок "The Perfect Brow Duo", цена $34.99 с экономией
- [ ] **Featured Product**: The Duo с dynamic checkout ON, quantity selector OFF
- [ ] **Value Props**: 3 секции (gentle eye area, flexible hold, 3-step routine)
- [ ] **Why the Duo**: Объяснение синергии продуктов
- [ ] **How to Use**: 3 шага с anchor id="how-to"
- [ ] **Ingredients**: 4 ключевых компонента
- [ ] **Founder Story**: История Sarah с фото
- [ ] **Testimonials**: 6 отзывов без цифр
- [ ] **Mini-FAQ**: 6 вопросов (extensions, sensitive skin, frequency, makeup, flaking, timeline)
- [ ] **Trust Strip**: "30-day money-back guarantee • Free shipping on $50+"
- [ ] **Product Grid**: РОВНО 3 карточки (Shampoo, Gel, Duo)

#### Navigation Structure

- [ ] **Header**: Только "Home" и "Buy The Duo"
- [ ] **Footer Support**: FAQ, Order Tracking, Contact Us, Our Story
- [ ] **Footer Policies**: Shipping, Returns, Privacy, Terms
- [ ] **Social Links**: Instagram и TikTok в футере

#### B2B Page Content

- [ ] **Hero**: Professional positioning для салонов
- [ ] **Value Props**: 3 преимущества (revenue, safety, integration)
- [ ] **How it Works**: 3 шага (apply, verify, order)
- [ ] **Pricing Tiers**: Таблица с 3 уровнями скидок
- [ ] **FAQ**: 4 вопроса для профессионалов
- [ ] **Contact CTA**: Email и телефон плейсхолдеры

### ✅ ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ

#### JSON Validity & Limits

- [ ] **index.json**: Валидный JSON, ≤25 секций
- [ ] **page.b2b.json**: Валидный JSON, ≤25 секций
- [ ] **Блоки**: ≤50 блоков на любую секцию
- [ ] **Синтаксис**: Нет синтаксических ошибок в JSON

#### Theme Settings

- [ ] **Цвета**: Применена брендинговая палитра (бежевый, золотой, серый)
- [ ] **Логотип**: Основной и инвертированный варианты
- [ ] **Типографика**: System Sans Serif для консистентности
- [ ] **Header**: Search и account отключены
- [ ] **Cart**: Drawer включён
- [ ] **Mobile**: Sticky add-to-cart включён

#### Media & Assets

- [ ] **Alt текст**: Все изображения имеют описательный alt
- [ ] **Плейсхолдеры**: Используются где нет финальных медиа
- [ ] **Размеры**: Соответствуют media_manifest.csv
- [ ] **Оптимизация**: Lazy loading включён

### ✅ UX/UI ТРЕБОВАНИЯ

#### User Experience

- [ ] **Primary flow**: Home → Hero → Featured Product → Checkout
- [ ] **Secondary flow**: Home → How to Use → Featured Product
- [ ] **Mobile UX**: Sticky add-to-cart работает
- [ ] **Navigation**: Интуитивно понятная структура

#### Conversion Optimization

- [ ] **Dynamic checkout**: Включён для The Duo
- [ ] **Quantity selector**: Отключён для упрощения
- [ ] **Trust signals**: Видны на всех ключевых страницах
- [ ] **CTA placement**: Логичное размещение кнопок

### ✅ КОНТЕНТНЫЕ ОГРАНИЧЕНИЯ

#### Compliance

- [ ] **Нет growth claims**: Отсутствуют обещания роста ресниц/бровей
- [ ] **Нет medical claims**: Отсутствуют медицинские заявления
- [ ] **Нет цифр**: Отсутствуют непроверяемые проценты и статистика
- [ ] **Gentle positioning**: Акцент на безопасности для глаз

#### Brand Consistency

- [ ] **Тон**: Friendly but professional
- [ ] **Terminology**: Консистентное использование терминов
- [ ] **Value prop**: Системный подход (2 продукта лучше чем по отдельности)

### ✅ ТЕХНИЧЕСКИЕ ОГРАНИЧЕНИЯ

#### File Management

- [ ] **Исходники не изменены**: Файлы в WORKDIR остались нетронутыми
- [ ] **OUTPUT_ROOT**: Все артефакты в `_cursor_out/`
- [ ] **Backups**: Созданы backup файлы перед изменениями
- [ ] **No new products**: Не созданы новые товары/коллекции

#### Performance

- [ ] **Render speed**: Страницы загружаются без задержек
- [ ] **JSON size**: settings_data.json разумного размера
- [ ] **Image optimization**: Плейсхолдеры оптимизированы

### ✅ FINAL VALIDATION

#### Functional Testing

- [ ] **Homepage renders**: Главная страница отображается корректно
- [ ] **B2B page renders**: B2B страница отображается корректно
- [ ] **Navigation works**: Все ссылки функциональны
- [ ] **Cart functionality**: Добавление в корзину работает
- [ ] **Mobile responsive**: Корректное отображение на мобильных

#### Content Review

- [ ] **Copy accuracy**: Весь текст соответствует техзаданию
- [ ] **Link integrity**: Все ссылки ведут в правильные места
- [ ] **Image placement**: Медиа размещены в правильных секциях
- [ ] **Brand alignment**: Визуал соответствует брендбуку

#### Business Logic

- [ ] **Primary offer prominence**: The Duo выделен как главное предложение
- [ ] **Bundle value**: Понятна экономия при покупке комплекта
- [ ] **Trust building**: Founder story и testimonials на месте
- [ ] **Professional pathway**: B2B страница доступна и информативна

## SIGN-OFF CRITERIA

### ✅ MANDATORY (блокирующие)

- Все Primary CTA ведут на `/products/the-duo`
- Header содержит только "Home | Buy The Duo"
- JSON файлы валидны и не превышают лимиты
- Нет новых продуктов/коллекций в системе

### ⚠️ IMPORTANT (желательные)

- Все плейсхолдеры имеют правильные размеры
- Брендинговые цвета применены корректно
- Mobile UX оптимизирован
- Trust signals видны и понятны

### 📋 NICE-TO-HAVE (опциональные)

- Анимации и переходы работают плавно
- SEO метатеги оптимизированы
- Социальные ссылки активны
- Email signup форма функциональна

---

## FINAL APPROVAL

**Проект готов к запуску когда:**

1. ✅ Все MANDATORY критерии выполнены
2. ✅ Минимум 80% IMPORTANT критериев выполнены
3. ✅ Нет критических багов или ошибок
4. ✅ Mobile и desktop версии работают корректно

**Подпись**: ********\_\_\_********
**Дата**: **********\_**********
**Комментарии**: ******\_\_\_******

---

_Checklist создан: 2025-09-15_
