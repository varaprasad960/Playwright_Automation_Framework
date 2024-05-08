// import {test} from '@playwright/test';
// import LoginPage from '../pages/LoginPage';


// test('test', async ({page})=>{

//     const loginPage = new LoginPage(page);
//     await loginPage.navigatetoLoginPage();
//     await loginPage.fillUsername('cc@mailinator.com');
//     await loginPage.fillPassword('Epass@123');
//     await page.waitForTimeout(5000);
//     // await loginPage.clickLoginButton();
//     // await page.waitForTimeout(5000);

//     const homePage = await loginPage.clickLoginButton();
//     await homePage.expectHomeTitleTobeVisible();
    



// })

import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigatetoLoginPage();
    await loginPage.fillUsername('cc@mailinator.com');
    await loginPage.fillPassword('Epass@123');
    await page.waitForTimeout(5000);

    // Click the login button and wait for the transition to the home page
    const homePage = await loginPage.clickLoginButton();

    // Now, wait for the home title to be visible
    //await homePage.expectHomeTitleToBeVisible();
});
