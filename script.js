// =================================
// Kanaani Hospital
// WEBSITE JAVASCRIPT
// =================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const mainNavigation = document.getElementById("main-navigation");

if (menuToggle && mainNavigation) {

    menuToggle.addEventListener("click", function () {

        const isOpen = mainNavigation.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });


    // CLOSE MENU WHEN A LINK IS CLICKED

    const navigationLinks = mainNavigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNavigation.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    // CLOSE MENU WHEN ESCAPE IS PRESSED

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            mainNavigation.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}


// AUTOMATIC COPYRIGHT YEAR

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// AUTOMATIC HERO PHOTO SLIDER

const heroSlides = document.querySelectorAll(".hero-slide");

if (heroSlides.length > 1) {

    let currentSlide = 0;

    setInterval(function () {

        heroSlides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % heroSlides.length;

        heroSlides[currentSlide].classList.add("active");

    }, 3000);

}
