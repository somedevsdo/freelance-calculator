import { test } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test('accessibility test', async ({ page }) => {
  await page.goto('/');

  // accessibility check
  await injectAxe(page);
  await checkA11y(page, undefined, {
    detailedReport: true,
    detailedReportOptions: { html: true },
    axeOptions: {},
  });
});
