const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const year = document.querySelector('#year');
const form = document.querySelector('.reservation-form');
const message = document.querySelector('.form-message');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      message.textContent = 'Please fill in all required fields correctly.';
      return;
    }

    const data = new FormData(form);
    const guests = Number(data.get('guests'));

    if (!Number.isInteger(guests) || guests < 1 || guests > 12) {
      message.textContent = 'Guest count must be between 1 and 12.';
      return;
    }

    message.textContent = 'Thank you. Your reservation request has been received.';
    form.reset();
  });
}
