// cart

let cartCount = document.getElementById("cartCount");

// Get cart count from Local Storage
let cartItems = parseInt(localStorage.getItem("cartItems")) || 0;



const updateCartCount = () => {

    if (cartCount) {

        cartCount.textContent = cartItems;

        if (cartItems > 0) {

            cartCount.classList.remove("hidden");

        } else {

            cartCount.classList.add("hidden");

        }

    }

};


// Update cart count when page loads
updateCartCount();



// =========================================
// ADD TO CART
// =========================================

$(document).on("click", ".cart-btn, .category-cart-btn", function () {

    // Increase cart count
    cartItems++;


    // Save cart count in Local Storage
    localStorage.setItem("cartItems", cartItems);


    // Update cart count
    updateCartCount();


    // Change button state
    $(this).addClass("cart-added");

    $(this).html(
        '<i class="fa-solid fa-check"></i>'
    );


    // Save clicked button
    let button = $(this);


    // Return cart icon after 1 second
    setTimeout(() => {

        button.html(
            '<i class="fa-solid fa-cart-shopping"></i>'
        );

    }, 1000);

});



// =========================================
// DOCUMENT READY
// =========================================

$(document).ready(() => {


    // =========================================
    // SEC3 OWL CAROUSEL
    // =========================================

    $(".sec3-carousel").owlCarousel({

        items: 6,

        margin: 12,

        nav: true,

        loop: true,

        dots: true,

        navText: [

            '<i class="fa-solid fa-chevron-left"></i>',

            '<i class="fa-solid fa-chevron-right"></i>'

        ],

        responsive: {

            0: {
                items: 2
            },

            576: {
                items: 3
            },

            768: {
                items: 4
            },

            992: {
                items: 6
            }

        }

    });



    // =========================================
    // SEC9 OWL CAROUSEL
    // =========================================

    $(".sec9-carousel").owlCarousel({

        items: 6,

        margin: 8,

        nav: true,

        loop: true,

        dots: false,

        navText: [

            '<i class="fa-solid fa-chevron-left"></i>',

            '<i class="fa-solid fa-chevron-right"></i>'

        ],

        responsive: {

            0: {
                items: 2
            },

            576: {
                items: 3
            },

            768: {
                items: 4
            },

            992: {
                items: 6
            }

        }

    });



    // =========================================
    // SEC11 ARTICLES SLIDER
    // =========================================

    let sec11Carousel = $(".sec11-carousel").owlCarousel({

        items: 5,

        margin: 15,

        loop: true,

        nav: false,

        dots: false,

        autoplay: false,

        responsive: {

            0: {
                items: 1
            },

            576: {
                items: 2
            },

            768: {
                items: 3
            },

            992: {
                items: 5
            }

        }

    });



    // =========================================
    // SEC11 PREVIOUS BUTTON
    // =========================================

    $(".sec11-prev").click(() => {

        sec11Carousel.trigger("prev.owl.carousel");

    });



    // =========================================
    // SEC11 NEXT BUTTON
    // =========================================

    $(".sec11-next").click(() => {

        sec11Carousel.trigger("next.owl.carousel");

    });

});



// =========================================
// SEC9 TIMER
// =========================================

let timer = 14 * 60 + 49;

let timerElement =
    document.getElementById("sec9Timer");
let countdown = setInterval(() => {
    let minutes =
        Math.floor(timer / 60);
    let seconds =
        timer % 60;
    seconds =
        seconds < 10
            ? "0" + seconds
            : seconds;

    if (timerElement) {
        timerElement.textContent =
            minutes +
            ":" +
            seconds +
            " MINS LEFT, HURRY!";

    }

    timer--;

    if (timer < 0) {

        clearInterval(countdown);


        if (timerElement) {

            timerElement.textContent =
                "00:00 MINS LEFT, HURRY!";

        }

    }

}, 1000);