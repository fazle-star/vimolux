const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-scroll');
            const textElements = entry.target.querySelector('.text-hidden');
            if (textElements) {
                textElements.classList.add('text-show');
            }
        } else {
            entry.target.classList.remove('show-scroll');
            const textElements = entry.target.querySelector('.text-hidden');
            if (textElements) {
                textElements.classList.remove('text-show');
            }
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

const hiddenElements = document.querySelectorAll('.hidden-scroll, .hidden-scroll-right');
hiddenElements.forEach((el) => observer.observe(el));   