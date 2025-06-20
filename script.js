// Control de productos (simulando slider de productos)
let currentIndex = 0;
const slides = document.querySelectorAll('.product-card');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides) currentIndex = 0;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = totalSlides - 1;
  showSlide(currentIndex);
}

// Mostrar el primer producto al cargar la página
showSlide(currentIndex);

// Validación y respuesta de formularios
const aboutForm = document.querySelector('.about-form');
const contactForm = document.querySelector('.contact-form');

aboutForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Gracias por contactarnos, pronto te responderemos!');
  aboutForm.reset();
});

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Gracias por tu mensaje, te responderemos pronto!');
  contactForm.reset();
});
