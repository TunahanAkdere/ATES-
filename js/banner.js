let currentSlide = 0;
const slides = document.querySelectorAll(".background-slideshow .slide");
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add("active");
}

// İlk resmi aktif yap
slides[currentSlide].classList.add("active");

// Her 5 saniyede bir resmi değiştir
setInterval(showNextSlide, 5000);
