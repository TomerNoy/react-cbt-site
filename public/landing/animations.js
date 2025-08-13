// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // הגדרות ל-Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // יצירת Observer לאנימציות כלליות
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // הוספת כל האלמנטים עם אנימציות ל-Observer
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .scale-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // הוספת השהיה מדורגת לאלמנטים
    document.querySelectorAll('.hero-section .fade-in').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });

    // הוספת השהיה מדורגת לרשימת הסימפטומים
    document.querySelectorAll('.target-section .scale-in').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.15}s`;
    });

    // הוספת השהיה מדורגת לתהליך
    document.querySelectorAll('.process-section .slide-in-left, .process-section .slide-in-right').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.2}s`;
    });

    // אנימציות נוספות לכפתורים
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Touch feedback למובייל
    if ('ontouchstart' in window) {
        const touchElements = document.querySelectorAll('li, .process-section > div, button');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transition = 'transform 0.1s';
                this.classList.add('touching');
            }, { passive: true });
            
            element.addEventListener('touchend', function() {
                this.style.transition = '';
                this.classList.remove('touching');
            }, { passive: true });
        });
    }

    // אנימציה מיוחדת לכרטיס יצירת קשר
    const contactCard = document.querySelector('.contact-card');
    if (contactCard) {
        const contactObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // הוספת אנימציה לאלמנטים הפנימיים
                    const innerElements = entry.target.querySelectorAll('.fade-in');
                    innerElements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('visible');
                        }, index * 100);
                    });
                }
            });
        }, { threshold: 0.3 });
        
        contactObserver.observe(contactCard);
    }

    // Smooth scroll לעוגנים (אם יש)
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
});