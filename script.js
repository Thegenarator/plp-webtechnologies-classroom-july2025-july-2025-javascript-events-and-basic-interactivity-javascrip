// Dark mode toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Animated count
const countElement = document.getElementById('count');
let count = 0;
const targetCount = 1287;
const speed = 15;

function animateCount() {
  const increment = Math.ceil(targetCount / 100);
  const counter = setInterval(() => {
    count += increment;
    if (count >= targetCount) {
      count = targetCount;
      clearInterval(counter);
    }
    countElement.textContent = count.toLocaleString();
  }, speed);
}

window.addEventListener('DOMContentLoaded', () => {
  animateCount();

  // Typed.js init
  new Typed('#typed', {
    strings: ['Laptop Repairs', 'Mobile Fixes', 'ICT Consultations'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
});

// Manual increment
document.getElementById('counterBtn').addEventListener('click', () => {
  count++;
  countElement.textContent = count.toLocaleString();
});

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  let valid = true;
  document.querySelectorAll('.feedback').forEach(f => f.textContent = '');
  document.querySelectorAll('input').forEach(i => i.classList.remove('error', 'success'));

  if (name.value.trim() === '') {
    document.getElementById('nameFeedback').textContent = 'Name is required';
    name.classList.add('error');
    valid = false;
  } else {
    name.classList.add('success');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    document.getElementById('emailFeedback').textContent = 'Invalid email';
    email.classList.add('error');
    valid = false;
  } else {
    email.classList.add('success');
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password.value)) {
    document.getElementById('passwordFeedback').textContent = 'Password must have 8+ chars, numbers & letters';
    password.classList.add('error');
    valid = false;
  } else {
    password.classList.add('success');
  }

  const formMessage = document.getElementById('formMessage');
  if (valid) {
    formMessage.textContent = 'Form submitted successfully!';
    formMessage.style.color = '#2ecc71';
  } else {
    formMessage.textContent = 'Please fix the errors above.';
    formMessage.style.color = '#e74c3c';
  }
});

// Live search filter
document.getElementById('searchServices').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const items = document.querySelectorAll('#servicesList li');
  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(query) ? 'list-item' : 'none';
  });
});

// Scroll progress bar
window.onscroll = function () {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('progressBar').style.width = `${scrolled}%`;
};
