const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add show class
                entry.target.classList.add('show-scroll');
                // Show text with delay
                const textElement = entry.target.querySelector('.text-hidden');
                if (textElement) {
                    setTimeout(() => {
                        textElement.classList.add('text-show');
                    }, 200);
                }
            } else {
                // Optional: remove classes when scrolling back up
                entry.target.classList.remove('show-scroll');
                const textElement = entry.target.querySelector('.text-hidden');
                if (textElement) {
                    textElement.classList.remove('text-show');
                }
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '0px'
    }
);

// Observe all sections
document.querySelectorAll('.hidden-scroll, .hidden-scroll-right').forEach((el) => {
    observer.observe(el);
});