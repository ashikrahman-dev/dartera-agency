/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */



$(document).ready(function () {
    $(function () {
        if ($("#portfolio-slider").length) {
            $("#portfolio-slider").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                animateOut: "fadeOut",
                smartSpeed: 2500,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    767: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    },
                },
            });
        }
    });

    // testimonial-slider
    $(function () {
        if ($("#testimonial-slider").length) {
            $("#testimonial-slider").owlCarousel({
                loop: true,
                center: true,
                items: 3,
                margin: 30,
                autoplay: true,
                nav: true,
                autoplayTimeout: 2500,
                animateOut: "fadeOut",
                smartSpeed: 2500,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    767: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    },
                },
            });
        }
    });

    // Projects-slider
    $(function () {
        if ($("#projects-slider").length) {
            $("#projects-slider").owlCarousel({
                loop: true,
                center: true,
                items: 5,
                margin: 30,
                autoplay: true,
                nav: false,
                autoplayTimeout: 2500,
                animateOut: "fadeOut",
                smartSpeed: 2500,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    767: {
                        items: 3,
                    },
                    1200: {
                        items: 5,
                    },
                },
            });
        }
    });

    // Web Design Portfolio -slider
    $(function () {
        if ($("#webDesign-portfolio-slider").length) {
            $("#webDesign-portfolio-slider").owlCarousel({
                loop: true,
                center: true,
                items: 5,
                margin: 30,
                autoplay: true,
                nav: false,
                autoplayTimeout: 2500,
                animateOut: "fadeOut",
                smartSpeed: 2500,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                stagePadding: 400,
                responsive: {
                    0: {
                        items: 1,
                    },
                    767: {
                        items: 1,
                    },
                    1200: {
                        items: 3,
                    },
                },
            });
        }
    });

    // Projects-slider
    $(function () {
        if ($("#arbeit-slider").length) {
            $("#arbeit-slider").owlCarousel({
                loop: true,
                center: true,
                items: 3,
                margin: 30,
                autoplay: true,
                nav: false,
                autoplayTimeout: 3500,
                animateOut: "fadeOut",
                smartSpeed: 2500,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                stagePadding: 120,
                responsive: {
                    0: {
                        items: 1,
                    },
                    767: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    },
                },
            });
        }
    });

    // Common Slider

    $(function () {
        if ($("#common-slider").length) {
            $("#common-slider").owlCarousel({
                loop: true,
                items: 3,
                margin: 30,
                autoplay: false,
                nav: true,
                autoplayTimeout: 2500,
                animateOut: "fadeOut",
                smartSpeed: 2500,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right.svg' class='img-fluid' />"],
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    575: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    },
                },
            });
        }
    });


    // process2
    $(function () {
        if ($("#process2").length) {
            $("#process2").owlCarousel({
                loop: false,
                items: 3,
                margin: 30,
                center:true,
                autoplay: true,
                rewindNav: true,
                nav: true,
                autoplayTimeout: 2500,
                animateOut: "fadeOut",
                smartSpeed: 2500,
                navText: ["<i class='ni ni-arrow-long-left text-cyan fs-4'></i>", "<i class='ni ni-arrow-long-right text-cyan fs-4'></i>"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    575: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    },
                },
            });
        }
    });
    // process2 -end



    // process Slider
    $(function () {
        if ($(".process-slider-active").length) {
            $(".process-slider-active").owlCarousel({
                loop: true,
                items: 3,
                margin: 30,
                autoplay: false,
                nav: true,
                stagePadding: 90,
                autoplayTimeout: 2500,
                animateOut: "fadeOut",
                smartSpeed: 2500,
                navText: ["<i class='ni ni-arrow-long-left text-cyan fs-4'></i>", "<i class='ni ni-arrow-long-right text-cyan fs-4'></i>"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    575: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    },
                },
            });
        }
    });






    // wow js init
    // $(function () {
    //   var wow = new WOW({
    //     animateClass: "animated",
    //     mobile: true,
    //   });
    //   wow.init();
    // });
});


// Custom Js 

// custom dropdown

$(function () {
    if ($('.navbar').length) {
        console.log("i am ok");
        $('.sidebar').on('click', function (e) {
            e.preventDefault();
            $(this).closest('body').find('.nav-dropdown').toggleClass('navbar-toggle')
            $(this).closest('body').find('.navbar-nav').toggleClass('top-menu-toggle')
            $(this).closest('body').find('.contactInfo ').toggleClass('top-menu-toggle')
            $(this).closest('body').find('.language ').toggleClass('top-menu-toggle')
            $(this).closest('body').find('.navbar').toggleClass('change-nav-bg')
            $(this).closest('body').find('.banner ').toggleClass('banner-mt')
            $(this).closest('body').find('.subpage-page-banner2').toggleClass('banner-mt')
            $(this).closest('body').find('.subpage-page-banner3').toggleClass('banner-mt')
            $(this).closest('body').find('.subpage-page-banner').toggleClass('banner-mt')
            $(this).closest('body').toggleClass('body-bg')
            $(this).closest('body').find('.sidebarToggle').toggleClass('d-none')
            $(this).closest('body').find('.sidebarClose').toggleClass('d-none')

        });
    }
})


// custom accordion
$(function () {
    if ($('.accordion-list').length) {
        $('.accordion-list').on('click', '.accordion-title', function (e) {
            e.preventDefault();
            // remove siblings activities
            $(this).closest('.accordion-list-item').siblings().removeClass('open').find('.accordion-desc').slideUp();
            $(this).closest('.accordion-list-item').siblings().find('.ni').addClass('ni-plus-sm').removeClass('ni-minus');

            // add slideToggle into this
            $(this).closest('.accordion-list-item').toggleClass('open').find('.accordion-desc').slideToggle();
            $(this).find('.ni').toggleClass('ni-plus-sm ni-minus');
        });
    }
});





// Cookie popup

const cookieContainer = document.querySelector(".cookie-popup");
const agreeBtn = document.getElementById("agree-btn");

setTimeout(() => {
    cookieContainer.classList.remove("hide");
}, 3000);

agreeBtn.addEventListener("click", () => {
    cookieContainer.classList.add("hide");
});





//counter

if ($('.price-counter').length) {
    $(".price-counter").counterUp({
        delay: 10,
        time: 1500
    })
};





//Scroll to top -/ Script
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 800
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





// Filterable portfolio 

const filterNav = document.querySelector(".filter-nav"),
    filterableItems = document.querySelectorAll(".filterable-item");

filterNav.addEventListener("click", (event) => {

    if (event.target.classList.contains("filter-nav-item")) {


        // deactivate existing active 'filter-item'
        filterNav.querySelector(".active").classList.remove("active");

        // activate new 'filter-item'
        event.target.classList.add("active");

        const filterValue = event.target.getAttribute("data-filter");

        filterableItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});