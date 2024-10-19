$('.carousel').carousel()

function updateImage() {
    const img = document.getElementById('responsiveImage');
    const width = window.innerWidth;

    if (width < 768 ) {
        img.src = './assets/Slide.svg'; // Small image for small screens
    } else {
        img.src = './assets/hamburger.svg'; // Large image for larger screens
    }
}

// Initial image load
updateImage();

// Update image on window resize
window.addEventListener('resize', updateImage);
