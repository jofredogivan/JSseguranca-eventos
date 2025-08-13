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

    // Ativa a animação das seções visíveis ao rolar a página
    const sections = document.querySelectorAll('.section-hidden');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Rolagem suave e ativação das seções
document.querySelectorAll('.link-section, .cta').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            // Garante que a seção se torne visível antes de rolar
            target.classList.remove('section-hidden');
            target.classList.add('section-visible');
            // Rola suavemente até a seção
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Lógica do formulário de contato
window.onload = function() {
    // Inicializa o EmailJS com o seu User ID
    emailjs.init("oV0tAQAk7NKybaRJn");

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = "service_ub6xlfc";
        const templateID = "template_1ea4ta6";

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert("Mensagem enviada com sucesso!");
                contactForm.reset();
            }, (error) => {
                console.log('FALHA...', error);
                alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
            });
    });
}
