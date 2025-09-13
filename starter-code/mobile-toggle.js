// const primaryHeader= document.querySelector('.primary-header');
const navToggle= document.querySelector('.mobile-nav-toggle');
const primaryNavigation= document.querySelector('.navigation');


navToggle.addEventListener("click", ()=> {
  primaryNavigation.hasAttribute("data-visible")
  ? navToggle.setAttribute("aria-expanded", true)
  : navToggle.setAttribute("aria-expanded", false)
  primaryNavigation.toggleAttribute("data-visible");
  // primaryHeader.toggleAttribute("data-overlay");
  
});
