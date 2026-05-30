// @ts-check
import { test, expect } from '@playwright/test';
import LoginPage from "../pages/LoginPage";

test('Login to the system', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const loginPageObject = new LoginPage(page);
    await loginPageObject.loginUser('Admin', 'admin123');
    await page.waitForTimeout(10000);
    await page.locator('a').filter({ hasText: 'Leave' }).click();
    await page.waitForTimeout(10000);
    await page.close();
});