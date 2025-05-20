// Product search in amazon static test

import { test, expect, Page, Locator } from '@playwright/test';

test.describe("test 4", () => {
  let SearchInput: Locator;

  const staticSearchData = [
    { keyword: 'plant hangers', count: 2 },
    { keyword: 'bags', count: 3 },
    { keyword: '20W adaptor', count: 2 },
    { keyword: 'pens', count: 4 },
  ];

  // Using hooks such as beforeEach and afterEach
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.in/');
  });

  test.afterEach(async ({ page }) => {
    console.log('Search completed. Resetting browser...');
    await page.goto('https://www.amazon.in/');
  });

  async function searchProduct(page: Page, productName: string) {
   SearchInput = page.locator('#twotabsearchtextbox');
    await SearchInput.click();
    await SearchInput.fill(productName);
    await page.keyboard.press('Enter');
  }

  async function getProducts(page: Page, count: number) {
    const resultSet = await page.locator('[data-component-type="s-search-result"]');

    for (let i = 0; i < count; i++) {
      const title = await resultSet.nth(i).locator('h2 span').textContent();
      const price = await resultSet.nth(i).locator('.a-price .a-price-whole').textContent();
      console.log(`Product ${i + 1}: ${title?.trim()} - ₹${price?.trim()}`);
    }
  }

  for (const item of staticSearchData) {
    test(`Search for "${item.keyword}" and validate top ${item.count} products`, async ({ page }) => {
      await searchProduct(page, item.keyword);
      await getProducts(page, item.count);
    });
  }
});