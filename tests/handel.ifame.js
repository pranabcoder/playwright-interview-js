import {test, chromium} from "@playwright/test";

test("handle iframe test", async () => {
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("")
})