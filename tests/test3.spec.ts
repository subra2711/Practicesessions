


// To navigate page from topbar & filter the products in same page

import test from '@playwright/test';

test.describe("test 3" , () => {
    test('test 3', async ({ page }) => {
            await page.goto ('https://www.amazon.in/');

    // To click the navigation bar option (mobiles)       
            await page.locator('[data-csa-c-content-id="nav_cs_mobiles"]').click()
    // To select the filter option (samsung)       
            const checkboxText = await page.locator('#apb-browse-refinements-checkbox_3').getByRole("checkbox").setChecked(true)
            console.log('checkboxText:', checkboxText)

    const resultSet = await page.locator('[data-component-type="s-search-results"]')
    const firstTitle = await resultSet.nth(0).locator('[data-cy="title-recipe"]').getByRole('heading').nth(0).textContent()
    const secondTitle = await resultSet.nth(1).locator('[data-cy="title-recipe"]').getByRole('heading').nth(0).textContent()

    })
})