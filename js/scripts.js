// This file contains the JavaScript code for the animated movies website.
// It includes CDN links for JavaScript libraries to implement interactive features.

document.addEventListener('DOMContentLoaded', function() {
    // Example of using a CDN library for animations (e.g., Animate.css)
    const animatedElements = document.querySelectorAll('.animate');

    animatedElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.add('animated', 'bounce');
        });

        element.addEventListener('animationend', () => {
            element.classList.remove('animated', 'bounce');
        });
    });

    // 為每部電影添加懸停動畫效果
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        movie.addEventListener('mouseover', () => {
            anime({
                targets: movie,
                scale: 1.1,
                duration: 300,
                easing: 'easeInOutQuad'
            });
        });

        movie.addEventListener('mouseout', () => {
            anime({
                targets: movie,
                scale: 1,
                duration: 300,
                easing: 'easeInOutQuad'
            });
        });
    });

    // Additional JavaScript functionality can be added here
});