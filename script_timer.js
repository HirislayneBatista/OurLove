
import { loadYoutubeAPI } from './youtube_player.js';

// Data de início do nosso relacionamento (15/11/2024 às 18:00)
// JavaScript usa meses de 0-11 (novembro = 10)
const startDate = new Date(2024, 10, 15, 18, 0, 0);

function updateTimer() {
    const now = new Date();
    let diff = now - startDate; // Diferença em milissegundos
    
    // Cálculos básicos
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Cálculo preciso de anos, meses e dias
    let years = 0;
    let months = 0;
    let days = totalDays;
    
    // Calcular anos considerando anos bissextos
    let tempDate = new Date(startDate);
    while (true) {
        const nextYear = new Date(tempDate);
        nextYear.setFullYear(nextYear.getFullYear() + 1);
        if (now < nextYear) break;
        years++;
        tempDate = nextYear;
        days -= Math.floor((nextYear - tempDate) / (1000 * 60 * 60 * 24));
    }
    
    // Calcular meses restantes
    while (true) {
        const nextMonth = new Date(tempDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        if (now < nextMonth) break;
        months++;
        tempDate = nextMonth;
        days -= Math.floor((nextMonth - tempDate) / (1000 * 60 * 60 * 24));
    }
    
    const yearText = years === 1 ? 'ano' : 'anos';
    const monthText = months === 1 ? 'mês' : 'meses';
    const dayText = days === 1 ? 'dia' : 'dias';
    const hourText = hours === 1 ? 'hora' : 'horas';
    const minuteText = minutes === 1 ? 'minuto' : 'minutos';
    const secondText = seconds === 1 ? 'segundo' : 'segundos';

    // Atualizar o elemento HTML
    document.getElementById('loveTimer').innerHTML = `
        ${years} ${yearText}, ${months} ${monthText}, ${days} ${dayText},<br>
        ${hours} ${hourText}, ${minutes} ${minuteText} e ${seconds} ${secondText}
    `;
}

// Inicializacao principal
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar o contador
    updateTimer();
    setInterval(updateTimer, 1000);
    
    // Inicializar carrossel do Bootstrap
    new bootstrap.Carousel(document.getElementById('loveCarousel'), {
        interval: 3000,
        wrap: true
    });

    // Carregar o API do YouTube
    loadYoutubeAPI();

    // Inicializar o player de áudio personalizado (importado)
    initializeAudioPlayer();
});