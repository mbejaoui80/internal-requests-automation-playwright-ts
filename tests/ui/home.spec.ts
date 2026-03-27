import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load title and have a Get Started link', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Playwright/);

    const getStartedLink = page.getByRole('link', { name: /get started/i });
    await expect(getStartedLink).toBeVisible();
  });
});

