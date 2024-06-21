const scroll = new LocomotiveScroll({
  el: document.querySelector(".fullview"),
  smooth: true,
});

var tl = gsap.timeline();

tl.to(".fullview", {
  y: "100vh",
  duration: 0,
});

tl.to(".fullview", {
  y: "0vh",
  duration: 1,
  delay: 1,
});

tl.to(".fullview", {
  rotate: 360,
  scale: 1,
  duration: 2,
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
