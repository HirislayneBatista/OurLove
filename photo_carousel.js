export function setupPhotoCarousel() {
    const carouselHTML = `
        <div id="loveCarousel" class="carousel slide mb-4 mx-auto" style="max-width: 230px;" data-bs-ride="carousel">
            <div class="carousel-inner rounded">
                <div class="carousel-item active">
                    <img src="fotos/Foto1.jpg" class="d-block w-100 carousel-img" alt="16-11-2024">
                </div>
                <div class="carousel-item">
                    <img src="fotos/Foto13.jpg" class="d-block w-100 carousel-img" alt="24-11-2024">
                </div>
                <div class="carousel-item">
                    <img src="fotos/Foto2.jpg" class="d-block w-100 carousel-img" alt="22-12-2024">
                </div>
                <div class="carousel-item">
                    <img src="fotos/Foto4.jpg" class="d-block w-100 carousel-img" alt="20-12-2024">
                </div>
                <div class="carousel-item">
                    <img src="fotos/Foto3.jpg" class="d-block w-100 carousel-img" alt="24-12-2024">
                </div>
                <div class="carousel-item">
                    <img src="fotos/Foto5.jpg" class="d-block w-100 carousel-img" alt="03-03-2025">
                </div>
                <div class="carousel-item">
                    <img src="fotos/Foto6.jpg" class="d-block w-100 carousel-img" alt="04-03-2025">
                </div>
                <div class="carousel-item">
                    <img src="fotos/Foto7.jpg" class="d-block w-100 carousel-img" alt="22-05-2025">
                </div>
                <div class="carousel-item">
                    <img src="fotos/Foto8.jpg" class="d-block w-100 carousel-img" alt="22-05-2025">
                </div>
                <div class="carousel-item">
                    <img src="fotos/Foto9.jpg" class="d-block w-100 carousel-img" alt="12-06-2025">
                </div>
                <div class="carousel-item">
                    <img src="fotos/Foto10.jpg" class="d-block w-100 carousel-img" alt="06-07-2025">
                </div>
                <div class="carousel-item">
                    <img src="fotos/Foto11.jpg" class="d-block w-100 carousel-img" alt="28-07-2025">
                </div>
                <div class="carousel-item">
                    <img src="fotos/Foto12.jpg" class="d-block w-100 carousel-img" alt="21-09-2025">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#loveCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#loveCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
            </button>
        </div>
    `;
    
    // Injeta o HTML do carrossel no corpo principal do site. 
    // **ATENÇÃO**: Você precisa decidir ONDE no seu HTML existente ele deve ir.
    // Por simplicidade, vamos supor que você insere isso no local onde estava antes, 
    // mas como o JS não pode injetar no meio de outras tags, o jeito mais seguro 
    // é criar um placeholder no HTML e usar o JS para preenchê-lo.

    // Para este exemplo, vamos injetar ele logo antes do contador (h3).
    // Se você for usar injeção via JS, crie uma div placeholder: <div id="carouselPlaceholder"></div>
    
    // **ASSUMINDO QUE VOCÊ JÁ REMOVEU O CARROSSEL DO INDEX.HTML E DEIXOU UM  NO LUGAR**
    const container = document.getElementById('carouselContainer');
    if (container) {
        container.innerHTML = carouselHTML;
        
        // Inicializa o carrossel do Bootstrap após a injeção do HTML
        new bootstrap.Carousel(document.getElementById('loveCarousel'), {
            interval: 3000,
            wrap: true
        });
    } else {
        console.error("Container para o carrossel não encontrado.");
    }
}