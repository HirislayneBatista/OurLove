// Data de início do nosso relacionamento (15/11/2024 às 18:00) (ano, mês-1, dia, hora, minuto, segundo)
const startDate = new Date(2024, 11, 15, 18, 0, 0);

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    
    // Calcular os componentes do tempo
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    
    // Atualizar o elemento HTML
    document.getElementById('loveTimer').innerHTML = `
        ${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e<br>
        ${seconds} segundos
    `;
}

// Inicializar o carrossel
document.addEventListener('DOMContentLoaded', function() {
    // Atualizar imediatamente e a cada segundo
    updateTimer();
    setInterval(updateTimer, 1000);
    
    // Inicializar o carrossel do Bootstrap
    // const myCarousel = new bootstrap.Carousel(document.getElementById('loveCarousel'), {
    //     interval: 3000, // Muda a cada 3 segundos
    //     wrap: true
    // });
    new bootstrap.Carousel(document.getElementById('loveCarousel'), {
        interval: 3000, // Muda a cada 3 segundos
        wrap: true
    });
});