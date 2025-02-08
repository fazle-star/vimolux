const testimonials = [
    {
        text: "Saya sangat senang ada produk cet texture pasir yang tidak ditemukan di merek lain jadi bisa langsung di aplikasikan tanpa repot' lagi.",
        name: "Satriya",
        role : "bantul"
    },
    {
        text: "Pelayanan memuaskan,pengiriman cepat,1 pail juga dikirm ..tinggal bayar di tempat deh..go send juga bisa.",
        name: "Maryadi",
        role: "pemilik kos"
    },
    {
        text: "saya sudah bekerja sama dengan produk vimolux dan owner nya selama kurang lebih setahun.selalu ada solusi jika ditemukan permasalahan.",
        name: "Heryanto",
        role: "developer"
    },
    {
        text: "Warna-warnanya cantik dan tahan lama .sangat rekomemmneded.",
        name: "Ibu Dyah.",
        role: "Pemilik rumah pribadi,Sleman."
    },
    {
        text: "Vimolux memang mantap,tidak gembur dan cepat kering.",
        name: "Asen Patikawa.",
        role: "mandor proyek."
    },
    {
        text: "kerja sama dengan produk vimolux sangat oke,dapat sample produk,mockup proyek,purna jual dan garansi produk,pengiriman juga cepat.",
        name: "Rini Ahmad.",
        role: "kontraktor,semarang."
    }
];

let currentSlide = 0;
        const slider = document.getElementById('testimonialSlider');
        const dotsContainer = document.getElementById('sliderDots');

        // Create slides and dots
        function createSlides() {
            testimonials.forEach((testimonial, index) => {
                // Create slide
                const slide = document.createElement('div');
                slide.className = `slide ${index === 0 ? 'active' : ''}`;
                slide.innerHTML = `
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <p class="client-name">${testimonial.name}</p>
                    <p class="client-role">${testimonial.role}</p>
                `;
                slider.appendChild(slide);

                // Create dot
                const dot = document.createElement('div');
                dot.className = `dot ${index === 0 ? 'active' : ''}`;
                dot.onclick = () => goToSlide(index);
                dotsContainer.appendChild(dot);
            });
        }

        function updateSlides() {
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.dot');
            
            slides.forEach((slide, index) => {
                slide.className = 'slide';
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else if (index === getPrevIndex()) {
                    slide.classList.add('prev');
                }
            });

            dots.forEach((dot, index) => {
                dot.className = `dot ${index === currentSlide ? 'active' : ''}`;
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % testimonials.length;
            updateSlides();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
            updateSlides();
        }

        function getPrevIndex() {
            return (currentSlide - 1 + testimonials.length) % testimonials.length;
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlides();
        }

        // Initialize slider
        createSlides();

        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);