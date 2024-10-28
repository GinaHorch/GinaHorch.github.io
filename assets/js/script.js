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
const menu  = document.querySelector('#menu');

navbarToggler.addEventListener('click', () => {
  const isExpanded = navbarToggler.getAttribute('aria-expanded') == 'true';

  // Toggle the "aria-expanded" attribute
  navbarToggler.setAttribute('aria-expanded', !isExpanded);
    
  // Toggle the active class for the menu
  menu.classList.toggle('active');
});