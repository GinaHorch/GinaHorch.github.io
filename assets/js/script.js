const summary = document.querySelector('summary');
summary.addEventListener('click', () => {
  const expanded = summary.getAttribute('aria-expanded') === 'true' || false;
  summary.setAttribute('aria-expanded', !expanded);
});

document.querySelectorAll('.tech-item').forEach(item => {
  item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '#f0f0f0';  // Change background on hover
  });

  item.addEventListener('mouseout', () => {
      item.style.backgroundColor = 'transparent'; // Reset background
  });
});

const navbarToggler = document.querySelector('.navbar-toggler');
const menu = document.querySelector('#menu');

// Add event listener to toggle menu on click
navbarToggler.addEventListener('click', () => {
  const isExpanded = navbarToggler.getAttribute('aria-expanded') === true;
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
