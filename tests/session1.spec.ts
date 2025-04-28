import test from '@playwright/test';

test.describe("trial session 1" , () => {
    test('test',async ({page}) => {
        await page.goto ('https://www.amazon.in/');
        await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
        await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('kurta ');
        await page.getByRole('button', { name: 'kurta sets for woman' }).click();
    });
});