console.log("Script loaded");

const navbarToggler = document.querySelector('.navbar-toggler');
const menu = document.querySelector('#menu');

// Add event listener to toggle menu on click
navbarToggler.addEventListener('click', () => {
  console.log("Hamburger clicked")
  const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
  navbarToggler.setAttribute('aria-expanded', !isExpanded);
  menu.classList.toggle('active');
});

// Ensure the menu is reset when resizing the window
window.addEventListener('resize', () => {
  if (window.innerWidth >= 720) {
    // Ensure menu is shown and aria-expanded is true on larger screens
    menu.classList.remove('active');
    navbarToggler.setAttribute('aria-expanded', 'false');
  }
});

// Close the menu when clicking outside (for mobile)
document.addEventListener('click', (event) => {
  const isClickInside = navbarToggler.contains(event.target) || menu.contains(event.target);
  
  if (!isClickInside && window.innerWidth < 720) {
    menu.classList.remove('active');
    navbarToggler.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('.tech-item').forEach(item => {
  item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '#f0f0f0';  // Change background on hover
  });

  item.addEventListener('mouseout', () => {
      item.style.backgroundColor = 'transparent'; // Reset background
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("portfolio-modal");
  const closeBtn = document.querySelector(".close-modal");

  // Check if the modal has been seen before
  if (!localStorage.getItem("seenModal")) {
    modal.style.display = "flex"; // Show modal

    // Close modal when user clicks 'X' or outside the modal
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
      localStorage.setItem("seenModal", "true"); // Save in localStorage
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        localStorage.setItem("seenModal", "true");
      }
    });
  }
});
