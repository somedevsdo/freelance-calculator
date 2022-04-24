import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test('homepage test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = page.locator('a');
  await expect(title).toHaveText('somedevsdo');
});

test('accessibility test', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // accessibility check
  await injectAxe(page);
  await checkA11y(page, undefined, {
    detailedReport: true,
    detailedReportOptions: { html: true },
    axeOptions: {},
  });
});
