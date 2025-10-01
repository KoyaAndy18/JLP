// Simple form submit handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  // Simulate send
  const alertEl = document.getElementById('formAlert');
  alertEl.textContent = 'Thank you! Your message has been sent.';
  alertEl.style.display = 'block';
  // Clear fields
  this.reset();
});
