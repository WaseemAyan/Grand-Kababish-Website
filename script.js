
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Change navbar background on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(26, 26, 26, 0.98)';
                navbar.style.padding = '0.5rem 0';
            } else {
                navbar.style.background = 'rgba(26, 26, 26, 0.95)';
                navbar.style.padding = '1rem 0';
            }
        });
        
        // Gallery lightbox effect
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                const modal = document.createElement('div');
                modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;justify-content:center;align-items:center;z-index:2000;cursor:pointer';
                modal.innerHTML = `<img src="${img.src}" style="max-width:90%;max-height:90%;object-fit:contain;">`;
                modal.addEventListener('click', function() {
                    this.remove();
                });
                document.body.appendChild(modal);
            });
        });
        
        // Carousel settings
        const carousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
            interval: 1500,
            pause: false
        });