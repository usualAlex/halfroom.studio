// TABS for the main studio site

// document.addEventListener("DOMContentLoaded", () => {
//   const links = document.querySelectorAll(".tab-link");
//   const tabs = document.querySelectorAll(".tab-content");

//   links.forEach(link => {
//     link.addEventListener("click", e => {
//       e.preventDefault();

//       // Remove active from all
//       links.forEach(l => l.classList.remove("active"));
//       tabs.forEach(t => t.classList.remove("active"));

//       // Add active to clicked tab
//       const target = link.getAttribute("data-tab");
//       link.classList.add("active");
//       document.getElementById(target).classList.add("active");

//       // Update URL in address bar
//       const url = `#${target}`;
//       window.history.pushState({}, '', url);
//     });
//   });
// });

window.addEventListener("load", () => {
  const links = document.querySelectorAll(".tab-link");
  const tabs = document.querySelectorAll(".tab-content");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // Remove active from all
      links.forEach(l => l.classList.remove("active"));
      tabs.forEach(t => t.classList.remove("active"));

      // Add active to clicked tab
      const target = link.getAttribute("data-tab");
      link.classList.add("active");
      document.getElementById(target).classList.add("active");

      // Update URL in address bar
      const url = `#${target}`;
      window.history.pushState({}, '', url);
    });
  });
});

//JEX toggle more info on the landing page
const storyButton = document.querySelector('.story-button');
const storyOverlay = document.querySelector('.story-overlay');
const closeButton = document.querySelector('.close-button');
const contentDiv = document.querySelector('.content'); // add this line

storyButton.addEventListener('click', () => {
  storyOverlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  contentDiv.classList.add('overlay-open');
});

closeButton.addEventListener('click', () => {
  storyOverlay.style.display = 'none';
  document.body.style.overflow = 'auto';
  contentDiv.classList.remove('overlay-open');
});