   // Mobile menu toggle
   const mobileMenuButton = document.getElementById('mobile-menu-button');
   const mobileMenu = document.getElementById('mobile-menu');

   mobileMenuButton.addEventListener('click', () => {
       mobileMenu.classList.toggle('hidden');
   });

   // Filter functionality
   const filterBtns = document.querySelectorAll('.filter-btn');
   const products = document.querySelectorAll('.product-card');

   filterBtns.forEach(btn => {
       btn.addEventListener('click', () => {
           filterBtns.forEach(b => {
               b.classList.remove('bg-indigo-500', 'hover:bg-indigo-600');
               b.classList.add('bg-gray-500', 'hover:bg-gray-600');
           });
           
           btn.classList.remove('bg-gray-500', 'hover:bg-gray-600');
           btn.classList.add('bg-indigo-500', 'hover:bg-indigo-600');
           
           const category = btn.getAttribute('data-category');
           
           products.forEach(product => {
               if (category === 'semua' || product.getAttribute('data-category') === category) {
                   product.style.display = 'block';
               } else {
                   product.style.display = 'none';
               }
           });
       });
   });