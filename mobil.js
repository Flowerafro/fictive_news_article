//Function to check if element is in viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        // Improved check of viewport for elements exceeding viewport height
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.top >= 0 && rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth))
    );
}

document.addEventListener('scroll', function () {
    if (isInViewport(document.getElementById("intro"))) {
        document.getElementById("background").style.backgroundImage = "url('images/19.jpg')";
    }
    if (isInViewport(document.getElementById("first"))) {
        document.getElementById("background").style.backgroundImage = "url('images/22.jpg')";
    }
    if (isInViewport(document.getElementById("second"))) {
        document.getElementById("background").style.backgroundImage = "url('images/3.jpg')";
    }
    if (isInViewport(document.getElementById("third"))) {
        document.getElementById("background").style.backgroundImage = "url('images/11.jpg')";
    }
    if (isInViewport(document.getElementById("fourth"))) {
        document.getElementById("background").style.backgroundImage = "url('images/25.png')";
    }
}, {
    passive: true
});

