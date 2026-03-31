// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// Scroll fade-in animation
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in class to animatable sections
document.querySelectorAll(
  '.about-content, .about-image, .step-card, .menu-item, ' +
  '.cooks-content, .cooks-images, .blog-card, .privacy-card, ' +
  '.contact-inner, .hero-materials, .hero-stats, .hero-combine'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Stagger step cards
document.querySelectorAll('.step-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.15}s`;
});

// Stagger blog cards
document.querySelectorAll('.blog-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.15}s`;
});

// Stagger menu items
document.querySelectorAll('.menu-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 0.1}s`;
});

// Navbar background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Hero card tab switching
document.querySelectorAll('.hero-card-tabs .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.hero-card-tabs .tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
