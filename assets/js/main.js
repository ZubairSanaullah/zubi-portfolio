/*=============== HOME SPLIT TEXT ===============*/
const { animate, text, stagger } = anime;

const { chars: chars1 } = text.split(".home_profession-1", { chars: true });
const { chars: chars2 } = text.split(".home_profession-2", { chars: true });

animate(chars1, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper(".projects_swiper", {
  loop: true,
  spaceBetween: 24,
  slidesPerview: "auto",
  grabCursor: true,
  speed: 600,

  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetSelector = tab.dataset.target,
      targetContent = document.querySelector(targetSelector);

    //Disables all content and active tabs
    tabContents.forEach((content) => content.classList.remove("work-active"));
    tabs.forEach((t) => t.classList.remove("work-active"));

    //Adds the active class to the clicked tab and its content
    tab.classList.add("work-active");
    targetContent.classList.add("work-active");
  });
});

/*=============== SERVICES ACCORDION ===============*/

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/

/*=============== COPY EMAIL IN CONTACT ===============*/

/*=============== CURRENT YEAR OF THE FOOTER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== CUSTOM CURSOR ===============*/

/* Hide custom cursor on links */

/*=============== SCROLL REVEAL ANIMATION ===============*/
