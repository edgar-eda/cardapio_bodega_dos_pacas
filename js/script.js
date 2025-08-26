// Inicializa os tooltips do Bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Adiciona classe de animação aos elementos ao rolar a página
document.addEventListener('DOMContentLoaded', function() {
    // Animação de entrada para os cards
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.menu-item, .feature-card, .promotion-card');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(position < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Executa na carga inicial
    animateOnScroll();
    
    // Executa ao rolar a página
    window.addEventListener('scroll', animateOnScroll);
    
    // Adiciona funcionalidade de filtro para o cardápio
    const menuFilter = function() {
        const filterButtons = document.querySelectorAll('#menuTabs .nav-link');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe active de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adiciona a classe active ao botão clicado
                this.classList.add('active');
            });
        });
    };
    
    // Inicializa o filtro do menu
    if(document.getElementById('menuTabs')) {
        menuFilter();
    }
    
    // Adiciona funcionalidade de contador para promoções
    const countdownToWeekend = function() {
        const now = new Date();
        const dayOfWeek = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
        const friday = 5; // Sexta-feira
        
        let daysUntilFriday;
        
        if (dayOfWeek <= friday) {
            daysUntilFriday = friday - dayOfWeek;
        } else {
            daysUntilFriday = 7 - dayOfWeek + friday;
        }
        
        // Se for sexta-feira, mostra mensagem especial
        if (daysUntilFriday === 0) {
            document.getElementById('promo-countdown').innerHTML = 
                '<div class="alert alert-success text-center">Hoje é sexta-feira! Aproveite nossas promoções especiais!</div>';
        } else {
            document.getElementById('promo-countdown').innerHTML = 
                `<div class="alert alert-info text-center">Faltam ${daysUntilFriday} dias para as promoções de sexta-feira!</div>`;
        }
    };
    
    // Inicializa o contador de promoções se existir na página
    if(document.getElementById('promo-countdown')) {
        countdownToWeekend();
    }
    
    // Adiciona funcionalidade de WhatsApp com mensagem personalizada
    const setupWhatsAppButtons = function() {
        const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
        
        whatsappButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Opcional: Adicionar tracking de eventos aqui
                console.log('WhatsApp button clicked:', this.href);
            });
        });
    };
    
    // Inicializa os botões do WhatsApp
    setupWhatsAppButtons();
});