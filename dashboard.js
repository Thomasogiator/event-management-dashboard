// $('.carousel').carousel()

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

const handleMenu = () =>{
    let menu_btn = document.querySelector('.hamburger')
    let menu_image = document.querySelector('hamburger-img')

    menu_btn.onclick = function(){
        menu_btn.classList.toggle('isactive')
        menu_image.src === './assets/close.svg'
    }
    // alert('clicked')
    // console.log('this is it');
    
}
