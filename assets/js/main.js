/*=============== TEXT SPLITTER FOR ANIME.JS ===============*/
// This function wraps every letter in a span so AnimeJS can move them
const splitText = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    const text = element.textContent;
    element.innerHTML = text
      .split("")
      .map(
        (char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`,
      )
      .join("");
    return element.querySelectorAll(".char");
  }
};

const chars1 = splitText(".home_profession-1");
const chars2 = splitText(".home_profession-2");

/*=============== HOME TEXT ANIMATION ===============*/
if (chars1 && chars2) {
  const tl = anime.timeline({ loop: true });

  tl.add({
    targets: chars1,
    translateY: ["100%", "0%"],
    opacity: [0, 1],
    delay: anime.stagger(40),
    duration: 800,
    easing: "easeOutExpo",
  })
    .add({
      targets: chars1,
      translateY: "-100%",
      opacity: [1, 0],
      delay: anime.stagger(40, { start: 2000 }),
      duration: 800,
      easing: "easeInExpo",
    })
    .add({
      targets: chars2,
      translateY: ["100%", "0%"],
      opacity: [0, 1],
      delay: anime.stagger(40),
      duration: 800,
      easing: "easeOutExpo",
    })
    .add({
      targets: chars2,
      translateY: "-100%",
      opacity: [1, 0],
      delay: anime.stagger(40, { start: 2000 }),
      duration: 800,
      easing: "easeInExpo",
    });
}

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects_swiper", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1150: {
      spaceBetween: 48,
    },
  },
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    // Remove active class from all contents
    tabContents.forEach((tc) => tc.classList.remove("work-active"));
    // Add active class to target content
    target.classList.add("work-active");

    // Update active tab button style
    tabs.forEach((t) => t.classList.remove("work-active"));
    tab.classList.add("work-active");
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home_data, .about_image, .work_tabs`);
sr.reveal(`.home_image, .about_data`, { origin: "bottom" });
sr.reveal(`.home_social, .home_cv`, { origin: "left" });
sr.reveal(`.projects_container`, { interval: 100 });

/*=============== SET FOOTER YEAR ===============*/
const footerYear = document.getElementById("footer-year");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

/*=============== SERVICES ACCORDION ===============*/
const servicesCards = document.querySelectorAll(".services_card");

servicesCards.forEach((card) => {
  const button = card.querySelector(".services_button");
  const info = card.querySelector(".services_info");

  // 1. Ensure all cards start closed correctly
  if (info) {
    info.style.height = "0px";
  }

  if (button) {
    button.addEventListener("click", () => {
      const isCardOpen = card.classList.contains("services-open");

      // 2. Close all other cards and reset their heights
      servicesCards.forEach((otherCard) => {
        otherCard.classList.remove("services-open");
        const otherInfo = otherCard.querySelector(".services_info");
        if (otherInfo) {
          otherInfo.style.height = "0px";
        }
      });

      // 3. Open the clicked card if it wasn't already open
      if (!isCardOpen) {
        card.classList.add("services-open");
        // Using scrollHeight allows the div to expand to its natural content size
        info.style.height = info.scrollHeight + "px";
      }
    });
  }
});
