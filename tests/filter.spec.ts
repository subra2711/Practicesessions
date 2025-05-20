


// To navigate page from topbar & filter the products in same page

import { test, expect } from '@playwright/test';

test.describe("Amazon Mobiles Filter Test", () => {
  test('Select mobiles and filter Samsung, print first 3 results', async ({ page }) => {
    // Navigate to Amazon India
    await page.goto('https://www.amazon.in/');

    // Click on the "Mobiles" tab in the top navigation bar
    await page.locator('[data-csa-c-content-id="nav_cs_mobiles"]').click();
    await page.waitForLoadState('domcontentloaded');

    // Wait for Samsung checkbox to be visible and click it
    await page.waitForSelector('span.a-size-base.a-color-base:has-text("Samsung")', { timeout: 10000 });
    await page.locator('span.a-size-base.a-color-base:has-text("Samsung")').click();

    // Get the search result items
    const resultSet = page.locator('[data-component-type="s-search-result"]');

    // Loop through first 3 results
    for (let i = 0; i < 3; i++) {
      const title = await resultSet.nth(i).locator('h2 span').textContent();
      console.log(`Product ${i + 1}: ${title}`);
    }
  });
});

