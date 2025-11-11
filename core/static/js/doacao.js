document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('doacaoSlider');
  if (!slider) return;
  const slides = Array.from(slider.querySelectorAll('.slide'));
  if (!slides.length) return;

  let i = 0;
  slides.forEach((s, idx) => s.classList.toggle('show', idx === 0));

  const next = () => {
    slides[i].classList.remove('show');
    i = (i + 1) % slides.length;
    slides[i].classList.add('show');
  };

  let timer = setInterval(next, 3000);

  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', () => {
    clearInterval(timer);
    timer = setInterval(next, 3000);
  });
});