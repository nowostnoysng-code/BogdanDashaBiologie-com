const slides = Array.from(document.querySelectorAll('.slide'));
const currentSlideLabel = document.getElementById('currentSlideLabel');
const totalSlidesLabel = document.getElementById('totalSlidesLabel');
const currentIndex = document.getElementById('currentIndex');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let activeIndex = 0;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === activeIndex);
  });

  currentSlideLabel.textContent = String(activeIndex + 1);
  currentIndex.textContent = String(activeIndex + 1);
  totalSlidesLabel.textContent = String(slides.length);

  prevBtn.disabled = activeIndex === 0;
  nextBtn.textContent = activeIndex === slides.length - 1 ? 'Кінець' : 'Далі';
}

prevBtn.addEventListener('click', () => {
  if (activeIndex > 0) {
    activeIndex -= 1;
    updateSlides();
  }
});

nextBtn.addEventListener('click', () => {
  if (activeIndex < slides.length - 1) {
    activeIndex += 1;
    updateSlides();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
    event.preventDefault();
    if (activeIndex < slides.length - 1) {
      activeIndex += 1;
      updateSlides();
    }
  }

  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    if (activeIndex > 0) {
      activeIndex -= 1;
      updateSlides();
    }
  }
});

updateSlides();
