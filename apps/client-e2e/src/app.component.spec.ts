import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('should render router-outlet', async ({ page }) => {
  await expect(page.locator('router-outlet')).toHaveCount(1);
});
