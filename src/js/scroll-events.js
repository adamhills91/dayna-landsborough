import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-in-and-up").forEach((element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "Power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      },
    }
  );
});

const tl = gsap.timeline({
  defaults: {
    duration: 2,
    ease: "power2.out",
  },
});

// Add animations to the timeline
tl.fromTo("#hero h1", { opacity: 0 }, { opacity: 1, delay: 0.2 })
  .fromTo("#hero .copy-container", { opacity: 0 }, { opacity: 1 }, "<+=0.2")
  .fromTo("#hero .button", { opacity: 0 }, { opacity: 1 }, "<+=0.2")
  .fromTo(
    "#hero .image-container",
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0 },
    "<+=0.2"
  );
