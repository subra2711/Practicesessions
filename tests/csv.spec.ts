//export from csv

import { test,expect } from '@playwright/test';
import { readCsv } from '../utils/csv.reader';

test.describe("Amazon csv Test", () => {
    test('Select data from csv', async ({ page }) => {
        let i ;
        const fileData = await readCsv("csvfile.csv")
        console.log("fileData:", fileData)
        await page.goto ('https://www.amazon.in/');

        await page.locator('#twotabsearchtextbox').click()
       for(i=0;i<fileData.length;i++) {
        await page.locator('#twotabsearchtextbox').fill(fileData[i].key)
        await page.locator('#sac-suggestion-row-1-cell-1').click()
        const resultSet = await page.locator('[data-component-type="s-search-result"]')
        const title = await resultSet.nth(0).locator('[data-cy="title-recipe"]').getByRole('heading').nth(0).textContent()
        const price = await resultSet.nth(0).locator('[data-cy="price-recipe"] .a-price-whole').textContent()
        console.log('title',title)
        console.log('fileTitle',fileData[i].title)
        expect(title===fileData[i].title).toBeTruthy();
        console.log('price',price)
        console.log('filePrice',fileData[i].price)
        expect(price===fileData[i].price).toBeTruthy();
       }
       

    });
});
  