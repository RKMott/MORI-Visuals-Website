document.addEventListener("DOMContentLoaded", function() {
    const tracks = document.querySelectorAll('.carousel-track');
    const testimonialSection = document.querySelector('.testimonialsSection');

    tracks.forEach(track => {
        const inner = track.querySelector('.carousel-inner');
        inner.innerHTML += inner.innerHTML; // duplicate for infinite

        const isReverse = track.classList.contains('tier-2');
        const normalSpeed = isReverse ? -0.3 : 0.3;
        const initialSpeed = isReverse ? -5 : 5;
        let currentSpeed = initialSpeed;

        let isHovered = false;
        let contentWidth = 0;
        let translateX = 0;
        let animationStart = null;
        const animationDuration = 2000;

        setTimeout(() => {
            contentWidth = inner.scrollWidth / 2;
            translateX = isReverse ? -contentWidth : 0;

            function scrollStep(ts) {
                if (!animationStart) animationStart = ts;
                let elapsed = ts - animationStart;
                if (elapsed < animationDuration) {
                    let t = elapsed / animationDuration;
                    currentSpeed = initialSpeed + (normalSpeed - initialSpeed) * Math.sin((t * Math.PI) / 2);
                } else {
                    currentSpeed = normalSpeed;
                }

                if (!isHovered) {
                    translateX -= currentSpeed;
                    // Looping logic
                    if (translateX <= -contentWidth) translateX += contentWidth;
                    if (translateX >= 0) translateX -= contentWidth;
                    inner.style.transform = `translateX(${translateX}px)`;
                }
                requestAnimationFrame(scrollStep);
            }

            track.addEventListener('mouseenter', () => { isHovered = true; });
            track.addEventListener('mouseleave', () => { isHovered = false; });

            requestAnimationFrame(scrollStep);
        }, 100);
    });

    // Intersection Observer as before...
    if (testimonialSection) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tracks.forEach(track => {
                        track.classList.add('visible');
                        track.classList.remove('slide-in-right', 'slide-in-left');
                    });
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.01 });

        observer.observe(testimonialSection);
    }
});