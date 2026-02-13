// Inicializar ícones
lucide.createIcons();

// 1. Lógica do Menu Mobile
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
}

// 2. Custom Cursor Logic
const cursor = document.getElementById('cursor');
const hoverTriggers = document.querySelectorAll('.hover-trigger');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

hoverTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
    });
    trigger.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
    });
});

// 3. Scroll Reveal Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0-start');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-element').forEach(el => {
    el.classList.add('opacity-0-start'); // Inicialmente invisível
    observer.observe(el);
});

// 4. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'py-4');
        navbar.classList.remove('py-6', 'mix-blend-multiply');
    } else {
        navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'py-4');
        navbar.classList.add('py-6', 'mix-blend-multiply');
    }
});