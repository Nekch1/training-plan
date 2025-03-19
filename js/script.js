document.addEventListener('DOMContentLoaded', () => {
    // ===== КНОПКА ВВЕРХ =====
    const scrollToTopButton = document.getElementById('scrollTop');
    const footer = document.querySelector('footer');

    if (scrollToTopButton) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const footerPosition = footer ? footer.offsetTop : documentHeight;

            if (scrollPosition + windowHeight < footerPosition && scrollPosition > 200) {
                scrollToTopButton.classList.add('show');
            } else {
                scrollToTopButton.classList.remove('show');
            }
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== СЛАЙДЕР =====
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');
    const slide = document.querySelector('.slide');
    let slideWidth = slide ? slide.offsetWidth : 0;

    if (slides && slides.children.length > 0) {
        const slideCount = slides.children.length;

        // Клонируем первый слайд для бесконечной прокрутки
        const firstSlideClone = slides.children[0].cloneNode(true);
        slides.appendChild(firstSlideClone);

        let counter = 0;

        function slideNext() {
            if (!slides) return;

            counter++;
            slides.style.transition = 'transform 0.5s ease-in-out';
            slides.style.transform = `translateX(${-counter * slideWidth}px)`;

            // Если дошли до последнего слайда — возвращаемся в начало
            if (counter === slideCount) {
                setTimeout(() => {
                    slides.style.transition = 'none';
                    counter = 0;
                    slides.style.transform = `translateX(0)`;
                }, 500);
            }
        }

        // Обновляем ширину слайда при изменении размера окна
        window.addEventListener('resize', () => {
            slideWidth = slide ? slide.offsetWidth : 0;
            slides.style.transform = `translateX(${-counter * slideWidth}px)`;
        });

        // Автоматическая прокрутка каждые 3 секунды
        setInterval(slideNext, 3000);
    }
});
