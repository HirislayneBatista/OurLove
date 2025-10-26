let audioPlayer;
let playPauseBtn;
let prevBtn;
let nextBtn;
let currentTrackInfo;
let currentTrackIndex = 0;
let playlist = []; // Armazenará as músicas disponíveis

export function initializeAudioPlayer() {
    audioPlayer = document.getElementById('loveAudioPlayer');
    playPauseBtn = document.getElementById('playPauseBtn');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    currentTrackInfo = document.getElementById('currentTrackInfo');

    // Preenche a playlist com as fontes do HTML
    const sources = audioPlayer.querySelectorAll('source');
    sources.forEach(source => {
        playlist.push({
            src: source.src,
            title: source.title || 'Música Desconhecida'
        });
    });

    // Garante que haja pelo menos uma música
    if (playlist.length > 0) {
        audioPlayer.src = playlist[currentTrackIndex].src;
        updateTrackInfo();
    } else {
        playPauseBtn.disabled = true;
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        currentTrackInfo.textContent = "Nenhuma música na playlist.";
        return;
    }

    // Event Listeners
    playPauseBtn.addEventListener('click', togglePlayPauseAudio);
    prevBtn.addEventListener('click', playPreviousTrack);
    nextBtn.addEventListener('click', playNextTrack);
    audioPlayer.addEventListener('ended', playNextTrack); // Toca a próxima automaticamente
    audioPlayer.addEventListener('pause', updatePlayPauseButton);
    audioPlayer.addEventListener('play', updatePlayPauseButton);
}

function togglePlayPauseAudio() {
    if (audioPlayer.paused) {
        audioPlayer.play().catch(error => {
            console.error("Autoplay foi bloqueado:", error);
            alert("O navegador bloqueou a reprodução automática. Por favor, clique no botão de Play novamente.");
            updatePlayPauseButton(); 
        });
    } else {
        audioPlayer.pause();
    }
    updatePlayPauseButton();
}

function updatePlayPauseButton() {
    if (audioPlayer.paused) {
        playPauseBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
            </svg>
        `;
    } else {
        playPauseBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m2.5 0A1.5 1.5 0 0 1 10 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m2.5 0A1.5 1.5 0 0 1 13 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
            </svg>
        `;
    }
}

function updateTrackInfo() {
    if (playlist.length > 0) {
        currentTrackInfo.textContent = `Música atual: ${playlist[currentTrackIndex].title}`;
    }
}

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadAndPlayCurrentTrack();
}

function playPreviousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadAndPlayCurrentTrack();
}

function loadAndPlayCurrentTrack() {
    audioPlayer.src = playlist[currentTrackIndex].src;
    audioPlayer.load(); 
    audioPlayer.play().catch(error => {
        console.error("Autoplay foi bloqueado ao trocar de música:", error);
        alert("O navegador bloqueou a reprodução automática da próxima música. Por favor, clique no botão de Play.");
        updatePlayPauseButton();
    });
    updateTrackInfo();
    updatePlayPauseButton();
}