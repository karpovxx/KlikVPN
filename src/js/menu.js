// Меню на телефоне: кнопка ☰ открывает и закрывает список разделов
const burger = document.querySelector('.header_burger');
const nav = document.getElementById('header_nav');

function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    nav.classList.toggle('is-open', open);
}

burger.addEventListener('click', () => {
    setMenu(burger.getAttribute('aria-expanded') !== 'true');
});

// Выбрали раздел — меню закрывается
nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
});

// Esc или нажатие мимо шапки — тоже закрывает
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
});
document.addEventListener('click', (event) => {
    if (!event.target.closest('#header')) setMenu(false);
});
