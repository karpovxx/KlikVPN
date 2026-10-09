<div align="center">

# 🛡️ KlikVPN

### Стабильный VPN по честной цене

**30 дней бесплатно · от 49 ₽ в месяц · подключение за 30 секунд**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-6c5ce7?style=flat-square)](LICENSE)
[![Made in Ufa](https://img.shields.io/badge/Made%20in-Ufa%20·%202026-00CED1?style=flat-square)](#)

[Возможности](#-возможности) · [Быстрый старт](#-быстрый-старт) · [Структура](#-структура-проекта) · [Настройка](#-настройка)

</div>

---

## 📖 О проекте

**KlikVPN** — это лендинг VPN-сервиса с тёмным дизайном, плавными анимациями и подключением через бота ВКонтакте. Сайт рассказывает о сервисе, показывает тарифы, отвечает на частые вопросы и ведёт пользователя прямо в бота для оформления подписки.

Написан на чистых **HTML**, **CSS** и минимуме **JavaScript** — без фреймворков, без сборщиков, без зависимостей.

<div align="center">

| 🚀 | ⚡ | 🔒 | 💰 | 📱 |
|:---:|:---:|:---:|:---:|:---:|
| Настройка<br>за 30 сек | Вращение<br>монеты | Шифрование<br>трафика | От 49 ₽<br>в месяц | Все<br>платформы |

</div>

---

## ✨ Возможности

<table>
<tr>
<td width="50%">

### 🎨 Дизайн
- Тёмная тема с фирменным градиентом
- Бирюзово-фиолетовая палитра (`#00CED1` → `#6c5ce7`)
- 3D-монета-логотип, вращающаяся при скролле
- Свечение вокруг ключевых элементов
- Пульсирующие CTA-кнопки

</td>
<td width="50%">

### ⚙️ Технологии
- Чистый HTML5 + CSS3 + Vanilla JS
- `IntersectionObserver` — анимации при скролле
- `requestAnimationFrame` — плавное вращение
- `clamp()` — адаптивная типографика
- `prefers-reduced-motion` — забота о доступности

</td>
</tr>
<tr>
<td width="50%">

### 📱 Адаптивность
- Desktop / Tablet / Mobile
- Мобильное меню-бургер `☰`
- Гибкие сетки на `flex` и `grid`
- 4 брейкпоинта: 1000 / 900 / 700 / 480 px

</td>
<td width="50%">

### 🧩 Функциональность
- FAQ на нативных `<details>` — без JS
- Плавная прокрутка к якорям
- Секция тарифов с выделенным планом
- Способы оплаты (ЮMoney, SberPay, МИР)
- Страница-инструкция по Happ

</td>
</tr>
</table>

---

## 🚀 Быстрый старт

### Способ 1 — Локальный сервер *(рекомендуется)*

```bash
# Клонируй репозиторий
git clone https://github.com/karpovxx/KlikVPN.git
cd KlikVPN

# Запусти локальный сервер
python -m http.server 8000
# или
npx serve