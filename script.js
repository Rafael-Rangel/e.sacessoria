// WhatsApp Integration
function openWhatsApp() {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de cerimonialista da Eloisa Soares.");
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}

// Removido cursor customizado - usando apenas cursor.png e pointer padrão

// Background particles system
function createBackgroundParticles() {
    const sections = document.querySelectorAll('.hero, .about, .services, .portfolio, .contact');
    
    sections.forEach(section => {
        // Create particle container
        const particleContainer = document.createElement('div');
        particleContainer.className = 'background-particles';
        particleContainer.style.position = 'absolute';
        particleContainer.style.top = '0';
        particleContainer.style.left = '0';
        particleContainer.style.width = '100%';
        particleContainer.style.height = '100%';
        particleContainer.style.pointerEvents = 'none';
        particleContainer.style.zIndex = '1';
        particleContainer.style.overflow = 'hidden';
        
        section.appendChild(particleContainer);
        
        // Create floating particles
        function createBackgroundParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = 'rgba(143, 188, 143, 0.3)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.bottom = '-10px';
            particle.style.animation = `subtleFloat ${Math.random() * 10 + 15}s linear infinite`;
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            particleContainer.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, 20000);
        }
        
        // Create particles periodically
        setInterval(createBackgroundParticle, 3000);
        
        // Create initial particles
        for (let i = 0; i < 5; i++) {
            setTimeout(createBackgroundParticle, i * 600);
        }
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize background particles
    createBackgroundParticles();
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-item, .feature-item');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Parallax effect for floating elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const floatingElements = document.querySelectorAll('.floating-lotus');
        
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Typing animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleLines = heroTitle.querySelectorAll('.title-line');
        titleLines.forEach((line, index) => {
            line.style.animationDelay = `${index * 0.2}s`;
        });
    }

    // Portfolio item hover effects
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Service cards hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 25px 50px rgba(45, 80, 22, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(45, 80, 22, 0.1)';
        });
    });

    // CTA buttons hover effects
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        // Ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });

        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.querySelector('#sobre');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Loading animation
    window.addEventListener('load', function() {
        const loading = document.querySelector('.loading');
        if (loading) {
            loading.classList.add('hidden');
            setTimeout(() => {
                loading.remove();
            }, 500);
        }
    });

    // Form validation (if forms are added later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
        });
    });

    // Lazy loading for images (when real images are added)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Add interactive particles on mouse move
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create floating particles more frequently
        if (Math.random() > 0.85) {
            createFloatingParticle(mouseX, mouseY);
        }
        
        // Add magnetic effect to interactive elements
        const magneticElements = document.querySelectorAll('.cta-button, .service-card, .portfolio-item');
        magneticElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
            
            if (distance < 150) {
                const strength = (150 - distance) / 150;
                const moveX = (e.clientX - centerX) * strength * 0.1;
                const moveY = (e.clientY - centerY) * strength * 0.1;
                
                el.style.transform = `translate(${moveX}px, ${moveY}px)`;
            } else {
                el.style.transform = 'translate(0px, 0px)';
            }
        });
    });

    function createFloatingParticle(x, y, color = '#8FBC8F', size = 4) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.position = 'fixed';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = color;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        particle.style.animation = 'fadeOutUp 2s ease-out forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }

    // Create burst of particles on element interaction
    function createParticleBurst(x, y, color = '#8FBC8F') {
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const distance = Math.random() * 30 + 20;
            const burstX = x + Math.cos(angle) * distance;
            const burstY = y + Math.sin(angle) * distance;
            const size = Math.random() * 6 + 3;
            
            setTimeout(() => {
                createFloatingParticle(burstX, burstY, color, size);
            }, i * 50);
        }
    }

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });

    // Add touch gestures for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Swipe left/right for portfolio navigation
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                // Swipe right
                console.log('Swipe right detected');
            } else {
                // Swipe left
                console.log('Swipe left detected');
            }
        }
    });

    // Performance optimization: Throttle scroll events
    let ticking = false;
    
    function updateScrollEffects() {
        // Navbar background
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll indicator
        if (scrollIndicator) {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        }
        
        // Parallax
        const scrolled = window.pageYOffset;
        const floatingElements = document.querySelectorAll('.floating-lotus');
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .cta-button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes fadeOutUp {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-50px);
            }
        }
        
        .navbar.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 20px rgba(45, 80, 22, 0.15);
        }
        
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--white);
            box-shadow: 0 10px 30px var(--shadow);
            padding: 1rem;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);

    // Add text hover effects
    const textElements = document.querySelectorAll('h1, h2, h3, p');
    textElements.forEach(text => {
        text.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Add ripple effect and particle burst to all clickable elements
    const clickableElements = document.querySelectorAll('.cta-button, .service-card, .portfolio-item, .nav-link');
    clickableElements.forEach(el => {
        el.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            // Create particle burst on click
            createParticleBurst(e.clientX, e.clientY, '#8FBC8F');
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });

        // Add particle burst on hover
        el.addEventListener('mouseenter', function(e) {
            createParticleBurst(e.clientX, e.clientY, '#2D5016');
        });
    });

    // Observe all animated elements with existing observer
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-item, .feature-item, .section-title');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // Add tilt effect to cards
    const tiltElements = document.querySelectorAll('.service-card, .portfolio-item');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });

    // Enhanced typing animation for hero title
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid var(--primary-green)';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                heroTitle.style.borderRight = 'none';
            }
        }
        
        setTimeout(typeWriter, 1000);
    }

    // Add floating animation to logos
    const logos = document.querySelectorAll('.logo-image, .footer-logo-image');
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.animation = 'float 2s ease-in-out infinite';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });

    // Initialize everything
    console.log('Eloisa Soares Cerimonialista - Website loaded successfully!');
});

// Add some utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Export functions for global use
window.openWhatsApp = openWhatsApp;
