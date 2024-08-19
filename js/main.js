function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "nav-links") {
        x.className += " responsive";
    } else {
        x.className = "nav-links";
    }
}
// for  first slider

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    initialSlide: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-custom',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },

});

// mySwiper-review

var swiper = new Swiper(".mySwiper-review", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    initialSlide: 0,
    autoplay: {
        delay: 2300,
        disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },

});