// burgerMenu
const menu = document.querySelector('#menu');
const toggle = document.querySelector('#toggle');

toggle.addEventListener('click', function() {
    if (toggle.checked) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

// imageSlider
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  const slideInterval = 5000;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
      slide.classList.add('opacity-0');
      slide.classList.remove('opacity-100');
    });
    slides[index].classList.add('opacity-100');
  }

  function nextSlide() {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  }

  document.querySelector('.prev').addEventListener('click', function () {
    prevSlide();
    resetAutoPlay();
  });

  document.querySelector('.next').addEventListener('click', function () {
    nextSlide();
    resetAutoPlay();
  });

  function resetAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = setInterval(nextSlide, slideInterval);
  }

  let autoPlay = setInterval(nextSlide, slideInterval);

  showSlide(currentIndex);
});