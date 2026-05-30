# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> Login to the system
- Location: tests/example.spec.js:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | // @ts-check
  2  | import { test, expect } from '@playwright/test';
  3  | import LoginPage from "../pages/LoginPage";
  4  | 
  5  | test('Login to the system', async ({ page }) => {
  6  |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  7  | 
  8  |     const loginPageObject = new LoginPage(page);
  9  |     await loginPageObject.loginUser('Admin', 'admin123');
  10 |     await page.waitForTimeout(10000);
  11 |     await page.locator('a').filter({ hasText: 'Leave' }).click();
> 12 |     await page.waitForTimeout(10000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  13 |     await page.close();
  14 | });
```