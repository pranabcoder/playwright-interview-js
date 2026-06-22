import {test, chromium} from "@playwright/test";

test("handle multiple tab demo", async ({page}) => {
    await page.goto("https://demo.automationtesting.in/Windows.html");
    const [newTab] = await Promise.all([
        page.context().waitForEvent('page'),
        page.locator('button.btn.btn-info:visible').click()
    ]);
    await newTab.waitForLoadState();
    await newTab.locator('span').filter({ hasText: 'Downloads' }).click();
    await newTab.waitForTimeout(5000);
    await newTab.close()
    await page.close()
})