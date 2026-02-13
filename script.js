// Inicializar ícones
lucide.createIcons();

// 1. Lógica do Menu Mobile
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const isOpened = menu.classList.contains('translate-x-0');

    if (isOpened) {
        menu.classList.remove('translate-x-0');
        menu.classList.add('translate-x-full');
        document.body.style.overflow = 'auto'; // Reativa o scroll
    } else {
        menu.classList.remove('translate-x-full');
        menu.classList.add('translate-x-0');
        document.body.style.overflow = 'hidden'; // Bloqueia o scroll ao abrir
    }
}

// 2. Custom Cursor Logic (Apenas se não for touch)
const cursor = document.getElementById('cursor');
if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('.hover-trigger').forEach(trigger => {
        trigger.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        trigger.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
}

// 3. Scroll Reveal Animation
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-element').forEach(el => observer.observe(el));

// 4. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-md', 'py-4');
        navbar.classList.remove('py-6', 'mix-blend-multiply');
    } else {
        navbar.classList.remove('bg-white', 'shadow-md', 'py-4');
        navbar.classList.add('py-6', 'mix-blend-multiply');
    }
});

// 5. WhatsApp Form Logic
document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const phone = "258823077300";
    const text = `Olá Edwinna, meu nome é ${name}. ${message}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
});