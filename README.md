# PureNest Cleaning — V3

An offline residential-cleaning concept website for the AI Solo Lab experiment. **Demo Website — Not a Real Business.** V2's forest-green and cream design, SVG artwork, services, demo areas, FAQ, and request preview remain intact.

## Open on Windows

Open D:\AI-Solo-Lab\Cleaning-Website in File Explorer and double-click index.html. Keep index.html, style.css, and script.js together. No installation, server, account, or internet connection is required.

## Use the calculator

Click **Get a Free Quote** in the hero, navigation, demo areas, closing section, or footer. Choose Home Size, Bedrooms (1–6), Bathrooms (1–5), Cleaning Type, and optional add-ons. The USD estimate and breakdown update immediately. Reset restores Under 1,000 sq ft, one bedroom, one bathroom, Standard Cleaning, and no add-ons: **$100.00**.

The four original service-card links still open the separate **Demo Request Preview** form with the matching service preselected, including Recurring Cleaning. That form shows only a local selection summary. Recurring-service prices and schedules are not modeled by the new three-type calculator.

## Calculation rules

All prices below are invented demo figures, not U.S. market rates.

| Home size | Base |
| --- | ---: |
| Under 1,000 sq ft | $100 |
| 1,000–1,499 sq ft | $130 |
| 1,500–1,999 sq ft | $160 |
| 2,000–2,499 sq ft | $190 |
| 2,500–2,999 sq ft | $220 |
| 3,000+ sq ft | $260 |

One bedroom and one bathroom are included. Each additional bedroom adds $15; each additional bathroom adds $20. Standard Cleaning uses ×1.0, Deep Cleaning ×1.5, Move-In / Move-Out Cleaning ×1.8.

Add-ons: Inside Oven $25; Inside Fridge $25; Interior Windows $40; Laundry $20. Multiple add-ons can be selected; each is charged once without quantity input.

**Total = (home-size base + extra bedroom charges + extra bathroom charges) × cleaning multiplier + add-ons.** Add-ons are not multiplied. USD output always has two decimal places. Taxes, discounts, custom scope, conditions, and recurring plans are not modeled.

Example: 1,500–1,999 sq ft, 3 bedrooms, 2 bathrooms, Deep Cleaning, Inside Oven:

`($160 + $30 + $20) × 1.5 + $25 = $340.00`

The result card displays:

> Demo estimate only. PureNest Cleaning is a fictional business. Prices are illustrative and do not represent a real service quote. No booking or payment is available.

Pricing tables and update/reset functions are grouped at the beginning of script.js. Calculator styles are at the end of style.css.

## Privacy and demo boundaries

No names, emails, phones, or addresses are requested. Use sample home details. All calculations and previews stay in temporary page memory. No API, backend, database, analytics, cookies, localStorage, sessionStorage, login, real booking, or payment is used. Reloading or history restoration resets values. No quote data is transmitted or saved.

Original inline SVG illustrations and system fonts require no external resources. No new third-party image assets were introduced in V3. SVG artwork was drawn for this project without third-party imagery. Demo Austin-area locations do not indicate actual service availability. No testimonials, credentials, or real contact details are claimed. No domain, deployment, paid service, or third-party registration was added.

Controls use native labels, fieldset/legend grouping, keyboard support, focus styling, reduced-motion support, and a polite live price announcement. Without JavaScript, the price remains a dash with an enable-JavaScript notice; Reset and demo submission stay disabled. Navigation and native FAQ controls remain usable.

## Backup and changed files

Before modifying V3, all top-level V2 files were copied to **backup-v2/**, including HTML, CSS, JavaScript, README, test source, and screenshots. No earlier backup was overwritten. Open backup-v2/index.html to view V2 independently.

Modified: index.html, style.css, script.js, README.md.
Added: test-v3.cjs and v3-1440.png, v3-768.png, v3-390.png.
Existing V2 test/screenshots remain historical artifacts; use the V3 test for current behavior.

## Actual V3 verification

Executed Node.js syntax checks and automated tests in installed Microsoft Edge via Playwright:

- All **8,640 combinations** of six home sizes, six bedroom counts, five bathroom counts, three multipliers, and sixteen add-on combinations matched independently calculated totals.
- **$340.00** example and $315.00 cleaning subtotal passed. Reset restored all default selections and cleared add-ons, producing $100.00. Keyboard changes updated the price.
- **1440px, 768px, 390px**, each with 900px viewport height: no horizontal document overflow or horizontally clipped controls. Visible section links were clicked at each width. Full-page screenshots were generated and visually reviewed without visible text overlap or obscured buttons.
- Mobile toggle, Escape, outside-click dismissal, every navigation link, all six FAQ items, and all four original service preselection actions passed.
- Original demo form: required fields, consent, rejection of 99 / 20,001 / fractional square footage, valid boundaries, local preview, edit dismissal, and reload reset passed.
- No runtime JavaScript errors, HTTP/HTTPS requests, submission requests, or localStorage/sessionStorage entries were observed. No-JavaScript fallback passed for both the form and calculator.

Rerun with an existing Playwright installation and Microsoft Edge: set PLAYWRIGHT_PATH to the existing Playwright package directory if needed, then run `node test-v3.cjs`. No dependency installation is performed by the test. Screenshots are written inside this project. Run `node --check script.js` for a syntax check.

Not tested: physical devices, Chrome/Firefox/Safari, screen readers, formal W3C validation, every viewport or zoom level. Automated geometry checks and screenshot review do not guarantee universal accessibility or browser compatibility. No known calculation failures remain in tested combinations.
