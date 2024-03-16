import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

if (document.querySelector("#hero")) {
  const heroContent = document.querySelectorAll(".hero-content *");

  gsap.from(heroContent, {
    y: 50,
    autoAlpha: 0,
    duration: 2,
    ease: "power3.out",

    stagger: 0.2,
  });
}

if (document.querySelector("#services")) {
  const serviceCards = document.querySelectorAll(".service-cards .card");

  gsap.from(serviceCards, {
    y: 50,
    autoAlpha: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#services",
      start: "top center+=25%",
    },
  });
}

if (document.querySelector("#project-examples")) {
  const projectExamples = document.querySelectorAll(
    "#project-examples .project"
  );

  gsap.from(projectExamples, {
    autoAlpha: 0,
    x: -50,
    duration: 2,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#project-examples",
      start: "top center+=25%",
    },
  });
}

if (document.querySelector(".about-section")) {
  const aboutSections = document.querySelectorAll(".about-section");

  let mm = gsap.matchMedia();
  const breakPoint = 1024;

  mm.add(
    {
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      let { isDesktop, isMobile } = context.conditions;

      aboutSections.forEach((section, index) => {
        for (let i = 0; i < section.children.length; i++) {
          gsap.from(section.children[i], {
            x: () => {
              if (isDesktop && i % 2 === 0) {
                return index % 2 === 0 ? -100 : 100;
              } else if (isDesktop) {
                return index % 2 === 0 ? 100 : -100;
              }
            },
            y: () => {
              if (isMobile) {
                return 50;
              }
            },
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section.children[i],
              start: "top center+=25%",
            },
          });
        }
      });
    }
  );
}

if (document.querySelector("#reviews")) {
  const reviewSlides = document.querySelectorAll("#reviews .swiper-slide");

  gsap.from(reviewSlides, {
    y: 50,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: reviewSlides,
      start: "top center+=25%",
    },
  });

  gsap.from("#reviews .swiper-navigation", {
    y: 50,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: reviewSlides,
      start: "top center+=25%",
    },
  });
}

if (document.querySelector("#team")) {
  const teamSlides = document.querySelectorAll("#team .swiper-slide");

  gsap.from(teamSlides, {
    y: 50,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: teamSlides,
      start: "top center+=25%",
    },
  });

  gsap.from("#team .swiper-navigation", {
    y: 50,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: teamSlides,
      start: "top center+=25%",
    },
  });
}

if (document.querySelector("#footer-hero")) {
  const heroContent = document.querySelectorAll("#footer-hero .container *");

  gsap.from(heroContent, {
    y: 50,
    autoAlpha: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#footer-hero",
      start: "top center+=25%",
    },
  });
}

if (document.querySelector("#contact")) {
  const contactCards = document.querySelectorAll(".contact-card");
  const formContainer = document.querySelector(".form-container");
  const formContainerChildren = document.querySelectorAll(
    ".form-container > *"
  );

  gsap.from(contactCards, {
    y: 50,
    autoAlpha: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: contactCards,
      start: "top center+=25%",
    },
  });

  gsap.from(formContainerChildren, {
    y: 50,
    autoAlpha: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: contactCards,
      start: "top center+=25%",
    },
  });
}
