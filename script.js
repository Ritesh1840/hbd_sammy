let musicPlaying = false;

// Toggle BTS song and open video modal
function toggleMusic() {
    const music = document.getElementById("btsSong");
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        document.querySelector(".play-music").innerText = "Play BTS Song";
    } else {
        music.play();
        musicPlaying = true;
        document.querySelector(".play-music").innerText = "Pause BTS Song";
        openModal();  // Open the modal with the video when song plays
    }
}

// Open video modal
function openModal() {
    document.getElementById("videoModal").style.display = "block";
}

// Close video modal
function closeModal() {
    document.getElementById("videoModal").style.display = "none";
    const video = document.getElementById("btsVideo");
    video.src = video.src; // Stop the video
}

// Open image modal
function openImageModal(imageElement) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageElement.src;
    modal.style.display = "block";
}

// Close image modal
function closeImageModal() {
    document.getElementById("imageModal").style.display = "none";
}