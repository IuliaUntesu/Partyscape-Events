// Navigation Header transition on scroll
const navbar = document.getElementById("navbar");
const navbarMobile = document.getElementById("navbar-mobile");
let scrolled = false;

window.onscroll = function () {
  if (window.scrollY > 100) {
    navbar.classList.remove("top");
    navbarMobile.classList.remove("top");

    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
      navbarMobile.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      navbarMobile.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    navbarMobile.classList.add("top");
    scrolled = false;
  }
};

// Slider Menu
const mobileMenu = document.querySelector(".mobile-menu");
const sidebarMobile = document.querySelector(".sidebar-mobile");
const closeMobileMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");


mobileMenu.addEventListener("click", () => {
  sidebarMobile.classList.add("active");
  document.body.style.overflow = "hidden";
  overlay.classList.add("active");
});

closeMobileMenu.addEventListener("click", () => {
  sidebarMobile.classList.remove("active");
  document.body.style.overflow = "scroll";
  overlay.classList.remove("active");
});


// Copyright current year
const copyright = document.querySelector(".copyright");
let date = new Date().getFullYear();

let html = `
  <p>Copyright &copy;2023-${date} Partysape Events. All rights reserved.</p>
`;

if (copyright) {
  copyright.innerHTML = html;
}
