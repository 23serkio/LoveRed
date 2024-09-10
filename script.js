let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const audio = document.getElementById('backgroundMusic');
const heartSlide = document.getElementById('startSlide');

// Mostrar el primer slide (el corazón)
showSlide(currentSlide);

// Iniciar música y mostrar la siguiente diapositiva al hacer clic en el corazón
heartSlide.addEventListener('click', () => {
    audio.play(); // Iniciar la música
    currentSlide = 1; // Cambiar al siguiente slide
    showSlide(currentSlide);
});

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});