(function () {
    // 1. Кого анимируем и с какой задержкой (каскадом)
    const targets = [
        { selector: '.mid_present',     cls: 'reveal reveal-left'  },
        { selector: '.mid_main_photo',  cls: 'reveal reveal-right' },

        { selector: '.howto .section_title',    cls: 'reveal' },
        { selector: '.howto .section_subtitle', cls: 'reveal reveal-delay-1' },
        { selector: '.howto_step:nth-child(1)', cls: 'reveal reveal-delay-2' },
        { selector: '.howto_step:nth-child(2)', cls: 'reveal reveal-delay-3' },
        { selector: '.howto_step:nth-child(3)', cls: 'reveal reveal-delay-4' },
        { selector: '.howto_devices',           cls: 'reveal reveal-delay-5' },

        { selector: '.tariffs .section_title',    cls: 'reveal' },
        { selector: '.tariffs .section_subtitle', cls: 'reveal reveal-delay-1' },
        { selector: '.tariffs_card:nth-child(1)', cls: 'reveal reveal-delay-2' },
        { selector: '.tariffs_card:nth-child(2)', cls: 'reveal reveal-delay-3' },
        { selector: '.tariffs_card:nth-child(3)', cls: 'reveal reveal-delay-4' },
        { selector: '.pay',                       cls: 'reveal reveal-delay-5' },

        { selector: '.faq .section_title',    cls: 'reveal' },
        { selector: '.faq .section_subtitle', cls: 'reveal reveal-delay-1' },
        { selector: '.faq_item:nth-child(1)', cls: 'reveal reveal-delay-2' },
        { selector: '.faq_item:nth-child(2)', cls: 'reveal reveal-delay-3' },
        { selector: '.faq_item:nth-child(3)', cls: 'reveal reveal-delay-3' },
        { selector: '.faq_item:nth-child(4)', cls: 'reveal reveal-delay-3' },
        { selector: '.faq_item:nth-child(5)', cls: 'reveal reveal-delay-4' },
        { selector: '.faq_item:nth-child(6)', cls: 'reveal reveal-delay-4' },
        { selector: '.faq_item:nth-child(7)', cls: 'reveal reveal-delay-4' },
        { selector: '.faq_item:nth-child(8)', cls: 'reveal reveal-delay-5' },

        { selector: '.cta_box', cls: 'reveal reveal-zoom' }
    ];

    // 2. Ставим классы ДО первого рендера (иначе элементы мигнут и потом исчезнут)
    targets.forEach(({ selector, cls }) => {
        const el = document.querySelector(selector);
        if (el) {
            el.classList.add(...cls.split(' '));
        }
    });

    // 3. Если IntersectionObserver не поддерживается — просто всё показываем
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom')
            .forEach(el => el.classList.add('is-visible'));
        return;
    }

    // 4. Наблюдатель: как только элемент попал в экран — добавляем .is-visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // анимируем один раз
            }
        });
    }, {
        threshold: 0.15,          // срабатывает, когда видно 15% элемента
        rootMargin: '0px 0px -60px 0px' // чуть заранее — до того, как докрутит до конца
    });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom')
        .forEach(el => observer.observe(el));

    // 5. Плавная прокрутка к якорям (с учётом отключения анимации)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const id = link.getAttribute('href');
            if (id === '#' || id.length < 2) return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();

            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            target.scrollIntoView({
                behavior: reduce ? 'auto' : 'smooth',
                block: 'start'
            });
        });
    });

    // 6. Пульс на кнопке CTA внизу страницы
    const ctaBtn = document.querySelector('.cta_box .btn_primary');
    if (ctaBtn) ctaBtn.classList.add('cta_pulse');

})();