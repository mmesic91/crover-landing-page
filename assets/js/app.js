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
    window.touchmove = function() {
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

    // fallback mobile scroll
    if (
        "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {

        let observer = new IntersectionObserver(entries => {
            if (entries[0].boundingClientRect.y < 0) {
                document.getElementById("navbar").classList.add("sticky");
            } else {
                document.getElementById("navbar").classList.remove("sticky");
            }
        });
        observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
    }
}

stickyNavbar();

function triggerMobileMenuEvent() {
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

    // elements where value needs to be updated

    let day = document.getElementById(elementId + "-day");
    let hour = document.getElementById(elementId + "-hour");
    let min = document.getElementById(elementId + "-min");
    let sec = document.getElementById(elementId + "-sec");

    // Update the count down every 1 second

    if (day && hour && min && sec) {
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
                day.innerHTML = days;
                hour.innerHTML = hours;
                min.innerHTML = minutes;
                sec.innerHTML = seconds;
            } else {
                clearInterval(x);
                day.innerHTML = "0";
                hour.innerHTML = "0";
                min.innerHTML = "0";
                sec.innerHTML = "0";
            }
        }, 1000);
    }
}

timeCounter("May 17, 2022 00:00:00", "cr-header-card-counter");
timeCounter("May 17, 2022 00:00:00", "cr-header-card-counter-1");
timeCounter("May 17, 2022 00:00:00", "cr-header-card-counter-2");
timeCounter("May 17, 2022 00:00:00", "cr-header-card-counter-card-1");
timeCounter("May 17, 2022 00:00:00", "cr-header-card-counter-card-2");
timeCounter("May 17, 2022 00:00:00", "cr-header-card-counter-card-3");
timeCounter("May 17, 2022 00:00:00", "cr-header-card-counter-card-4");
timeCounter("May 17, 2022 00:00:00", "cr-header-card-counter-mobile-card-1");
timeCounter("May 17, 2022 00:00:00", "cr-header-card-counter-mobile-card-2");
timeCounter("May 17, 2022 00:00:00", "cr-header-card-counter-mobile-card-3");
timeCounter("May 17, 2022 00:00:00", "cr-header-card-counter-mobile-card-4");



// ntf collection slider
document.addEventListener('DOMContentLoaded', function() {

    // ntf collection slider
    var ntfCollection = new Splide('#ntf-collection', {
        height: '10rem',
        focus: 'center',
        autoWidth: true,
    });
    ntfCollection.mount();

    var ntfCollectionMobile = new Splide('#ntf-collection-mobile', );
    ntfCollectionMobile.mount();


    // roadmap events slider
    var roadmapEvents = new Splide('#roadmapEvents', {
        height: '10rem',
        focus: 'center',
        autoWidth: true,
    });
    roadmapEvents.mount();

    var roadmapActivations = new Splide('#roadmapActivations', {
        height: '10rem',
        focus: 'center',
        autoWidth: true,
    });
    roadmapActivations.mount();

    // membership types
    var membershipTypesMobile = new Splide('#membershipTypesMobile', {

    });
    membershipTypesMobile.mount();


    // instagram slider
    var crInstagramSlider = new Splide('#crInstagramSlider', {
        height: '10rem',
        focus: 'center',
        autoWidth: true,
    });
    crInstagramSlider.mount();



});