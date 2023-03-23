const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the homepage
  await page.goto('http://localhost:3000');

  // Verify that the page loaded successfully
  const pageTitle = await page.title();
  if (pageTitle === 'MyWebClass.org') {
    console.log('Homepage loaded successfully!');
  } else {
    console.error('Homepage failed to load.');
  }

  await browser.close();
})();
