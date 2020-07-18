import gsap, { TimelineMax } from "gsap";
const tl = new TimelineMax();

export const homeAnimation = (completeAnimation) => {
  tl.from(".line span", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    // .to(".intro-overlay", 0, { css: { display: "none" } })
    .from(".case-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

export const menuOpen = (width) => {
  gsap.to("nav", 0, { css: { display: "block" } });
  gsap.to("body", 0, { css: { overflow: "hidden" } });

  tl.to(".App", {
    duration: 1,
    y: width <= 654 ? "100vh" : "60vh",
    ease: "expo.inOut",
  })
    .to(".hamburger-menu span", {
      duration: 0.6,
      delay: -1,
      scaleX: 0,
      transformOrigin: "50% 0",
      ease: "expo.inOut",
    })
    .to("#Path_1", {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 10, strokeDasharray: 5 },
    })
    .to("#Path_2", {
      duration: 0.4,
      delay: -0.6,
      css: { strokeDashoffset: 10, strokeDasharray: 20 },
    })
    .to("#Line_1", {
      duration: 0.4,
      delay: -0.6,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 18,
      },
    })
    .to("#circle", {
      duration: 0.6,
      delay: -0.8,
      css: { strokeDashoffset: 0 },
    })
    .to(".hamburger-menu-close", {
      duration: 0.6,
      delay: -0.8,
      css: { display: "block" },
    });
};

export const menuClose = () => {
  tl.to(".App", {
    duration: 1,
    y: 0,
    ease: "expo.inOut",
  })
    .to("#circle", {
      duration: 0.6,
      delay: -0.6,
      css: {
        strokeDashoffset: -193,
        strokeDasharray: 227,
      },
    })
    .to("#Path_1", {
      duration: 0.4,
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10,
      },
    })
    .to("#Path_2", {
      duration: 0.4,
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10,
      },
    })
    .to("#Line_1", {
      duration: 0.4,
      delay: -0.6,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 40,
      },
    })
    .to(".hamburger-menu span", {
      duration: 0.6,
      delay: -0.6,
      scaleX: 1,
      transformOrigin: "50% 0",
      ease: "expo.inOut",
    })
    .to(".hamburger-menu-close", {
      css: { display: "none" },
    })
    .to("body", {
      css: { overflow: "auto" },
    })
    .to("nav", {
      css: { display: "block" },
    });
};
