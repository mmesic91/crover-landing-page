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

function toggleMenuHamburger() {
  var element = document.getElementById("navbar");
  console.log(element.classList);
  if(!element.classList.contains('responsive')){
	element.classList.add("responsive");
  } else {
    element.classList.remove("responsive");
  }
}