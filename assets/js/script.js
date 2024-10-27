// import '../css/style.css' CHECK IF THIS IS CORRECT

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
