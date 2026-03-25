// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DE PROVA SOCIAL SIMULADA (FOMO) --- //
    
    const toast = document.getElementById('socialNotification');
    const textSpan = document.getElementById('notificationText');
    
    // Frases que geram urgência e desejo de clicar
    const messages = [
        "🔥 Novo erro de preço detectado no Grupo 1!",
        "✨ Cupom de 60% OFF postado agora!",
        "👤 14 pessoas acabaram de entrar no VIP.",
        "💻 Oferta relâmpago de Notebook postada!",
        "⚠️ O estoque da última oferta está acabando...",
        "👤 Alguém economizou R$ 350 na última hora."
    ];

    function showNotification() {
        // Seleciona uma mensagem aleatória
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        textSpan.textContent = randomMessage;
        
        // Mostra o toast adicionando a classe 'show'
        toast.classList.add('show');
        
        // Esconde o toast após 4 segundos (removendo a classe 'show')
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // Inicia o ciclo de notificações (Uma a cada 12 segundos)
    // A primeira aparece após 3 segundos da página aberta
    setTimeout(() => {
        showNotification(); // Primeira notificação
        setInterval(showNotification, 12000); // Ciclo contínuo
    }, 3000);

    // --- LÓGICA DE ANIMAÇÃO DE ENGAJAMENTO DOS BOTÕES --- //

    const botoes = document.querySelectorAll('.btn-promo:not(.principal)');

    // Faz um botão secundário pular aleatoriamente a cada 4 segundos
    setInterval(() => {
        if (botoes.length > 0) {
            // Escolhe um botão aleatório da lista
            const botaoAleatorio = botoes[Math.floor(Math.random() * botoes.length)];
            
            // Aplica um pequeno efeito visual de pulso
            botaoAleatorio.style.transform = "translateY(-4px) scale(1.05)";
            botaoAleatorio.style.boxShadow = "0 8px 15px rgba(0,0,0,0.3)";
            
            // Retorna ao tamanho normal após 250 milissegundos
            setTimeout(() => {
                botaoAleatorio.style.transform = "translateY(0) scale(1)";
                botaoAleatorio.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
            }, 250);
        }
    }, 4000); // Acontece a cada 4 segundos
});