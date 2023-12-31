// Navigation Header transition on scroll
const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.scrollY > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};

// Copyright current year
const copyright = document.querySelector(".copyright");
let date = new Date().getFullYear();

let html = `
    <p>Copyright &copy;2023-${date} Partysape Events. All rights reserved.</p>
`;

if (copyright) {
  copyright.innerHTML = html;
}
