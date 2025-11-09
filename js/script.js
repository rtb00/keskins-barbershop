// Keskin's Barbershop - JavaScript

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll and logo fade-in
const navbar = document.querySelector('.navbar');
const navbarLogo = document.querySelector('.logo-container');
let lastScroll = 0;

// Initially hide the navbar logo
if (navbarLogo) {
    navbarLogo.style.opacity = '0';
    navbarLogo.style.transition = 'opacity 0.5s ease';
}

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const aboutSection = document.querySelector('#about');

    // Add shadow when scrolled
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
    }

    // Show/hide logo based on scroll position
    if (aboutSection && navbarLogo) {
        const aboutPosition = aboutSection.offsetTop - 100;
        if (currentScroll >= aboutPosition) {
            navbarLogo.style.opacity = '1';
        } else {
            navbarLogo.style.opacity = '0';
        }
    }

    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe package cards
document.querySelectorAll('.package-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe gallery items
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.9)';
    item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Observe feature boxes
document.querySelectorAll('.feature-box').forEach((box, index) => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(30px)';
    box.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    observer.observe(box);
});

// Active navigation highlight
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Gallery image click to expand (simple version)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        // Could implement a lightbox here
        // For now, just add a subtle animation
        item.style.transform = 'scale(0.98)';
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 200);
    });
});

// Scroll reveal animation for about section
const aboutContent = document.querySelector('.about-content');
if (aboutContent) {
    aboutContent.style.opacity = '0';
    aboutContent.style.transform = 'translateY(50px)';
    aboutContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(aboutContent);
}

// Hero scroll indicator click
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (heroSection && window.pageYOffset < window.innerHeight) {
        const scrolled = window.pageYOffset;
        // Sehr langsames, spätes Fade-Out über die gesamte Hero-Section
        const opacity = 1 - scrolled / 1500;

        // Fade-Out für die gesamte Hero-Section
        heroSection.style.opacity = Math.max(0, opacity);

        // Scroll-Indikator ebenfalls ausfaden
        if (scrollIndicator) {
            scrollIndicator.style.opacity = Math.max(0, opacity);
        }
    }
});

// Counter animation for "13 Jahre"
const animateCounter = (element, target) => {
    let count = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(count);
    }, 30);
};

const badgeNumber = document.querySelector('.badge-number');
if (badgeNumber) {
    const badgeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && badgeNumber.textContent === '13') {
                animateCounter(badgeNumber, 13);
                badgeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    badgeObserver.observe(badgeNumber);
}

// Disable right-click on images (optional - to protect photos)
// document.querySelectorAll('img').forEach(img => {
//     img.addEventListener('contextmenu', (e) => e.preventDefault());
// });

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Price highlight animation on hover
document.querySelectorAll('.service-price, .package-price').forEach(price => {
    price.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    price.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Console message (optional easter egg)
console.log('%c🔥 Keskin\'s Barbershop 💈', 'font-size: 20px; font-weight: bold; color: #D4AF37;');
console.log('%cDeveloped with ❤️ for the best barbershop in Mainz-Kostheim', 'color: #999;');
console.log('%c13 Jahre Erfahrung - Ihr Vertrauen ist unser Erfolg!', 'color: #D4AF37; font-style: italic;');