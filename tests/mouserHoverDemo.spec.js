import {test, chromium} from "@playwright/test";

test("check mouse hover demo", async ({page}) => {
    await page.goto("https://practice-automation.com/hover/");
    await page.locator('#mouse_over').hover();
    await page.waitForTimeout(5000);
})