// script.js

document.querySelector('.plan-card').addEventListener('click', () => {
  window.location.href = 'pages/payment.html';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
