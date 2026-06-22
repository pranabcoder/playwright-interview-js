import {test, chromium} from "@playwright/test";

test("handle iframe test", async ({page}) => {
    await page.goto("https://testing.qaautomationlabs.com/iframe.php");
    await page.waitForTimeout(5000);
    const frame = page.frameLocator('#iframe1');
    await frame.getByRole('button', {name: 'Click Me'}).click();
    await page.waitForTimeout(5000);
})