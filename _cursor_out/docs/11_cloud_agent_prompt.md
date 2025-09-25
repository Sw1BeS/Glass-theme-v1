ROLE: Shopify Theme Populator for 'Pitch'. Work ONLY via theme settings and JSON templates. No Liquid/JS/CSS edits.

INPUTS:

- docs/05_theme_map.md (actual Pitch sections)
- docs/06_content_copy_en.md (final copy for Home)
- docs/09_b2b_page_copy_en.md (final copy for B2B page)
- docs/07_media_manifest.csv (images, alts, sizes, stock refs)
- docs/08_nav_footer.yaml (navigation/footer model)
- theme/index.template.json (Home skeleton)
- theme/page.b2b.template.json (B2B skeleton)
- theme/settings.changes.yaml (theme settings to apply)

TASKS:

1. Map generic sections in _index.template.json_ and _page.b2b.template.json_ to the closest built-in Pitch sections from _05_theme_map.md_. Не придумывай новые секции.
2. Populate _/templates/index.json_ (Home) и _/templates/page.b2b.json_ только контентом для двух товаров и бандла. Соблюдай лимиты JSON (<=25 секций, <=50 блоков/секцию).
3. Apply _settings.changes.yaml_ → _/config/settings_data.json_ (держи разумный размер файла).
4. Header: "Home" и "Buy The Duo". Перенеси FAQ/Tracking/Policies в footer по _08_nav_footer.yaml_.
5. Primary CTA в Home Hero → "/products/the-duo"; Secondary → "#how-to".
6. Featured product: product="the-duo"; dynamic checkout ON; qty selector OFF (если доступно).
7. Назначь изображения и alt из _07_media_manifest.csv_. Где ассетов нет — используй placeholders с указанными размерами.
8. Не создавай новых товаров/коллекций/блогов. Используй только два продукта и бандл с текущего сайта.

RETURN:

- Финальные _/templates/index.json_, _/templates/page.b2b.json_,
- Обновлённый _/config/settings_data.json_,
- Краткий diff-summary (изменённые ключи),
- Дерево секций с IDs.

CONSTRAINTS:

- Никаких новых секций/snippets/assets сверх медиа-загрузок.
- Никаких правок Liquid/JS. Никакого каталога на Home.
