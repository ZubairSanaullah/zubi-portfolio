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
const swiperProjects = new Swiper('.projects_swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
})


/*=============== SET FOOTER YEAR ===============*/
const footerYear = document.getElementById("footer-year");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

/*=============== SERVICES ACCORDION ===============*/
// const servicesCards = document.querySelectorAll(".services_card");

// servicesCards.forEach((card) => {
//   const button = card.querySelector(".services_button");
//   const info = card.querySelector(".services_info");

//   // 1. Ensure all cards start closed correctly
//   if (info) {
//     info.style.height = "0px";
//   }

//   if (button) {
//     button.addEventListener("click", () => {
//       const isCardOpen = card.classList.contains("services-open");

//       // 2. Close all other cards and reset their heights
//       servicesCards.forEach((otherCard) => {
//         otherCard.classList.remove("services-open");
//         const otherInfo = otherCard.querySelector(".services_info");
//         if (otherInfo) {
//           otherInfo.style.height = "0px";
//         }
//       });

//       // 3. Open the clicked card if it wasn't already open
//       if (!isCardOpen) {
//         card.classList.add("services-open");
//         // Using scrollHeight allows the div to expand to its natural content size
//         info.style.height = info.scrollHeight + "px";
//       }
//     });
//   }
// });

const servicesButton = document.querySelectorAll('.services_button');

servicesButton.forEach(button => {
  // Add your height 
  const heightInfo = document.querySelector('.services_info')
  heightInfo.style.height = heightInfo.scrollHeight + 'px'

  button.addEventListener('click', () => {
    const servicesCards = document.querySelectorAll('.services_card'),
      currentCard = button.parentNode,
      currentInfo = currentCard.querySelector('.services_info')
    isCardOpen = currentCard.classList.contains('services-open')

    // Close all other services info
    servicesCards.forEach(card => {
      card.classList.replace('services-open', 'services-close')

      const info = card.querySelector('.services_info')
      info.style.height = '0'
    })

    // Open the clicked card if it wasn't already open
    if (!isCardOpen) {
      currentCard.classList.replace('services-close', 'services-open')
      currentInfo.style.height = currentInfo.scrollHeight + 'px'
    }
  })
})


// ================== Copy Email in Contact Section ==================
const copyBtn = document.getElementById('contact-btn'),
  copyEmail = document.getElementById('contact-email').textContent;

copyBtn.addEventListener('click', () => {
  // Use the clipboard API to copy the email
  navigator.clipboard.writeText(copyEmail).then(() => {
    copyBtn.innerHTML = 'Email Copied! <i class="ri-check-line"></i>';

    // Restore the button text after 2 seconds
    setTimeout(() => {
      copyBtn.innerHTML = 'Copy Email <i class="ri-mail-fill"></i>';
    }, 2000);
  });
});

// ================== Current Year ==================

const textYear = document.getElementById("footer-year"),
  year = new Date().getFullYear();

textYear.textContent = year;

// ================== Scroll Sections Active Link ==================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 100,
      sectionId = current.getAttribute('id'),
      /* Use template literals to inject the variable */
      navItem = document.querySelector(`.nav_menu a[href*=${sectionId}]`);

    if (navItem) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItem.classList.add('active-link');
      } else {
        navItem.classList.remove('active-link');
      }
    }
  });
});

// ================== Custom Cursor ==================
const cursor = document.querySelector('.cursor');
let mouseX = 0,
  mouseY = 0;

const cursorMove = () => {
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
  cursor.style.transform = `translate(-50%, -50%)`;

  requestAnimationFrame(cursorMove);
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorMove();

// Hide cursor on links
const a = document.querySelectorAll('a');

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hide-cursor')
  })
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hide-cursor')
  })
})

// ================== Scroll Reveal Animation ==================
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  // reset: true
});

sr.reveal(`.home_image, .projects_container, .work_container, .services_container, .contact_container`)
sr.reveal(`.home_data`, { delay: 900, origin: 'bottom' })
sr.reveal(`.home_info`, { delay: 1200, origin: 'bottom' })
sr.reveal(`.home_social, .home_cv`, { delay: 1500 })
sr.reveal(`.about_data`, { origin: 'left' })
sr.reveal(`.about_image`, { origin: 'right' })
sr.reveal(`.services_card`, { interval: 100 })

// ================== Work Tabs ==================
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
