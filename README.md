# МеридианVL — Автопрокат во Владивостоке

Сайт автопроката [meridianvl.pro](https://meridianvl.pro) — современный, быстрый и удобный веб-сайт для сервиса аренды автомобилей во Владивостоке.

## Стек технологий

- **React 19** + **TypeScript**
- **Vite 8** — сборка и dev-сервер
- **React Router v7** — маршрутизация
- **Lucide React** — иконки
- CSS Custom Properties — дизайн-система

## Структура проекта

```
src/
├── components/     # Переиспользуемые компоненты (Header, Footer, CarCard, ...)
├── pages/          # Страницы приложения
├── data/           # Данные об автомобилях и отзывах
├── types/          # TypeScript-типы
└── utils/          # Утилиты (работа с датами)
```

## Страницы

| Страница             | Путь           | Описание                                    |
|----------------------|----------------|---------------------------------------------|
| Главная              | `/`            | Hero, статистика, авто, преимущества, отзывы |
| Каталог              | `/cars`        | Фильтрация, сортировка, карточки авто        |
| Бронирование         | `/booking`     | Форма заявки с расчётом стоимости            |
| О компании           | `/about`       | История, команда, ценности                  |
| Контакты             | `/contacts`    | Офисы, форма, карта                         |
| Консьерж-сервис      | `/concierge`   | Персональный подбор авто и доп. услуги       |
| Условия аренды       | `/conditions`  | Возраст, документы, залог, страховка         |
| Конфиденциальность   | `/privacy`     | Обработка персональных данных               |
| Условия бронирования | `/terms`       | Правила бронирования и аренды               |

## Демо

👉 **[Открыть сайт](https://bossssmann-ui.github.io/car-rental/)** — живая версия на GitHub Pages

| Страница             | Прямая ссылка                                                                 |
|----------------------|-------------------------------------------------------------------------------|
| Главная              | [/](https://bossssmann-ui.github.io/car-rental/)                             |
| Каталог              | [/cars](https://bossssmann-ui.github.io/car-rental/cars)                     |
| Бронирование         | [/booking](https://bossssmann-ui.github.io/car-rental/booking)               |
| О компании           | [/about](https://bossssmann-ui.github.io/car-rental/about)                   |
| Контакты             | [/contacts](https://bossssmann-ui.github.io/car-rental/contacts)             |
| Консьерж-сервис      | [/concierge](https://bossssmann-ui.github.io/car-rental/concierge)           |
| Условия аренды       | [/conditions](https://bossssmann-ui.github.io/car-rental/conditions)         |
| Конфиденциальность   | [/privacy](https://bossssmann-ui.github.io/car-rental/privacy)               |
| Условия бронирования | [/terms](https://bossssmann-ui.github.io/car-rental/terms)                   |

## Запуск

```bash
# Установка зависимостей
npm install

# Режим разработки
npm run dev

# Сборка для production
npm run build

# Предпросмотр сборки
npm run preview

# Линтер
npm run lint
```

## SEO

- Meta-теги (description, keywords)
- Open Graph теги
- Schema.org разметка (AutoRental)
- `lang="ru"` на HTML
- Canonical URL

