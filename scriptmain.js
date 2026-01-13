let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".team-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
const animations = [
  { id: 'animation1', path: 'animations/step1.json' },
  { id: 'animation2', path: 'animations/step2.json' },
  { id: 'animation3', path: 'animations/step3.json' },
  { id: 'animation4', path: 'animations/step4.json' },
   { id: 'animation5', path: 'animations/medi.json' }

];

animations.forEach(anim => {
  lottie.loadAnimation({
    container: document.getElementById(anim.id),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: anim.path
  });
});

