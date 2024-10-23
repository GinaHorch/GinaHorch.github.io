import '../css/style.css'

const summary = document.querySelector('summary');
summary.addEventListener('click', () => {
  const expanded = summary.getAttribute('aria-expanded') === 'true' || false;
  summary.setAttribute('aria-expanded', !expanded);
});
