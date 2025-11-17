import { setupPhotoCarousel } from './photo_carousel.js';

// Data de inicio do nosso relacionamento (15/11/2024 as 18:00)
const startDate = new Date(2024, 10, 15, 18, 0, 0);

function updateTimer() {
    const now  = new Date();
    const diff = now - startDate; 
    
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));

    const yearsDiff  = now.getFullYear() - startDate.getFullYear();
    const monthsDiff = now.getMonth() - startDate.getMonth();

    const isDayEarlier        = now.getDate() < startDate.getDate();
    const needsYearAdjustment = (now.getMonth() < startDate.getMonth()) || 
                                (now.getMonth() === startDate.getMonth() && isDayEarlier);

    const years  = yearsDiff - (needsYearAdjustment ? 1 : 0);
    const months = (yearsDiff * 12 + monthsDiff) - (isDayEarlier ? 1 : 0);

    // Formatação
    const yearText   = years === 1   ? 'Ano' : 'Anos';
    const monthText  = months === 1  ? 'Mês' : 'Meses';
    const dayText    = days === 1    ? 'Dia' : 'Dias';
    const hourText   = hours === 1   ? 'Hora' : 'Horas';
    const minuteText = minutes === 1 ? 'Minuto' : 'Minutos';
    const secondText = seconds === 1 ? 'Segundo' : 'Segundos';

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
    setupPhotoCarousel();
});