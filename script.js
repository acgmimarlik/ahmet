const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const desktopNavLinks = document.querySelectorAll('.main-nav a');

if (navToggle && mobileNav) {
  mobileNav.innerHTML = `
    ${Array.from(desktopNavLinks)
      .map((link) => `<a href="${link.getAttribute('href')}">${link.textContent}</a>`)
      .join('')}
    <button class="btn">Get started</button>
  `;

  const toggleMenu = () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mobileNav.setAttribute('aria-hidden', String(expanded));
  };

  navToggle.addEventListener('click', toggleMenu);
  mobileNav.setAttribute('aria-hidden', 'true');
}

const heroForm = document.querySelector('.hero-form');
if (heroForm) {
  heroForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const destination = heroForm.destination.value;
    alert(`We\'ll send the latest visa guidance for ${destination}.`);
  });
}

const ctaForm = document.querySelector('.cta-form');
if (ctaForm) {
  ctaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = ctaForm.email.value.trim();
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }
    alert(`Thanks for joining the waitlist, ${email}!`);
    ctaForm.reset();
  });
}
