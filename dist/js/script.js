//1. cursor
var cursor = document.querySelector(".cursor"),
  cursorScale = document.querySelectorAll(".cursor-scale"),
  mouseX = 0,
  mouseY = 0;

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;

  gsap.to(cursor, {
    left: mouseX,
    top: mouseY,
    duration: 0.3,
  });
});

window.addEventListener("mouseover", function (e) {
  gsap.set(cursor, {
    css: {
      opacity: 1,
    },
  });
});

cursorScale.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
  });

  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow");
  });
});

/*================================ Init Function on window load ==================================*/
$(window).on("load", function () {
  preloaderInit();
});

/*================================
    4. Preloader
    ==================================*/
function preloaderInit() {
  $(".preloader").remove();
}

// 1. slicknav
$(function () {
  $("#menu").slicknav({
    closeOnClick: true,
  });
});

// 2. Navigation Bar On Scroll background color
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// 2. One Page Scroll Site Navigation Plugin With jQuery
jQuery(".scroll").onePgaeNav({
  wrapper: "#onepage-nav",
});

jQuery(".scroll-div").onePgaeNav({
  wrapper: "#onepage-nav-two",
});

// gsap animation

gsap.defaults({ duration: 0.6 });

const tl = gsap.timeline();
tl.pause();
tl.from(".large-menu a", {
  x: 15,
  opacity: 0,
  stagger: 0.1,
});
tl.from(
  ".hero-content > *",
  {
    y: 100,
    opacity: 0,
    ease: "power2.inOut",
    stagger: 0.05,
  },
  0
);
tl.from(".hero-content > h4 img", {
  x: -30,
  opacity: 0,
  ease: "expo.inOut",
});

const tl2 = gsap.timeline();
tl2.pause();
tl2.from(".hero-right-content", {
  rotation: 10,
  opacity: 0,
  ease: "power1.inOut",
});
tl2.from(
  ".hero-right-content > div",
  {
    scale: 0.9,
    opacity: 0,
    ease: "elastic.inOut",
  },
  0.5
);
tl2.from(".avatar", {
  opacity: 0,
  ease: "power1.inOut",
  // scale: 0.5,
  rotation: 2,
});
tl2.from(
  ".hero-right-content > img",
  {
    y: 5,
    opacity: 0,
    ease: "power2.inOut",
    stagger: 0.15,
  },
  0.5
);
tl2.from(
  [".hero-right-content a", ".hero-right-content p"],
  {
    x: 10,
    opacity: 0,
    rotation: 10,
    ease: "expo.inOut",
    stagger: 0.1,
  },
  1
);

$(window).on("load", function () {
  tl.play();
  tl2.play();
});

// s
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// accordion
const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (event) => {
    accordionHeader.classList.toggle("active");
    const accordionBody = accordionHeader.nextElementSibling;
    if (accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  });
});

// s
$(".play").magnificPopup({
  type: "iframe",
  // other options
});
