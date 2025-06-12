document.addEventListener("DOMContentLoaded", function () {
  const typed = document.querySelector('.typed');
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(','); // separa as frases

    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const elementsToReveal = document.querySelectorAll(
    'section, .conteudo-sobre, #moda, #urbano, #classico, #anos-2000, #rock, ' +
    '#moda .boho, #urbano .Streetwear, #classico .classic, #anos-2000 .Y2K, #rock .grunge'
  );

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    elementsToReveal.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const revealPoint = 150;
      if (top < windowHeight - revealPoint) {
        el.classList.add('section-visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
