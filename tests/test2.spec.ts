


// Test_case 1 : To search amazon website for KURTAS and print the name,description,price of first three products

import test from '@playwright/test';

  test.describe("test 2" , () => {
      test('test_case 1', async ({ page }) => {
              await page.goto ('https://www.amazon.in/');
              await page.locator('#twotabsearchtextbox').click()
              await page.locator('#twotabsearchtextbox').fill('kurta ')
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

    //To print the results
        console.log('title 1:', firstTitle)
        console.log('description 1:', firstDescription)
        console.log('price 1:', firstPrice)
        console.log('title 2:', secondTitle)
        console.log('description 2:', secondDescription)
        console.log('price 2:',secondPrice)
        console.log('title 3:', thirdTitle)
        console.log('description 3:', thirdDescription)
        console.log('price 3:',thirdPrice)

         //while(true) {

         //}
        })
    })

 
//Test_case 2 : To search for SHOES in amazon website and print the name,description,price of first five products    

test.describe("test 2" , () => {
    test('test_case 2', async ({ page }) => {
            await page.goto ('https://www.amazon.in/');
            await page.locator('#twotabsearchtextbox').click()
            await page.locator('#twotabsearchtextbox').fill('shoes ')
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

    // To show results for fourth product
    const fourthTitle = await resultSet.nth(3).locator('[data-cy="title-recipe"]').getByRole('heading').nth(0).textContent()
    const fourthDescription = await resultSet.nth(3).locator('[data-cy="title-recipe"]').getByRole('heading').nth(1).textContent()
    const fourthPrice = await resultSet.nth(3).locator('.a-price-whole').textContent()

    // To show results for fifth product
    const fifthTitle = await resultSet.nth(4).locator('[data-cy="title-recipe"]').getByRole('heading').nth(0).textContent()
    const fifthDescription = await resultSet.nth(4).locator('[data-cy="title-recipe"]').getByRole('heading').nth(1).textContent()
    const fifthPrice = await resultSet.nth(4).locator('.a-price-whole').textContent()

    //To print the results

    console.log('title 1:', firstTitle)
    console.log('description 1:', firstDescription)
    console.log('price 1:', firstPrice)

    console.log('title 2:', secondTitle)
    console.log('description 2:', secondDescription)
    console.log('price 2:',secondPrice)

    console.log('title 3:', thirdTitle)
    console.log('description 3:', thirdDescription)
    console.log('price 3:',thirdPrice)

    console.log('title 4:', fourthTitle)
    console.log('description 4:', fourthDescription)
    console.log('price 4:',fourthPrice)

    console.log('title 5:', fifthTitle)
    console.log('description 5:', fifthDescription)
    console.log('price 5:',fifthPrice)


    //   while(true){
    //   }
    })
})

