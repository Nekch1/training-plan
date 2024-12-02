//кнопка вверх
const scrollToTopButton = document.getElementById('scrollTop');
const footer = document.querySelector('footer');

if(scrollToTopButton){
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY; 
        const windowHeight = window.innerHeight; 
        const documentHeight = document.documentElement.scrollHeight; 
        const footerHeight = footer ? footer.offsetHeight : 0; 
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


//слайдер
const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').offsetWidth;
const slideCount = slides.children.length;

let counter = 0;

const firstSlideClone = slides.children[0].cloneNode(true);
slides.appendChild(firstSlideClone);

function slideNext() {
    counter++;
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${-counter * slideWidth}px)`;

    if (counter === slideCount) {
        setTimeout(() => {
            slides.style.transition = 'none'; 
            counter = 0; 
            slides.style.transform = `translateX(0)`;
        }, 500); 
    }
}

setInterval(slideNext, 3000);













//ДОБАВЛЕНИЕ ПЛАНА

// script.js





