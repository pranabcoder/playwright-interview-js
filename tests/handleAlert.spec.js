import {expect, test} from '@playwright/test';

test('Handling Alert Demo', async ({page}) => {
    await page.goto('https://demoqa.com/alerts');
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.click('#alertButton');
    await page.waitForTimeout(5000);
});