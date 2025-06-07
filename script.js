
    // Toggle all challenges function
    function toggleAllChallenges() {
      const container = document.getElementById('allChallenges');
      const btn = document.querySelector('.toggle-btn');
      const text = document.querySelector('.toggle-text');
      
      if (container.classList.contains('expanded')) {
        container.classList.remove('expanded');
        btn.classList.remove('expanded');
        text.textContent = 'View All 33 Challenges';
      } else {
        container.classList.add('expanded');
        btn.classList.add('expanded');
        text.textContent = 'Hide Challenges';
      }
    }

    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });

    // Interactive skill cards
    document.querySelectorAll('.skills div').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Dynamic effects based on scroll position
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      
      // Parallax effect for floating ornaments
      document.querySelectorAll('.ornament').forEach((ornament, index) => {
        ornament.style.transform = `translateY(${rate * (index + 1) * 0.1}px)`;
      });
    });

    // Add subtle glow effect to interactive elements
    document.addEventListener('mousemove', (e) => {
      const cards = document.querySelectorAll('.skills div');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(212, 175, 55, 0.1), var(--deep-gray))`;
        }
      });
    });
