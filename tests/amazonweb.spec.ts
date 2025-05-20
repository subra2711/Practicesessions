
// Test 1 : To search kurtas from amazon website and print the name,description,price of first three products

import test from '@playwright/test';

test.describe("test 1" , () => {

    test('test 1', async ({ page }) => {
            
        await page.goto ('https://www.amazon.in/');
        await page.locator('#twotabsearchtextbox').click()
        await page.locator('#twotabsearchtextbox').fill('kurtas for women ')
        await page.locator('#sac-suggestion-row-1-cell-1').click()
        const resultSet = await page.locator('[data-component-type="s-search-result"]')

        //To show results for first product
        const firstTitle = await resultSet.nth(0).locator('[data-cy="title-recipe"]').getByRole('heading').nth(0).textContent()
        const firstDescription = await resultSet.nth(0).locator('[data-cy="title-recipe"]').getByRole('heading').nth(1).textContent()
        const firstPrice = await resultSet.nth(0).locator('[data-cy="price-recipe"] .a-price-whole').textContent()
       
        // To show results for second product
        const secondTitle = await resultSet.nth(1).locator('[data-cy="title-recipe"]').getByRole('heading').nth(0).textContent()
        const secondDescription = await resultSet.nth(1).locator('[data-cy="title-recipe"]').getByRole('heading').nth(1).textContent()
        const secondPrice = await resultSet.nth(1).locator('.a-price-whole').textContent()

        // To show results for third product
        const thirdTitle = await resultSet.nth(2).locator('[data-cy="title-recipe"]').getByRole('heading').nth(0).textContent()
        const thirdDescription = await resultSet.nth(2).locator('[data-cy="title-recipe"]').getByRole('heading').nth(1).textContent()
        const thirdPrice = await resultSet.nth(2).locator('.a-price-whole').textContent()
        
        // To print the values 
        console.log('title 1:', firstTitle)
        console.log('description 1:', firstDescription)
        console.log('price 1:',firstPrice)
        console.log('title 2:', secondTitle)
        console.log('description 2:', secondDescription)
        console.log('price 2:',secondPrice)
        console.log('title 3:', thirdTitle)
        console.log('description 3:', thirdDescription)
        console.log('price 3:',thirdPrice)

         //while(true) {

         //}
    })
});