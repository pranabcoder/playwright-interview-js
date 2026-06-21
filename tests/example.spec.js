// @ts-check
import {test, chromium, expect} from '@playwright/test';

const path = require('path');
const XLSX = require('xlsx');

function getExcelData() {
    const filePath = path.join(__dirname, 'data', 'users.xlsx');
    const workBook = XLSX.readFile(filePath);
    const sheet = workBook.Sheets['Sheet1'];
    return XLSX.utils.sheet_to_json(sheet);
}

const rows = getExcelData();

for (const row of rows) {
    test('has title', async ({}) => {
        const browser = await chromium.launch({
            headless: false,
        });
        const context = await browser.newContext({
            recordVideo:{
                dir: path.join(__dirname, 'videos/')
            }
        });
        const page = await context.newPage();
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', {name: 'Username'}).fill(row.username);
        await page.getByRole('textbox', {name: 'Password'}).fill(row.password);
        await page.getByRole('button', {name: 'Login'}).click();
        await page.waitForTimeout(5000);
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet');
        const rows = page.locator('.orangehrm-container');
        const count = await rows.count();
        console.log(count);
        await page.screenshot({
            path: path.join(__dirname, 'screenshot', 'screenshot.png'),
        })
        // await browser.close();
    })
}

test('check get api call', async ({request}) => {
    const response = await request.get(
        'https://api.freeapi.app/api/v1/public/randomusers/13'
    );
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test('check post api call', async ({request}) => {
    const response = await request.post('' +
        'https://api.freeapi.app/api/v1/ecommerce/coupons/c/apply', {
            data: {
                "couponCode": "CORRUPTI845"
            }
        }
    );

    const responseBody = await response.json();
    expect(response.status()).toBe(201);
    console.log(responseBody);
})
