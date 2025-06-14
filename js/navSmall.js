document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburgerMenu');
    const navList = document.querySelector('.navList');
    const navBar = document.querySelector('.navBar');
    let lastScrollY = window.scrollY;
    let ticking = false;

    hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
    navBar.classList.toggle('active');
    document.body.classList.toggle('no-scroll', navList.classList.contains('active'));
    });

    function onScroll() {
        if (window.innerWidth > 1140) {
            navBar.classList.remove('navBar--hidden');
            return;
        }
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
            // Scrolling down
            navBar.classList.add('navBar--hidden');
        } else {
            // Scrolling up
            navBar.classList.remove('navBar--hidden');
        }
        lastScrollY = window.scrollY;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                onScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
});