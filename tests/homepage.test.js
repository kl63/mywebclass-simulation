const { test, expect } = require('@playwright/test');

test('Homepage loads successfully', async ({ page }) => {
  await page.goto('https://www.example.com/');
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Example Domain');
});
