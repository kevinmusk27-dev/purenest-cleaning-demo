'use strict';

// V3: illustrative prices only; no network or storage access.
const DEMO_PRICING = {
  sizes: { small: 100, medium: 130, large: 160, xl: 190, xxl: 220, largest: 260 },
  types: { standard: 1, deep: 1.5, moving: 1.8 },
  addons: { oven: 25, fridge: 25, windows: 40, laundry: 20 }
};
const calculator = document.querySelector('#calculator-controls');
const calcSelects = ['size', 'bedrooms', 'bathrooms', 'type'].map(key => document.querySelector(`#calc-${key}`));
const calcAddons = [...document.querySelectorAll('.calc-addon')];
const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
function updateEstimate() {
  const [size, beds, baths, type] = calcSelects.map(select => select.value);
  const base = DEMO_PRICING.sizes[size];
  const bedrooms = (Number(beds) - 1) * 15;
  const bathrooms = (Number(baths) - 1) * 20;
  const subtotal = base + bedrooms + bathrooms;
  const multiplier = DEMO_PRICING.types[type];
  const cleaning = Math.round(subtotal * multiplier * 100) / 100;
  const addons = calcAddons.reduce((sum, input) => sum + (input.checked ? DEMO_PRICING.addons[input.value] : 0), 0);
  Object.entries({ base, bedrooms, bathrooms, subtotal, cleaning, addons }).forEach(([key, amount]) => {
    document.querySelector(`#price-${key}`).textContent = usd.format(amount);
  });
  document.querySelector('#price-multiplier').textContent = `× ${multiplier.toFixed(1)}`;
  document.querySelector('#estimated-price').textContent = usd.format(cleaning + addons);
}
function resetCalculator() {
  calcSelects.forEach(select => { select.selectedIndex = 0; });
  calcAddons.forEach(input => { input.checked = false; });
  updateEstimate();
}
calculator.addEventListener('input', updateEstimate);
calculator.addEventListener('change', updateEstimate);
const calculatorReset = document.querySelector('#calculator-reset');
calculatorReset.addEventListener('click', resetCalculator);
calculatorReset.disabled = false;
resetCalculator();
window.addEventListener('pageshow', resetCalculator);

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const mobileQuery = window.matchMedia('(max-width: 900px)');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.hidden = mobileQuery.matches;
}

menuButton.hidden = false;
closeMenu();
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.hidden = isOpen;
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});
mobileQuery.addEventListener('change', closeMenu);

const form = document.querySelector('#quote-form');
const result = document.querySelector('#form-result');
const serviceSelect = document.querySelector('#service');
form.querySelector('button[type="submit"]').disabled = false;

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    serviceSelect.value = link.dataset.service;
    result.hidden = true;
    result.replaceChildren();
  });
});

// The form never submits, calls a network API, or writes to browser storage.
// Disabling the button also prevents accidental navigation if JavaScript is absent.
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const size = document.querySelector('#size').valueAsNumber;
  if (!Number.isInteger(size) || size < 100 || size > 20000) return;
  const bedrooms = document.querySelector('#bedrooms');
  const bathrooms = document.querySelector('#bathrooms');
  result.replaceChildren();
  const title = document.createElement('p');
  const strong = document.createElement('strong');
  strong.textContent = 'Your demo request is ready to preview.';
  title.append(strong);
  const summary = document.createElement('p');
  summary.textContent = `${serviceSelect.value} · ${bedrooms.selectedOptions[0].text} · ${bathrooms.selectedOptions[0].text} · ${size.toLocaleString('en-US')} sq ft`;
  const notice = document.createElement('p');
  notice.textContent = 'This is a local preview only. Nothing was sent or saved. No actual quote or booking has been created.';
  result.append(title, summary, notice);
  result.hidden = false;
});
form.addEventListener('input', () => {
  result.hidden = true;
  result.replaceChildren();
});
// Clear restored form values on entry, including back/forward cache restores.
window.addEventListener('pageshow', () => {
  form.reset();
  result.hidden = true;
  result.replaceChildren();
});
