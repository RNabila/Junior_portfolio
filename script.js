   function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            //this part shows selected page
            document.getElementById(pageId).classList.add('active');
            
            //updatesd navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.add('active');
            
            //Scroll to top
            window.scrollTo(0, 0);
            
            //Trigger animations for the new page
            setTimeout(() => {
                animateOnScroll();
            }, 100);
        }

        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            elements.forEach(el => {
                observer.observe(el);
            });
        }
        //page loads, animations happen
        document.addEventListener('DOMContentLoaded', () => {
            animateOnScroll();
        });

        //adds smooth scrolling for internal nav
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });

        //Add interactive effects to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        //Add typing effect to the main title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }

        //floating 
        document.querySelectorAll('.floating-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 2}s`;
            
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) rotate(5deg) scale(1.05)';
                card.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.3)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.boxShadow = '';
            });
        });

        //particle efx
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = 'rgba(59, 130, 246, 0.3)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '-1';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = '-10px';
            
            document.body.appendChild(particle);
            
            const animation = particle.animate([
                { transform: 'translateY(0px)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 100}px)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'linear'
            });
            
            animation.onfinish = () => {
                particle.remove();
            };
        }

        setInterval(createParticle, 2000);

        document.addEventListener('keydown', (e) => {
            const pages = ['home', 'aboutme', 'projects', 'competitions', 'reflection'];
            const currentPage = document.querySelector('.page-section.active').id;
            const currentIndex = pages.indexOf(currentPage);
            
            if (e.key === 'ArrowRight' && currentIndex < pages.length - 1) {
                showPage(pages[currentIndex + 1]);
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                showPage(pages[currentIndex - 1]);
            }
        });

        //loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
    </script>
