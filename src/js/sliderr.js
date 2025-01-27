const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const totalSlides = 3;

// Function to update dots
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('bg-white', index === currentSlide);
        dot.classList.toggle('bg-white/60', index !== currentSlide);
    });
}

// Function to move slide
function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlider();
}

// Function to go to specific slide
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
}

// Function to update slider position
function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

// Auto slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);