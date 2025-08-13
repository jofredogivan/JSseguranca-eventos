// Ativar as abas de serviço
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões e conteúdos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Adiciona a classe 'active' no botão clicado
            button.classList.add('active');

            // Adiciona a classe 'active' no conteúdo correspondente
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

// Rolagem suave até seções e mostrar animações
document.querySelectorAll('.link-section').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            // Adiciona a classe para animar a seção
            target.classList.add('section-visible');
            // Rola suavemente até a seção
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Ativa a animação das seções visíveis ao rolar a página
const sections = document.querySelectorAll('.section-hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});
