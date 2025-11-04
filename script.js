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

const visaData = {
  Schengen: {
    Germany: ['Tourist', 'Business', 'Student', 'Family'],
    Italy: ['Tourist', 'Business', 'Student'],
    Spain: ['Tourist', 'Business', 'Family'],
    Netherlands: ['Tourist', 'Startup', 'Student'],
  },
  USA: {
    'United States': ['B1/B2 Tourist', 'F1 Student', 'H1B Work'],
  },
  UK: {
    'United Kingdom': ['Tourist', 'Business', 'Student', 'Family'],
  },
  Canada: {
    Canada: ['Visitor', 'Study', 'Work', 'Super Visa'],
  },
  Asia: {
    Japan: ['Tourist', 'Business'],
    Korea: ['Tourist', 'Business', 'Student'],
    Singapore: ['Tourist', 'Business', 'EntrePass'],
  },
};

const regionSelect = document.querySelector('#region');
const countrySelect = document.querySelector('#country');
const visaTypeSelect = document.querySelector('#visaType');

const populateCountries = (region) => {
  if (!countrySelect || !visaTypeSelect) return;
  const countries = Object.keys(visaData[region] || {});
  countrySelect.innerHTML = countries
    .map((country) => `<option value="${country}">${country}</option>`)
    .join('');
  populateVisaTypes(region, countrySelect.value);
};

const populateVisaTypes = (region, country) => {
  if (!visaTypeSelect) return;
  const types = (visaData[region] || {})[country] || [];
  visaTypeSelect.innerHTML = types
    .map((type) => `<option value="${type}">${type}</option>`)
    .join('');
};

if (regionSelect) {
  populateCountries(regionSelect.value);
  regionSelect.addEventListener('change', (event) => {
    populateCountries(event.target.value);
  });
}

if (countrySelect && regionSelect) {
  countrySelect.addEventListener('change', (event) => {
    populateVisaTypes(regionSelect.value, event.target.value);
  });
}

const heroForm = document.querySelector('.hero-form');
if (heroForm) {
  heroForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const region = regionSelect?.value;
    const country = countrySelect?.value;
    const visaType = visaTypeSelect?.value;
    const slug = [region, country, visaType]
      .filter(Boolean)
      .join(' → ');
    alert(`We'll share the tailored checklist for ${slug}.`);
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
