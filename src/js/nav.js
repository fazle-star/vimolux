document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    let isOpen = false;

    mobileMenuButton.addEventListener('click', function() {
        isOpen = !isOpen;
        
        // Animate hamburger to X
        if (isOpen) {
            line1.style.transform = 'rotate(45deg) translate(0.4rem, 0.4rem)';
            line2.style.opacity = '0';
            line3.style.transform = 'rotate(-45deg) translate(0.4rem, -0.4rem)';
            
            // Show menu with animation
            mobileMenu.classList.remove('opacity-0', '-translate-y-2', 'h-0');
            mobileMenu.classList.add('opacity-100', 'translate-y-0', 'h-auto');
        } else {
            line1.style.transform = 'rotate(0) translate(0, 0)';
            line2.style.opacity = '1';
            line3.style.transform = 'rotate(0) translate(0, 0)';
            
            // Hide menu with animation
            mobileMenu.classList.remove('opacity-100', 'translate-y-0', 'h-auto');
            mobileMenu.classList.add('opacity-0', '-translate-y-2', 'h-0');
        }
    });
});