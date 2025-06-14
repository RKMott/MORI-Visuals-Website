const images = [
    'images/header/header1.jpg',
    'images/header/header2.jpg',
    'images/header/header3.jpg'
];

const bgEls = document.querySelectorAll('.headerSlideshow .slideshow-bg');
let currentDiv = 0;
let currentImg = 0;

// Initialize: set first image and make first div active
bgEls[0].style.backgroundImage = `url('${images[0]}')`;
bgEls[0].classList.add('active');
bgEls[1].classList.remove('active');

setInterval(() => {
    // Next image and div
    const nextImg = (currentImg + 1) % images.length;
    const nextDiv = (currentDiv + 1) % 2;

    // Set next image on hidden div
    bgEls[nextDiv].style.backgroundImage = `url('${images[nextImg]}')`;

    // Crossfade
    bgEls[nextDiv].classList.add('active');
    bgEls[currentDiv].classList.remove('active');

    // Update trackers
    currentDiv = nextDiv;
    currentImg = nextImg;
}, 3000);