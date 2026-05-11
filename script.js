/**
 * Configurações da Pressel
 */
const CONFIG = {
    destinationUrl: "https://subwaysurfsoriginal.com/?ref=HHYFDDDYU",
    deniedUrl: "https://google.com" 
};

/**
 * Função de verificação
 */
function handleVerification(isOfAge) {
    const card = document.getElementById('age-verification');
    const deniedCard = document.getElementById('denied-message');
    
    if (isOfAge) {
        // Feedback visual de sucesso
        card.style.transition = "all 0.5s ease";
        card.style.opacity = "0";
        card.style.transform = "scale(0.9)";
        
        document.body.classList.add('verified');

        setTimeout(() => {
            window.location.href = CONFIG.destinationUrl;
        }, 500);
    } else {
        // Esconde o card atual e mostra a mensagem de pena
        card.style.display = 'none';
        deniedCard.style.display = 'block';
        deniedCard.style.animation = 'slideUp 0.5s ease forwards';
    }
}

// Removido efeito de movimento para máxima compatibilidade com a imagem de fundo
