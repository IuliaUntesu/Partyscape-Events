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

// Responsive navbar
// if (window.matchMedia("max-width: 1024px")) {
//   console.log("test")
//   navbar.style.display = "none";
//   navbarMobile.style.display = "flex";
// } else if (window.matchMedia("min-width: 1024px")) {
//   console.log("test2")
//   navbar.style.display = "flex";
//   navbarMobile.style.display = "none";
// }

// Copyright current year
const copyright = document.querySelector(".copyright");
let date = new Date().getFullYear();

let html = `
  <p>Copyright &copy;2023-${date} Partysape Events. All rights reserved.</p>
`;

if (copyright) {
  copyright.innerHTML = html;
}
