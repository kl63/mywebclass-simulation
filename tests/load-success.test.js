const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the homepage
  await page.goto('https://www.example.com/');

  // Verify that the page loaded successfully
  const pageTitle = await page.title();
  if (pageTitle === 'Example Domain') {
    console.log('Homepage loaded successfully!');
  } else {
    console.error('Homepage failed to load.');
  }

  await browser.close();
})();
