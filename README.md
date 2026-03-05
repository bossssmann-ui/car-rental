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

| Страница     | Путь         | Описание                                    |
|--------------|--------------|---------------------------------------------|
| Главная      | `/`          | Hero, статистика, авто, преимущества, отзывы |
| Каталог      | `/cars`      | Фильтрация, сортировка, карточки авто        |
| Бронирование | `/booking`   | Форма заявки с расчётом стоимости            |
| О компании   | `/about`     | История, команда, ценности                  |
| Контакты     | `/contacts`  | Офисы, форма, карта                         |

## Эскизы страниц

### Главная (`/`)
![Главная страница](https://github.com/user-attachments/assets/261fb99e-653b-4cb6-a80c-47ed2a911eea)

### Каталог автомобилей (`/cars`)
![Каталог автомобилей](https://github.com/user-attachments/assets/f16a1000-6000-4354-b6df-29513c73b4d6)

### Бронирование (`/booking`)
![Бронирование](https://github.com/user-attachments/assets/28e00a1f-3955-4c27-b63f-994d6ad6c868)

### О компании (`/about`)
![О компании](https://github.com/user-attachments/assets/92c6cf2b-5a10-4d37-bf67-48576438f9e5)

### Контакты (`/contacts`)
![Контакты](https://github.com/user-attachments/assets/63062a63-80d7-464f-95af-847a2e0cc249)

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

