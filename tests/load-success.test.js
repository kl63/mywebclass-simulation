const { test, expect } = require('@playwright/test');

test('Homepage should load successfully', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = await page.title();
  expect(title).toBe('MyWebClass.org');
});
