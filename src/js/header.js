import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector("header");
const navLinks = header.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", toggleNav);

navLinks.forEach((link) => {
  if (window.innerWidth < 1024) {
    link.addEventListener("click", toggleNav);
  }
});

function toggleNav() {
  header.classList.toggle("nav-open");
}
