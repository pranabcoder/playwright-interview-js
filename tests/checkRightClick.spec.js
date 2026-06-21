import {test} from '@playwright/test';

test('Check Right Click', async ({page}) => {
    await page.goto('https://vinothqaacademy.com/mouse-event/');
    await page.locator('#rightBtn').click({button:'right'});
    await page.waitForTimeout(1000);
});