// JAVASCRIPT: Lógica de Prova Social Simulada (Aumenta o Clicke)

const toast = document.getElementById('socialNotification');
const textSpan = document.getElementById('notificationText');

// Frases que geram FOMO (Medo de Perder) e Prova Social
const messages = [
    "🔥 Novo erro de preço detectado no Grupo 1!",
    "✨ Cupom de 60% OFF postado agora!",
    "👤 14 pessoas acabaram de entrar no VIP.",
    "💻 Oferta relâmpago no grupo principal postada!",
    "⚠️ O estoque da última oferta está acabando...",
    "👤 Alguém economizou R$ 350 na última hora."
];

function showNotification() {
    // Seleciona uma mensagem aleatória
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    textSpan.textContent = randomMessage;
    
    // Mostra o toast
    toast.classList.add('show');
    
    // Esconde o toast após 4 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Inicia o ciclo de notificações (Uma a cada 12 segundos)
// A primeira aparece após 3 segundos da página aberta
setTimeout(() => {
    showNotification();
    setInterval(showNotification, 12000); 
}, 3000);
