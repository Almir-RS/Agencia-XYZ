const menuBtn = document.querySelector(".header-menu-btn");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  const icon = menuBtn.querySelector("i");
  if (nav.classList.contains("active")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
});

// Close menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuBtn.querySelector("i").classList.replace("fa-times", "fa-bars");
  });
});

// Carousel Logic
const slides = document.querySelectorAll(".imagem-painel");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("mostrar"));
  slides[index].classList.add("mostrar");
}

if (btnNext && btnPrev) {
  btnNext.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  btnPrev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
}


// Scroll to Top Logic
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
