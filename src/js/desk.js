document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const container = this.closest('.product-container');
            const details = container.querySelector('.product-details');
            const icon = this.querySelector('svg');
            const buttonText = this.querySelector('span');
            
            if (details.classList.contains('max-h-0')) {
                details.classList.remove('max-h-0');
                details.classList.add('max-h-screen');
                icon.classList.add('rotate-180');
                buttonText.textContent = 'Sembunyikan';
            } else {
                details.classList.add('max-h-0');
                details.classList.remove('max-h-screen');
                icon.classList.remove('rotate-180');
                buttonText.textContent = 'Selengkapnya';
            }
        });
    });
});