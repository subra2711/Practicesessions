import test from '@playwright/test';

test.describe('My first test - suite', () => {
  test('test', async ({ page }) => {
    await page.locator('body').click();
    await page.locator('body').press('ControlOrMeta+ArrowLeft');
    await page.locator('body').click();
    await page.locator('body').click({
      button: 'right'
    });
    await page.locator('body').click({
      button: 'right'
    });
    await page.locator('body').click({ 
      button: 'right'
    });
    await page.locator('body').click({
      button: 'right'
    });
    await page.goto('https://www.amazon.in/');
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('sta');
    await page.getByRole('button', { name: 'stand fans for home' }).click();
  });
});
