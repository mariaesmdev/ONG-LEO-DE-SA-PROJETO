// animacao do topico
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("h2").forEach((h2) => {
    h2.style.transition = "0.4s ease";
    h2.addEventListener("mouseenter", () => (h2.style.opacity = "0"));
    h2.addEventListener("mouseleave", () => (h2.style.opacity = "1"));
  });
});


// animacao q rola 
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".sobre-bloco, .valores, .img-final");

  const revelar = () => {
    const alturaJanela = window.innerHeight;
    elementos.forEach((el) => {
      const topoElemento = el.getBoundingClientRect().top;
      if (topoElemento < alturaJanela - 100) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revelar);
  revelar();
});
