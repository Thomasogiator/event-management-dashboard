// $('.carousel').carousel()

function updateImage() {
    const img = document.getElementById('responsiveImage');
    const img2 = document.getElementById('responsiveImage2');
    const img3 = document.getElementById('responsiveImage3');
    const width = window.innerWidth;

    if (width < 768 ) {
        img.src = './assets/firstSlide.jpeg'; // Small image for small screens
        img2.src = './assets/secondSlide.jpeg'; // Small image for small screens
        img3.src = './assets/thirdSlide.jpg'; // Small image for small screens
    } else {
        img.src = './assets/Slide.svg'; // Large image for larger screens
        img2.src = './assets/Slide (1).svg'; // Large image for larger screens
        img3.src = './assets/Slide (2).svg'; // Large image for larger screens
    }
}

// Initial image load
updateImage();

// Update image on window resize
window.addEventListener('resize', updateImage);


// hamburger menu function
let menu_btn = document.querySelector('.hamburger')
let menu_image = document.getElementById('hamburger-img')
let mobile_nav = document.getElementById('mobile-nav')
const images = ['./assets/hamburger.svg', './assets/close.svg'];
let currentImageIndex = 0;

menu_btn.onclick = function(){
    menu_btn.classList.toggle('isactive');
    mobile_nav.classList.toggle('isactive');
    document.body.classList.toggle('no-scroll')
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // Change the image source
    menu_image.src = images[currentImageIndex];
    if(menu_btn.classList.contains('dark') && menu_btn.classList.contains('isactive')){
        ham_menu.src = './assets/close.svg'
    } else if(menu_btn.classList.contains('dark') && !menu_btn.classList.contains('isactive')){
        ham_menu.src = './assets/hamburger2.svg'
    }
}

// Close event modal
let modal_close = document.getElementById('modal-close')
let modal = document.querySelector('.event-modal')

modal_close.onclick = function() {
    modal.close()
}

// Show event modal
let show_event = document.querySelectorAll('.event')
let event_modal = document.querySelector('.event-modal')
show_event.forEach(element => {
    element.onclick = function(){
        event_modal.showModal()
    }
});

function addClass(){
    let allComplete = document.querySelectorAll('.complete')
    let allProgress = document.querySelectorAll('.progress-status')
    let allGreen = document.querySelectorAll('.green')
    let allBlue = document.querySelectorAll('.blue')

    allComplete.forEach(element => {
        element.style.backgroundColor = '#D1FAE5'
        element.style.color = '#10B981'
    })
    allProgress.forEach(element => {
        element.style.backgroundColor = '#DBEAFE'
        element.style.color = '#3B82F6'
    })
    allGreen.forEach(element => {
        element.style.backgroundColor = '#10B981'
    })
    allBlue.forEach(element => {
        element.style.backgroundColor = '#3B82F6'
    })
}

addClass()

function changeIcon(){

}

//Dark mode
let darkMode = document.querySelector('.slider')
let nav = document.querySelectorAll('.mobile-nav')
let header = document.getElementById('container-head')
let nav_el = document.querySelectorAll('.nav-el')
let nav_b = document.querySelectorAll('.nav-b')
let dark_bg = document.querySelectorAll('.dark-bg')
let metrics = document.querySelectorAll('.metrics')
let tool = document.querySelectorAll('.tool')
let tool2 = document.querySelectorAll('.tool2')
let table_head = document.querySelectorAll('.table1-head')
let table_row = document.querySelectorAll('.event')
let menu_change = document.querySelector('.hamburger')
let chart = document.querySelector('.tgraph')
let tool3 = document.querySelector('.tool3')
let navig = document.querySelector('.navig')
let navig2 = document.querySelector('.navig2')
let modal_top = document.querySelector('.event-modal')
let modal_btn = document.querySelector('.modal-btn')
let ham_menu = document.getElementById('hamburger-img')
let main = document.getElementById('main-body')
let footer = document.getElementById('container-footer')
let search = document.getElementById('search')
let first_el = document.getElementById('first-el')
let containerHeader3 = document.getElementById('container-head2')
let allComplet = document.querySelectorAll('.complete')
let allProgres = document.querySelectorAll('.progress-status')
let allGree = document.querySelectorAll('.green')
let allBlu = document.querySelectorAll('.blue')

darkMode.onclick = function(){
    header.classList.toggle('dark')
    menu_change.classList.toggle('dark')
    main.classList.toggle('dark')
    chart.classList.toggle('dark')
    tool3.classList.toggle('dark')
    footer.classList.toggle('dark')
    search.classList.toggle('dark')
    modal_top.classList.toggle('dark')
    modal_top.classList.toggle('dark')
    containerHeader3.classList.toggle('dark')
    navig.classList.toggle('dark')
    navig2.classList.toggle('dark')
    document.body.classList.toggle('dark')
    first_el.classList.toggle('soblue')
    
    nav.forEach(element => {
        element.classList.toggle('dark') 
    }) 
    nav_el.forEach(element => {
        element.classList.toggle('dark') 
    }) 
    nav_b.forEach(element => {
        element.classList.toggle('brighter') 
    }) 
    dark_bg.forEach(element => {
        element.classList.toggle('dark') 
    }) 
    metrics.forEach(element => {
        element.classList.toggle('dark') 
    }) 
    tool.forEach(element => {
        element.classList.toggle('dark') 
    }) 
    tool2.forEach(element => {
        element.classList.toggle('dark') 
    }) 
    table_head.forEach(element => {
        element.classList.toggle('dark') 
    }) 
    table_row.forEach(element => {
        element.classList.toggle('dark') 
    }) 
    allComplet.forEach(element => {
        element.style.backgroundColor = ''
        element.style.border = '1px solid #10B981'
    })
    allProgres.forEach(element => {
        element.style.backgroundColor = ''
        element.style.border = '1px solid #3B82F6'
    })
}

let collapse = document.getElementById('collapse')
let containerHeader = document.getElementById('container-head')
let containerHeader2 = document.getElementById('container-head2')
let containerBody = document.getElementById('main-body')
let firstNav = document.querySelector('.mobile-nav')

collapse.onclick = function(){
    containerHeader.style.setProperty("display", "none", "important");
    containerHeader2.style.setProperty("display", "block", "important");
}

let collapse2 = document.getElementById('collapse2')

collapse2.onclick = function(){
    containerHeader2.style.setProperty("display", "none", "important");
    containerHeader.style.setProperty("display", "block", "important");
}
