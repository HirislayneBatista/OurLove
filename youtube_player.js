var player;
const YOUTUBE_PLAYLIST_ID = 'PL6wTXYQgd9eTiNufddjeR3gBWYqa--zyf';

// Função de inicialização da API
// Este callback é chamado automaticamente pelo script do YouTube quando ele é carregado
function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Funções de controle do Player
function onPlayerReady(event) {
    // Adicionar o listener ao botão externo
    document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
}

function togglePlayPause() {
    // Verifica o estado atual do player para alternar entre Pause e Play
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
}

function onPlayerStateChange(event) {
    const btn = document.getElementById('playPauseBtn');
    
    // Altera o texto e o estilo do botão com base no estado do player
    if (event.data === YT.PlayerState.PLAYING) {
        btn.innerHTML = '❚❚ Pausar';
        btn.classList.remove('btn-outline-primary');
        btn.classList.add('btn-outline-warning');
    } else {
        // Inclui Paused (Pausado), Ended (Acabou), Buffering (Carregando), etc.
        btn.innerHTML = '▶ Play';
        btn.classList.remove('btn-outline-warning');
        btn.classList.add('btn-outline-primary');
    }
}

// Função para carregar o script da API do YouTube
export function loadYoutubeAPI() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
