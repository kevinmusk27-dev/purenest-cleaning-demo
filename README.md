# PureNest Cleaning — V4

An offline residential-cleaning concept website for the AI Solo Lab experiment. **Demo Website — Not a Real Business.** V2's forest-green and cream design, SVG artwork, services, demo areas, FAQ, and request preview remain intact.

## Open on Windows

Open D:\AI-Solo-Lab\Cleaning-Website in File Explorer and double-click index.html. Keep index.html, style.css, and script.js together. No installation, server, account, or internet connection is required.

## Use the calculator

Click **Get a Free Quote** in the hero, navigation, demo areas, closing section, or footer. Choose Home Size, Bedrooms (1–6), Bathrooms (1–5), Half Bathrooms (0–4), Cleaning Type, and optional add-ons. The USD estimate and breakdown update immediately; no submit action is needed. Reset restores Under 1,000 sq ft, one bedroom, one bathroom, zero half bathrooms, Standard Cleaning, and no add-ons: **$100.00**. On mobile/tablet, a second current total above the controls and a **View breakdown** link make the result easier to find.

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

One bedroom and one full bathroom are included. Each additional bedroom adds $15; each additional full bathroom adds $20. Each half bathroom adds $10, starting from zero. A half bathroom has a sink and toilet without a tub or shower; count it separately from full bathrooms. Standard Cleaning uses ×1.0, Deep Cleaning ×1.5, Move-In / Move-Out Cleaning ×1.8.

Add-ons: Inside Oven $25; Inside Fridge $25; Interior Windows $40; Laundry $20. Multiple add-ons can be selected; each is charged once without quantity input.

**Total = (home-size base + extra bedroom charges + extra full bathroom charges + half bathrooms × $10) × cleaning multiplier + add-ons.** Half bathroom charges are included BEFORE applying the multiplier; add-ons are not multiplied. USD output always has two decimal places. Taxes, discounts, custom scope, conditions, and recurring plans are not modeled.

Example: 1,500–1,999 sq ft, 3 bedrooms, 2 bathrooms, Deep Cleaning, Inside Oven:

`($160 + $30 + $20) × 1.5 + $25 = $340.00`

With two half bathrooms added, the same Deep Cleaning example becomes `($160 + $30 + $20 + $20) × 1.5 + $25 = $370.00`. Selecting Move-In / Move-Out instead gives `$230 × 1.8 + $25 = $439.00`.

The result card displays:

> Demo estimate only. PureNest Cleaning is a fictional business. Prices are illustrative and do not represent a real service quote. No booking or payment is available.

Pricing tables and update/reset functions are grouped at the beginning of script.js. Calculator styles are at the end of style.css.

## Privacy and demo boundaries

No names, emails, phones, or addresses are requested. Use sample home details. All calculations and previews stay in temporary page memory. No API, backend, database, analytics, cookies, localStorage, sessionStorage, login, real booking, or payment is used. Reloading or history restoration resets values. No quote data is transmitted or saved.

Original inline SVG illustrations and system fonts require no external resources. No new third-party image assets were introduced in V3. SVG artwork was drawn for this project without third-party imagery. Demo Austin-area locations do not indicate actual service availability. No testimonials, credentials, or real contact details are claimed. No domain, deployment, paid service, or third-party registration was added.

Controls use native labels, fieldset/legend grouping, keyboard support, focus styling, and reduced-motion support. V4 keeps immediate visual updates but announces only the final total after 400 ms without another change. A single polite live region avoids reading the entire breakdown/disclaimer and skips duplicate totals. Quote links focus the calculator heading; View breakdown focuses the result card. Without JavaScript, the price remains a dash with an enable-JavaScript notice; Reset and demo submission stay disabled. Navigation and native FAQ controls remain usable. These accessibility behaviors were checked programmatically, not with an actual screen reader.

## Backup and changed files

Before V4 edits, the full existing project (including the older backup-v2 folder) was copied into **backup-v3/**. Existing backups were not overwritten or deleted. Open backup-v3/index.html to view the saved V3. Website source remains index.html, style.css, and script.js.

V4 modifies those three source files and README.md. New artifacts: **test-v4.cjs**, full-page **v4-390.png / v4-768.png / v4-1440.png**, and isolated **v4-calculator-390.png / v4-calculator-768.png / v4-calculator-1440.png**. Isolated captures hide the sticky header and skip link only during capture so those overlays do not cover the component; full-page captures retain normal site styling.

The V2/V3 records below describe earlier work; use test-v4.cjs for current regression testing.

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

## Actual V4 verification

Executed JavaScript syntax checks and Playwright browser tests using installed Microsoft Edge:

- All **43,200 combinations** of six home sizes, six bedroom counts, five full bathroom counts, five half bathroom counts, three cleaning types, and sixteen add-on combinations matched independent expected totals.
- Original $340.00 example, two-half-bathroom $370.00 deep-clean example, and $439.00 moving-clean example passed. The half-bathroom breakdown and pre-multiplier subtotal were checked directly.
- Reset restored all five default selects and cleared add-ons. Keyboard changes and matching mobile/main total displays passed. A MutationObserver verified one concise final live announcement after rapid input/change events and no duplicate announcement for an unchanged price.
- At **390px, 768px, 1440px** (900px height): no horizontal overflow or horizontally clipped controls. Calculator selects, add-on label targets, Reset, and the visible menu toggle were at least 44px high. Visible section links were clicked. Primary quote links reached the calculator and focused its heading; mobile View breakdown focused the result card.
- All navigation-menu controls, all six FAQ items, four service-card preselection actions, and retained demo form validation/preview/reload behavior passed. No-JavaScript fallbacks passed.
- No runtime JavaScript errors or HTTP/HTTPS requests were observed; the form triggered no request, and localStorage/sessionStorage remained empty in the test context.
- Full-page and calculator screenshots were generated at all three requested widths. Screenshot review checks visual layout; automated geometry checks alone do not establish all text is readable in every environment.

To rerun V4 checks, use the existing Playwright installation as described above and run **node test-v4.cjs**. No dependency download is performed. Syntax checks: **node --check script.js** and **node --check test-v4.cjs**.

Remaining limitations: actual screen-reader speech, physical touch devices, other browsers, formal W3C validation, and every viewport/zoom setting have not been tested. The five-company research materials were not provided; V4 implements the stated requirements without claiming a new competitive study. No known calculation failures remain among the tested combinations.

## GitHub Pages readiness

The static source is suitable for preparing a GitHub Pages update after your review. No GitHub upload or publication was performed. Publish only the intended site files (index.html, style.css, script.js); keep backup folders, test scripts, and QA screenshots out of the public deployment unless intentionally needed. This avoids publishing old demos and unnecessary project artifacts. All fictional-business and illustrative-price notices must remain visible.
