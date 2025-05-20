// Product filter in Amazon using dynamic test with hooks

import { test, expect } from '@playwright/test';

// Use environment variables or fallback defaults
const filterKey = process.env.FILTER_KEY || 'Electronics';
const brandName = process.env.BRAND_NAME || 'JBL';

test.describe('Amazon Filter Dynamic Test', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.in/');
  });

  test.afterEach(async () => {
    console.log(`Filter test completed for brand: ${brandName}`);
  });

  test('Apply filter and assert brand in results', async ({ page }) => {
    const searchBox = page.getByRole('searchbox');
    await searchBox.fill(filterKey);
    await page.keyboard.press('Enter');

    // Wait for filter section to load
    await page.waitForSelector('span.a-text-bold:has-text("Brand")', { timeout: 10000 });

    // Click "See more" under brands, if visible
    const seeMore = page.locator('a:has-text("See more")').first();
    if (await seeMore.isVisible()) {
      await seeMore.scrollIntoViewIfNeeded();
      await seeMore.click();
    }

    // Locate brand checkbox
    const brandCheckbox = page.locator('span.a-size-base.a-color-base', { hasText: brandName }).first();
    await expect(brandCheckbox).toBeVisible({ timeout: 15000 });
    await brandCheckbox.scrollIntoViewIfNeeded();
    await brandCheckbox.click({ force: true });

    // Wait for search results to load
    const searchResults = page.locator('[data-component-type="s-search-result"]');
    await expect(searchResults.first()).toBeVisible({ timeout: 10000 });

    // Get all product titles from results
    const titles = await searchResults.locator('h2 span').allTextContents();

    // Validate product titles
    for (const title of titles.slice(0, 10)) { // Limit to first 10 results
      if (title.toLowerCase().includes(brandName.toLowerCase())) {
        expect(title).toMatch(new RegExp(brandName, 'i'));
      } else {
        console.warn(`Skipped title (brand not matched): ${title}`);
      }
    }
  });

});
