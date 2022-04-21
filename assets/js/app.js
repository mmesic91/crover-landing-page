// navbar on scroll handler
let stickyNavbar = function() {
    // Get the navbar
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var navbarPosition = navbar.offsetTop;

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {
        navigationHandler()
    };

    //on init
    navigationHandler()

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function navigationHandler() {
        if (window.pageYOffset > navbarPosition || window.scrollY > 0) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
}

stickyNavbar();

function showMobileMenu() {
    var element = document.getElementById("navbar");
    if (!element.classList.contains('responsive')) {
        element.classList.add("responsive");
    } else {
        element.classList.remove("responsive");
    }
}

let timeCounter = function(date, elementId) {
    // Set the date we're counting down to
    var countDownDate = new Date(date).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        //If the count down is finished, write some text
        if (distance > 0) {
            document.getElementById(elementId + "-day").innerHTML = days;
            document.getElementById(elementId + "-hour").innerHTML = hours;
            document.getElementById(elementId + "-min").innerHTML = minutes;
            document.getElementById(elementId + "-sec").innerHTML = seconds;
        } else {
            clearInterval(x);
            document.getElementById(elementId + "-day").innerHTML = "0";
            document.getElementById(elementId + "-hour").innerHTML = "0";
            document.getElementById(elementId + "-min").innerHTML = "0";
            document.getElementById(elementId + "-sec").innerHTML = "0";
        }
    }, 1000);
}

timeCounter("May 16, 2022 13:05:25", "cr-header-card-counter");
timeCounter("May 16, 2022 13:05:25", "cr-header-card-counter-1");
timeCounter("May 16, 2022 13:05:25", "cr-header-card-counter-2");


// ntf collection slider
document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('#ntf-collection', {
        type: 'loop',
        height: '10rem',
        focus: 'center',
        autoWidth: true,
    });

    splide.mount();
});