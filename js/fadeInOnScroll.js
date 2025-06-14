document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');
    const fadersLeft = document.querySelectorAll('.fade-in-left')
    const fadersRight = document.querySelectorAll('.fade-in-right')

    function checkFadeIn() {
        faders.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    }

    function checkFadeInLeft() {
        fadersLeft.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    }

    function checkFadeInRight() {
        fadersRight.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn(); // Run on load

    window.addEventListener('scroll', checkFadeInLeft);
    checkFadeInLeft(); // Run on load

    window.addEventListener('scroll', checkFadeInRight);
    checkFadeInRight(); // Run on load
});