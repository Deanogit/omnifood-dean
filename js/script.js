console.log("Hello World!");

// const h1 = document.querySelector(".heading-primary");
// console.log(h1);

// thats a nice way to do it, first get all the styles together, then add the eventListener...
// h1.style.backgroundColor = "red";
// h1.style.padding = "5rem";
// h1.style.border = "dashed 10px blue";

// h1.addEventListener("click", function () {
//   h1.textContent = "Hello World!";

//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
//   h1.style.border = "dashed 10px blue";
// });

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

///////////////////////////////////
// Mobile nav
// my attempt...
// const btnMobileNav = document.querySelector(
//   ".icon-mobile-nav[name=menu-outline]"
// );
// const header = document.querySelector(".header");

// // btnMobileNav.style.backgroundColor = "red";

// btnMobileNav.addEventListener("click", function () {
//   console.log("Button Click!");
//   header.classList.add("nav-open");
// });

// // Now remove menu

// const btnMobileNavRemove = document.querySelector(
//   ".icon-mobile-nav[name=close-outline]"
// );

// btnMobileNavRemove.addEventListener("click", function () {
//   header.classList.remove("nav-open");
// });

// Mobile nav Jonas style...

// he's just toggling the nav-open on and off by selecting the button

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  // toggle checks if class is present, if it is it removes it, otherwise it adds it..
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// (not sure this is required now aswell...)

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // console.log(e);
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    // scroll back to top

    if (href === "#")
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      if (headerEl.classList.contains("nav-open")) {
        headerEl.classList.remove("nav-open");
      }
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    // if the viewport is NOT intersecting the header,
    if (!ent.isIntersecting) {
      // add the sticky navbar
      document.body.classList.add("sticky");
    }
    // if the viewport IS intersecting, remove the sticky navbar
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // just in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
    // this is setting the body up by -80px so that the navbar doesnt make the layout jump when it is added/taken away,, (?not sure which one...)
  }
);
obs.observe(sectionHeroEl);

// wonder how I might be able to use this for synching the scrolling of the viewport with the background image...

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

// (not sure this is required anymore...)
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
