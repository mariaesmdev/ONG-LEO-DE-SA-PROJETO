// Script para adicionar a classe 'visible' aos blocos de projeto quando eles estiverem visíveis na tela (efeito de animação)

document.addEventListener('DOMContentLoaded', () => {
    const projetoBlocos = document.querySelectorAll('.projeto-bloco');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // O bloco se torna visível quando 10% dele está na viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para de observar depois de tornar visível
            }
        });
    }, observerOptions);

    projetoBlocos.forEach(bloco => {
        observer.observe(bloco);
    });
});
