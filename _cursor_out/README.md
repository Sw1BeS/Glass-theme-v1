# IS BEAUTY LUX - SHOPIFY THEME SETUP

## Research & Prep Phase (Agent 1) - COMPLETED

### 📋 Обзор проекта

Подготовка темы Shopify "Pitch" для IS Beauty Lux с фокусом на продажу 2 SKU и 1 Bundle:

- **Brow & Lash Shampoo** ($21)
- **Eyebrow Gel** ($17)
- **The Duo Bundle** ($34.99) — PRIMARY OFFER

### 🎯 Ключевые задачи Agent 1

✅ **COMPLETED**: Полный research & prep для передачи Agent 2

1. **Market Research** - анализ 15 конкурентов в 2 категориях
2. **Content Strategy** - копирайт под формат "2 SKU + Bundle + Founder"
3. **Technical Spec** - mapping темы Pitch и создание JSON каркасов
4. **Brand Integration** - извлечение брендинга из Brand Book
5. **Media Planning** - манифест медиа и создание плейсхолдеров

### 📁 Структура deliverables

```
_cursor_out/
├── README.md                          # Этот файл
├── docs/                              # Документация и research
│   ├── 00_intake.md                   # Инвентаризация входных данных
│   ├── 01_site_audit.md               # Анализ текущего сайта
│   ├── 02_market_competitors.csv      # Таблица конкурентов
│   ├── 03_market_insights.md          # Рыночные инсайты
│   ├── 04_brand_summary.md            # Брендинг из Brand Book
│   ├── 05_theme_map.md                # Техническая спецификация Pitch
│   ├── 06_content_copy_en.md          # Финальный копирайт Home
│   ├── 07_media_manifest.csv         # Список медиа и размеров
│   ├── 08_nav_footer.yaml             # Структура навигации
│   ├── 09_b2b_page_copy_en.md         # Копирайт B2B страницы
│   ├── 10_work_plan.md                # План работы и риски
│   ├── 11_cloud_agent_prompt.md       # 🎯 ИНСТРУКЦИИ ДЛЯ AGENT 2
│   ├── 12_acceptance_checklist.md     # Критерии приёмки
│   └── citations.md                   # Все использованные источники
├── theme/                             # JSON каркасы для имплементации
│   ├── index.template.json            # Каркас главной страницы
│   ├── page.b2b.template.json         # Каркас B2B страницы
│   └── settings.changes.yaml          # Настройки темы
├── backups/                           # Backup плейсхолдеры
│   ├── index.json.backup              # Для сохранения текущего index.json
│   └── settings_data.json.backup      # Для сохранения настроек
└── assets/placeholders/               # PNG плейсхолдеры с размерами
    ├── hero_desktop_1920x1080.png     # Hero desktop
    ├── hero_mobile_1080x1350.png      # Hero mobile
    ├── product_1500x1500.png          # Продуктовые изображения
    ├── banner_1500x900.png            # Баннеры
    └── founder_1200x1500.png          # Фото основателя
```

### 🚀 Следующие шаги для Agent 2

**КРИТИЧНО**: Используй `docs/11_cloud_agent_prompt.md` как единственный источник инструкций.

#### Основные задачи:

1. **Map & Populate** - перенести каркасы в реальные Shopify JSON
2. **Apply Settings** - обновить theme settings брендинговыми цветами
3. **Configure Navigation** - упростить до "Home | Buy The Duo"
4. **Assign Media** - назначить изображения и alt текст
5. **Validate** - проверить JSON валидность и лимиты

#### Ограничения:

- ❌ **NO Liquid/JS/CSS edits** - только JSON и настройки
- ❌ **NO new products/collections** - используй существующие
- ❌ **NO new sections** - только встроенные в Pitch
- ✅ **USE generic mapping** - следуй theme_map.md

### 📊 Key Metrics & Success Criteria

#### Content Focus

- ✅ **Primary Offer**: The Duo ($34.99) выделен на всех страницах
- ✅ **Navigation**: Упрощён до 2 пунктов в header
- ✅ **CTA Strategy**: Все primary CTA → `/products/the-duo`
- ✅ **Trust Building**: Founder story + testimonials интегрированы

#### Technical Compliance

- ✅ **JSON Limits**: ≤25 секций/страница, ≤50 блоков/секцию
- ✅ **Theme Compatibility**: Все секции существуют в Pitch
- ✅ **Brand Integration**: Цветовая палитра из Brand Book
- ✅ **Mobile Optimization**: Responsive design + sticky CTA

### 💡 Research Highlights

#### Market Position

- **USP**: "Cleanse → Better Gel Grip → Consistent Results"
- **Target**: Busy professionals seeking gentle, effective brow care
- **Differentiator**: System approach vs individual products

#### Competitive Advantage

- **Pricing**: Premium quality at mid-range price ($34.99 vs $38 individual)
- **Safety**: Gentle for sensitive eye area + lash extensions
- **Convenience**: 3-step routine, professional results at home

#### Content Strategy

- **Tone**: Friendly but professional, educational approach
- **Focus**: System benefits, ingredient transparency, founder authenticity
- **Compliance**: No growth/medical claims, realistic expectations

### ⚠️ Important Notes

#### For Agent 2:

1. **Read 11_cloud_agent_prompt.md FIRST** - содержит все технические детали
2. **Use theme_map.md** для правильного mapping секций
3. **Follow media_manifest.csv** для изображений и alt текстов
4. **Backup files** перед любыми изменениями
5. **Validate JSON** перед финализацией

#### Brand Guidelines:

- **Colors**: Warm beige (#F8F6F3), Gold (#D4AF37), Dark gray (#2C2C2C)
- **Typography**: System Sans Serif for consistency
- **Imagery**: Clean, minimal, focus on eye area safety
- **Messaging**: Educational, gentle, professional quality

---

## 🎯 READY FOR AGENT 2

Все материалы подготовлены для имплементации. Agent 2 может начинать работу с `docs/11_cloud_agent_prompt.md`.

**Estimated completion time for Agent 2**: 1-2 hours
**Total project time**: 3-5 hours

---

_Agent 1 Phase completed: 2025-09-15_
