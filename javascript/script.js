// Mobile burger menu
const hamburger = document.getElementById("navHamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");

    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
});

// Close on any mobile menu link click
mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    });
});

// Scroll-triggered reveal
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el) => io.observe(el));

// Nav scroll state
window.addEventListener(
  "scroll",
  () => {
    document
      .getElementById("mainNav")
      .classList.toggle("scrolled", window.scrollY > 60);
  },
  { passive: true },
);