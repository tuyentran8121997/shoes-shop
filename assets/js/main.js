// SEARCH OVERLAY FULL SCREEN
function openSearch() {
    document.getElementById("searchOverlay").style.display = "block";
    document.body.classList.toggle("lock-scroll");
}

function closeSearch() {
    document.getElementById("searchOverlay").style.display = "none";
    document.body.classList.remove("lock-scroll");
}

// NAVBAR MOBILE
const hamburger = document.querySelector(".hamburger");
const navMenuMobile = document.querySelector(".nav-mobile");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenuMobile.classList.toggle("active");
    document.body.classList.toggle("lock-scroll");
}
const navMobileLink = document.querySelectorAll(".nav-mobile__link");
navMobileLink.forEach(e => e.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenuMobile.classList.remove("active");
    document.body.classList.remove("lock-scroll");
}

// CAROUSEL
const $c = $(".carousel");
$c.slick({
    autoplay: true,
    fade: true,
    prevArrow:".prev-btn",
    nextArrow:".next-btn",
})

// Tab menu
const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");

tabs.forEach((tab, index) =>{
    const pane = panes[index];
    tab.onclick = function() {
        document.querySelector(".tab-item.active").classList.remove("active");
        document.querySelector(".tab-pane.active").classList.remove("active");
        this.classList.add("active");
        pane.classList.add("active");
    }
});

// brands carousel

const $c2 = $(".brand-carousel");
$c2.slick({
    Infinity: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
})

// scroll to top button
const btnScrollToTop = document.querySelector('#btnScrollToTop');
console.log(btnScrollToTop);
btnScrollToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});


