import test from '@playwright/test';

test.describe("test 3" , () => {
    test('test 3', async ({ page }) => {
            await page.goto ('https://www.amazon.in/');
    })
})